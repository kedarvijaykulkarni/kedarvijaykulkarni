import { NextRequest, NextResponse } from "next/server";
import { getAllPostsMeta } from "@/lib/mdx";

// TODO: generate a unique IndexNow key (https://www.indexnow.org/) and
// place a matching {KEY}.txt file in /public. Update INDEXNOW_KEY below to match.
const INDEXNOW_KEY = "indexnow-key-2026";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

const ENGINES = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

async function pingEngines(urlList: string[]) {
  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const results = [];

  for (const engine of ENGINES) {
    try {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      results.push({ engine, status: res.status, ok: res.ok });
    } catch (err) {
      results.push({ engine, status: 0, ok: false, error: String(err) });
    }
  }

  return { submitted: urlList.length, urls: urlList, results };
}

// GET: Vercel Cron hits this daily - submits all known URLs
export async function GET() {
  const posts = getAllPostsMeta();
  const urlList = posts.map((post) => `${SITE_URL}/blog/${post.slug}`);
  urlList.unshift(`${SITE_URL}`, `${SITE_URL}/blog`);

  const result = await pingEngines(urlList);
  return NextResponse.json(result);
}

// POST: Submit a single URL or all URLs
// Body: { "url": "https://example.com/blog/new-post" } for single URL
// Body: {} or no body for all URLs (same as GET)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const singleUrl = body?.url;

    if (singleUrl) {
      // Single URL mode
      if (
        typeof singleUrl !== "string" ||
        !singleUrl.startsWith(SITE_URL)
      ) {
        return NextResponse.json(
          { error: `url must be a valid ${SITE_HOST} URL` },
          { status: 400 }
        );
      }
      const result = await pingEngines([singleUrl]);
      return NextResponse.json(result);
    }

    // Batch mode (all URLs)
    const posts = getAllPostsMeta();
    const urlList = posts.map((post) => `${SITE_URL}/blog/${post.slug}`);
    urlList.unshift(`${SITE_URL}`, `${SITE_URL}/blog`);

    const result = await pingEngines(urlList);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to process request", detail: String(err) },
      { status: 500 }
    );
  }
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { MotionConfig } from "framer-motion";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kedarvijaykulkarni.vercel.app";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: "Kedar Kulkarni - Full-Stack Architect & AI Engineer",
  description:
    "Portfolio of Kedar Kulkarni - Full-Stack Architect & AI Engineer building enterprise platforms and production GenAI systems. Selected work, writing, and how to get in touch.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Kedar Kulkarni",
    title: "Kedar Kulkarni - Full-Stack Architect & AI Engineer",
    description:
      "Portfolio of Kedar Kulkarni - Full-Stack Architect & AI Engineer building enterprise platforms and production GenAI systems. Selected work, writing, and how to get in touch.",
    images: [
      {
        url: `${SITE_URL}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Kedar Kulkarni - Full-Stack Architect & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedar Kulkarni - Full-Stack Architect & AI Engineer",
    description:
      "Portfolio of Kedar Kulkarni - Full-Stack Architect & AI Engineer building enterprise platforms and production GenAI systems. Selected work, writing, and how to get in touch.",
    images: [`${SITE_URL}/og-default.png`],
  },
  // Indexable by default. Set NEXT_PUBLIC_NOINDEX=true (e.g. on demo deploys) to hide from search.
  robots:
    process.env.NEXT_PUBLIC_NOINDEX === "true"
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
};

// Applies the persisted theme class before paint, avoiding a light/dark flash on load.
const NO_FLASH_THEME_SCRIPT = `
try {
  var t = localStorage.getItem('theme');
  if (t ? t === 'dark' : true) {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* TODO: replace with your own Bing Webmaster verification code */}
        {/* <meta name="msvalidate.01" content="REPLACE_ME_BING_VERIFICATION" /> */}
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }} />
        {/* Google Tag Manager. Set NEXT_PUBLIC_GTM_ID (e.g. GTM-XXXXXXX) to switch it on. */}
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Kedar Kulkarni - Blog"
          href="/feed.xml"
        />
        <link rel="llms" href="/llms.txt" />
        {/* TODO: replace data-key with your own Ahrefs Web Analytics key, then uncomment.
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="REPLACE_ME_AHREFS_KEY"
          strategy="afterInteractive"
        /> */}
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-bg-elevated focus:text-accent focus:font-semibold"
        >
          Skip to content
        </a>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}

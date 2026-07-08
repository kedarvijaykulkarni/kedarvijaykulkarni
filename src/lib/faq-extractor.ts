/**
 * Extracts FAQ Q&A pairs from rendered HTML content.
 * Looks for an h2 "Frequently Asked Questions" followed by h3 questions and paragraph answers.
 */
export function extractFaqFromHtml(
  html: string
): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];

  // Find the FAQ section - everything after "Frequently Asked Questions" h2
  const faqSectionMatch = html.match(
    /<h2[^>]*>Frequently Asked Questions<\/h2>([\s\S]*?)(?=<h2[^>]*>|$)/i
  );

  if (!faqSectionMatch) return faqs;

  const faqHtml = faqSectionMatch[1];

  // Split by h3 tags to get individual Q&A blocks
  const h3Regex = /<h3[^>]*>(.*?)<\/h3>/gi;
  const h3Matches = [...faqHtml.matchAll(h3Regex)];

  for (let i = 0; i < h3Matches.length; i++) {
    const question = h3Matches[i][1].replace(/<[^>]+>/g, "").trim();

    // Get content between this h3 and the next h3 (or end of section)
    const startIdx = h3Matches[i].index! + h3Matches[i][0].length;
    const endIdx =
      i + 1 < h3Matches.length ? h3Matches[i + 1].index! : faqHtml.length;
    const answerHtml = faqHtml.slice(startIdx, endIdx);

    // Strip HTML tags and clean up the answer text
    const answer = answerHtml
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, " ")
      .trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

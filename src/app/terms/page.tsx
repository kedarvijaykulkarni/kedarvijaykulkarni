import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Kedar Kulkarni",
  description: "Terms of service - rules and guidelines for using this website.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link href="/" className="text-sm text-brand-500 hover:text-brand-700 font-medium">
            &larr; Back to Home
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: June 2026
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing and using this site (the &ldquo;Site&rdquo;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. About This Site
            </h2>
            <p className="text-gray-600 mb-2">
              This Site is the personal portfolio of Kedar Kulkarni. It publishes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>A showcase of selected work and projects</li>
              <li>Occasional articles and writing</li>
              <li>A way to get in touch</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. No Professional Advice
            </h2>
            <p className="text-gray-600 mb-2">
              All content on this Site is provided for general informational purposes only. It does not constitute professional, legal, financial, or technical advice, and you should not rely on it as such.
            </p>
            <p className="text-gray-600">
              You are solely responsible for your own decisions. The author makes no guarantee regarding any outcomes described in any article.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Acceptable Use
            </h2>
            <p className="text-gray-600 mb-2">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the Site or its infrastructure</li>
              <li>Interfere with or disrupt the Site</li>
              <li>Republish or redistribute Site content without permission</li>
              <li>Use automated means to scrape or copy content beyond normal browsing</li>
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600">
              The Site and its content (articles, images, and design) are owned by Kedar Kulkarni and protected by applicable intellectual property laws. You may share links to articles, but you may not copy or republish substantial portions without written permission.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Third-Party Links
            </h2>
            <p className="text-gray-600">
              Articles may link to third-party websites for reference. We are not responsible for the content, accuracy, or practices of any third-party site.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, the author shall not be liable for any indirect, incidental, special, or consequential damages, including any losses arising from decisions made based on Site content. Your use of the Site is at your own risk.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Changes to These Terms
            </h2>
            <p className="text-gray-600">
              We may update these Terms from time to time. Material changes will be reflected by updating the &ldquo;Last updated&rdquo; date above. Your continued use of the Site after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Contact
            </h2>
            <p className="text-gray-600 mb-2">
              If you have questions about these Terms, please contact us at:
            </p>
            <ul className="list-none text-gray-600 space-y-1">
              <li><strong>Email:</strong> kedarvijaykulkarni@gmail.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

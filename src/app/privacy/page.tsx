import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kedar Kulkarni",
  description: "Privacy policy - how this site collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link href="/" className="text-sm text-brand-500 hover:text-brand-700 font-medium">
            &larr; Back to Home
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: June 2026
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-2">
              This site (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is the personal portfolio of Kedar Kulkarni. This Privacy Policy describes how we collect, use, and protect your information when you visit the site.
            </p>
            <p className="text-gray-600">
              This is a content website. It has no user accounts or logins. By using the site, you agree to this policy. Please also review our <Link href="/terms" className="text-brand-500 hover:text-brand-700">Terms of Service</Link>.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>

            <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">
              2.1 Contact
            </h3>
            <p className="text-gray-600 mb-2">
              If you email us using a contact link, we receive the email address and any information you choose to share so we can reply.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">
              2.2 Analytics and Technical Data
            </h3>
            <p className="text-gray-600 mb-2">
              Like most websites, we automatically collect limited technical information to understand how the site is used, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Pages visited and time on site</li>
              <li>Approximate location and referring website</li>
              <li>Browser type, device type, and operating system</li>
            </ul>
            <p className="text-gray-600 mt-2">
              This data is aggregated and is not used to personally identify you.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li><strong>To respond</strong> to questions or requests you send us</li>
              <li><strong>To improve the site</strong> by analyzing aggregated, anonymized usage patterns</li>
            </ul>
            <p className="text-gray-600 mt-3 font-medium">
              We do not sell, rent, or trade your personal information.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Service Providers
            </h2>
            <p className="text-gray-600 mb-3">
              We use a small number of trusted third-party providers who process data on our behalf:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="min-w-full text-sm text-gray-600">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-800">Provider</th>
                    <th className="text-left py-2 font-semibold text-gray-800">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Vercel</td>
                    <td className="py-2">Website hosting and basic analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600">
              Each provider processes data only as needed to deliver its service and under its own privacy commitments.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Cookies
            </h2>
            <p className="text-gray-600">
              We use minimal cookies and similar technologies for basic analytics and site functionality. We do not use third-party advertising cookies or behavioral retargeting. You can control or block cookies through your browser settings.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Your Rights and Choices
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li><strong>Request access to</strong> or <strong>deletion of</strong> the personal data we hold about you</li>
              <li><strong>Object to or restrict</strong> processing where applicable law (such as GDPR) grants that right</li>
            </ul>
            <p className="text-gray-600 mt-3">
              To exercise any of these rights, email us at kedarvijaykulkarni@gmail.com.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Data Retention
            </h2>
            <p className="text-gray-600">
              We retain any information you send us only as long as needed to respond and for our records. If you request deletion, we remove your personal data from our active records within a reasonable period.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-gray-600">
              This site is not directed at children under the age of 13 (or 16 in the EEA), and we do not knowingly collect personal information from them.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Material changes will be reflected by updating the &ldquo;Last updated&rdquo; date above. Your continued use of the site after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Contact Us
            </h2>
            <p className="text-gray-600 mb-2">
              If you have questions about this Privacy Policy, contact us at:
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

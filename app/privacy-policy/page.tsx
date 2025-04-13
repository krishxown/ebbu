import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | EBBU - East Bengal Bangal United",
  description:
    "Privacy policy for EBBU (East Bengal Bangal United). Learn how we collect, use, and protect your personal information.",
  keywords: "EBBU privacy policy, East Bengal fan site privacy, data protection, personal information",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">Introduction</h2>
              <p className="text-gray-600">
                East Bengal Bangal United (EBBU) is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website or interact
                with our services. Please read this privacy policy carefully. If you do not agree with the terms of this
                privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Information We Collect</h2>
              <p className="text-gray-600 mb-3">
                We may collect information about you in a variety of ways. The information we may collect via the
                website includes:
              </p>
              <h3 className="text-lg font-semibold mb-2">Personal Data</h3>
              <p className="text-gray-600 mb-3">
                Personally identifiable information, such as your name, email address, and telephone number, that you
                voluntarily give to us when you register with the website or when you choose to participate in various
                activities related to the website, such as online chat, commenting on articles, and subscription to
                newsletters.
              </p>
              <h3 className="text-lg font-semibold mb-2">Derivative Data</h3>
              <p className="text-gray-600">
                Information our servers automatically collect when you access the website, such as your IP address,
                browser type, operating system, access times, and the pages you have viewed directly before and after
                accessing the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Use of Your Information</h2>
              <p className="text-gray-600 mb-3">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Create and manage your account.</li>
                <li>Send you a newsletter.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website.</li>
                <li>Increase the efficiency and operation of the website.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
                <li>Notify you of updates to the website.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Disclosure of Your Information</h2>
              <p className="text-gray-600 mb-3">
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>
              <h3 className="text-lg font-semibold mb-2">By Law or to Protect Rights</h3>
              <p className="text-gray-600">
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Security of Your Information</h2>
              <p className="text-gray-600">
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Policy for Children</h2>
              <p className="text-gray-600">
                We do not knowingly solicit information from or market to children under the age of 13. If you become
                aware of any data we have collected from children under age 13, please contact us using the contact
                information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time in order to reflect, for example, changes to our
                practices or for other operational, legal, or regulatory reasons. We encourage you to periodically
                review this page for the latest information on our privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions or comments about this Privacy Policy, please contact us through our{" "}
                <a href="/contact" className="text-red-700 hover:text-red-900">
                  Contact Page
                </a>
                .
              </p>
            </section>

            <p className="text-sm text-gray-500 italic">Last updated: May 1, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

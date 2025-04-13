import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | EBBU - East Bengal Bangal United",
  description:
    "Terms of Service for EBBU (East Bengal Bangal United). Read about the rules and guidelines for using our fan website.",
  keywords: "EBBU terms, East Bengal fan site terms, terms of service, user agreement",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using East Bengal Bangal United (EBBU), you accept and agree to be bound by the terms
                and provisions of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Use License</h2>
              <p className="text-gray-600 mb-3">
                Permission is granted to temporarily view the materials (information or content) on EBBU's website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>
                  Use the materials for any commercial purpose, or for any public display (commercial or
                  non-commercial);
                </li>
                <li>Attempt to decompile or reverse engineer any software contained on EBBU's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. User Accounts</h2>
              <p className="text-gray-600 mb-3">
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Service.
              </p>
              <p className="text-gray-600 mb-3">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password, whether your password is with our Service or a third-party
                service.
              </p>
              <p className="text-gray-600">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. User Content</h2>
              <p className="text-gray-600 mb-3">
                Our Service allows you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material. You are responsible for the content that you post on or
                through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p className="text-gray-600 mb-3">
                By posting content on or through the Service, You represent and warrant that: (i) the content is yours
                (you own it) or you have the right to use it and grant us the rights and license as provided in these
                Terms, and (ii) the posting of your content on or through the Service does not violate the privacy
                rights, publicity rights, copyrights, contract rights or any other rights of any person.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Prohibited Activities</h2>
              <p className="text-gray-600 mb-3">The following activities are strictly prohibited on our Service:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Posting content that promotes violence, discrimination, or illegal activities;</li>
                <li>Harassing, threatening, or intimidating other users;</li>
                <li>Impersonating any person or entity, including EBBU staff or representatives;</li>
                <li>Posting spam, advertisements, or solicitations;</li>
                <li>Attempting to access areas of the website that are not intended for public access;</li>
                <li>Transmitting any viruses, worms, or other malicious code.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Termination</h2>
              <p className="text-gray-600">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use
                the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us through our{" "}
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

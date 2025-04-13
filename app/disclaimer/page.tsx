import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | EBBU - East Bengal Bangal United",
  description:
    "EBBU disclaimer and content policy. Information about our unofficial fan website status, content guidelines, and copyright information.",
  keywords: "EBBU disclaimer, East Bengal fan content policy, copyright information, fan website disclaimer",
}

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">Unofficial Fan Website</h2>
              <p className="text-gray-600">
                East Bengal Bangal United (EBBU) is an unofficial fan website dedicated to East Bengal Football Club. We
                are not affiliated with, endorsed by, or connected to East Bengal Football Club, the Indian Super
                League, or any other official football organization. All club logos, team names, and related marks used
                on this website are for identification purposes only and may be trademarks of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Content Accuracy</h2>
              <p className="text-gray-600">
                While we strive to provide accurate and up-to-date information, EBBU makes no representations or
                warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability,
                or availability of the information, products, services, or related graphics contained on this website.
                Any reliance you place on such information is therefore strictly at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Fan Content Policy</h2>
              <p className="text-gray-600 mb-3">
                EBBU is committed to promoting positive fan culture and responsible support. We adhere to the following
                content principles:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We do not publish content that promotes violence, discrimination, or abusive behavior.</li>
                <li>
                  We respect the privacy and dignity of players, staff, and other individuals associated with the club.
                </li>
                <li>We aim to provide constructive criticism when appropriate, rather than unfounded negativity.</li>
                <li>We fact-check our content and clearly distinguish between factual reporting and opinion pieces.</li>
                <li>We respect copyright and intellectual property rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">User-Generated Content</h2>
              <p className="text-gray-600">
                Any user-generated content, including comments, forum posts, or submitted articles, represents the views
                and opinions of their respective authors and does not necessarily reflect the official policy or
                position of EBBU. Users are solely responsible for the content they submit, and EBBU reserves the right
                to remove any content that violates our content policy or terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Copyright Information</h2>
              <p className="text-gray-600">
                All original content created by EBBU is protected by copyright. Reproduction, distribution, or use of
                our content without prior written permission is prohibited. We respect the intellectual property rights
                of others and expect our users to do the same. If you believe that any content on our website infringes
                upon your copyright, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">External Links</h2>
              <p className="text-gray-600">
                Our website may contain links to external websites that are not provided or maintained by EBBU. We do
                not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external
                websites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the
                views expressed within them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Changes to This Disclaimer</h2>
              <p className="text-gray-600">
                EBBU may update this disclaimer from time to time. We encourage users to frequently check this page for
                any changes. Your continued use of this website after any changes to this disclaimer constitutes your
                acceptance of such changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions or concerns about this disclaimer, please contact us through our{" "}
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

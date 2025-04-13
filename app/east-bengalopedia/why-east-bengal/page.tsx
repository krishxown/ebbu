import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Why East Bengal? | EBBU - East Bengal Bangal United",
  description:
    "Discover the origins and meaning behind East Bengal FC's name and identity. Learn about the cultural significance and historical context of one of India's most iconic football clubs.",
  keywords: "East Bengal origins, East Bengal history, East Bengal name meaning, East Bengal identity, EBBU",
}

export default function WhyEastBengalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Why East Bengal?</h1>
        <p className="text-gray-600">The origins and meaning behind the club's name and identity</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-64 w-full">
              <Image src="/images/team-photo-white.png" alt="East Bengal Team" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">The Birth of a Legacy</h2>
              <p className="text-gray-700 mb-4">
                East Bengal Club was founded on August 1, 1920, in Kolkata (then Calcutta), India. The club was formed
                as a response to the growing need for representation of people who had migrated from East Bengal (now
                Bangladesh) to Calcutta. This was a time of significant social and political change in Bengal, with the
                partition of Bengal in 1905 still fresh in people's memories.
              </p>
              <p className="text-gray-700 mb-4">
                The name "East Bengal" was chosen to represent the cultural identity and heritage of the migrants from
                East Bengal. It was a way to maintain their connection to their homeland while establishing themselves
                in their new home in Calcutta. The club quickly became more than just a sporting institution; it became
                a symbol of identity, pride, and belonging for the East Bengali community.
              </p>
              <p className="text-gray-700">
                The club's formation was also influenced by a specific incident. Jorabagan Club, another football team
                in Calcutta, had refused to field Sailesh Bose, a talented player of East Bengali origin, in an
                important match against Mohun Bagan. This act of discrimination led to the formation of East Bengal
                Club, which would go on to become one of the most successful and beloved football clubs in India.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Cultural Significance</h2>
              <p className="text-gray-700 mb-4">
                East Bengal FC represents more than just a football club; it embodies the cultural identity and
                aspirations of the East Bengali community. The club's colors, red and gold (often referred to as "Red
                and Gold Brigade"), are deeply symbolic. The red represents the rising sun and the struggle for
                independence, while the gold symbolizes prosperity and the rich cultural heritage of Bengal.
              </p>
              <p className="text-gray-700 mb-4">
                The club's emblem, featuring a torch, is also significant. The torch represents enlightenment, guidance,
                and the burning passion of the fans and players. It serves as a beacon of hope and inspiration for
                generations of supporters.
              </p>
              <p className="text-gray-700">
                East Bengal's rivalry with Mohun Bagan, known as the Kolkata Derby, is one of the oldest and most
                passionate football rivalries in the world. This derby is not just a sporting contest; it's a cultural
                phenomenon that reflects the historical and social dynamics of Bengal. The rivalry has been described as
                a clash between the established West Bengali elite (represented by Mohun Bagan) and the immigrant East
                Bengali community (represented by East Bengal).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Legacy and Impact</h2>
              <p className="text-gray-700 mb-4">
                Over the decades, East Bengal FC has grown from a club representing a specific community to a national
                institution with fans across India and beyond. The club has won numerous domestic and international
                trophies, including a record 39 Calcutta Football League titles, 16 Federation Cup titles, and 3
                National Football League/I-League championships.
              </p>
              <p className="text-gray-700 mb-4">
                East Bengal's impact extends beyond the football field. The club has played a significant role in
                shaping the cultural landscape of Kolkata and India. It has provided a platform for talented players
                from diverse backgrounds to showcase their skills and has contributed to the development of Indian
                football.
              </p>
              <p className="text-gray-700 mb-4">
                The club's journey from its humble beginnings to its current status as one of India's most prestigious
                football clubs is a testament to the resilience, passion, and determination of the East Bengali
                community. East Bengal FC continues to be a source of pride and inspiration for millions of fans,
                carrying forward the legacy of its founders and the spirit of East Bengal.
              </p>
              <p className="text-gray-700">
                Today, as East Bengal FC competes in the Indian Super League, it carries with it the weight of history
                and the hopes of generations of supporters. The name "East Bengal" remains a powerful symbol of
                identity, heritage, and the enduring spirit of a community that has overcome challenges to make its mark
                on the world of football.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Key Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    <strong>Founded:</strong> August 1, 1920
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    <strong>Founders:</strong> Suresh Chandra Chaudhuri, Tarit Bhushan Roy, and Manmatha Nath Roy
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    <strong>Colors:</strong> Red and Gold
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    <strong>Nickname:</strong> Red and Gold Brigade
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-700 rounded-full p-1 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    <strong>Home Ground:</strong> Salt Lake Stadium, Kolkata
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/east-bengalopedia/trophy-cabinet"
                    className="text-red-700 hover:text-red-900 font-medium"
                  >
                    Trophy Cabinet: East Bengal's Silverware
                  </Link>
                </li>
                <li>
                  <Link
                    href="/east-bengalopedia/notable-players"
                    className="text-red-700 hover:text-red-900 font-medium"
                  >
                    Notable Players: Legends of East Bengal
                  </Link>
                </li>
                <li>
                  <Link href="/history/derby-history" className="text-red-700 hover:text-red-900 font-medium">
                    Derby Classics: The Kolkata Derby History
                  </Link>
                </li>
                <li>
                  <Link href="/history" className="text-red-700 hover:text-red-900 font-medium">
                    Club Timeline: Key Moments in East Bengal History
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Did You Know?</h3>
              <p className="text-gray-700 mb-4">
                East Bengal's first major trophy came in 1943 when they won the IFA Shield, defeating Mohun Bagan 1-0 in
                the final. This victory was particularly significant as it came during a time of great hardship in
                Bengal, with the region suffering from a devastating famine.
              </p>
              <p className="text-gray-700">
                The club's anthem, "East Bengal, East Bengal," is one of the most recognizable football chants in India
                and is sung with passion by thousands of fans during matches, especially during the Kolkata Derby.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Club Timeline | EBBU - East Bengal Bangal United",
  description:
    "Explore the complete chronological history of East Bengal Football Club from its founding in 1920 to the present day.",
  keywords: "East Bengal timeline, East Bengal history, East Bengal chronology, East Bengal milestones",
}

// Timeline data
const timelineEvents = [
  {
    year: "1920",
    title: "Foundation",
    description:
      "East Bengal Club was founded on August 1, 1920, in Kolkata (then Calcutta), India. The club was formed to represent the identity and aspirations of the people who had migrated from East Bengal (now Bangladesh) to Calcutta.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    year: "1925",
    title: "First Derby",
    description:
      "East Bengal played its first match against Mohun Bagan on August 8, 1925, marking the beginning of one of the oldest and most passionate football rivalries in the world - the Kolkata Derby.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    year: "1943",
    title: "First Major Trophy",
    description:
      "East Bengal won its first major trophy, the IFA Shield, defeating Mohun Bagan in the final. This victory marked the beginning of East Bengal's rise as a major force in Indian football.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    year: "1949",
    title: "The Five Pandavas",
    description:
      "The legendary 'Five Pandavas' forward line - Ahmed Khan, P.B.A. Saleh, P. Venkatesh, Appa Rao, and M. Apparao - was formed, revolutionizing East Bengal's attacking play and leading the club to numerous trophies.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    year: "1970",
    title: "The Golden Era Begins",
    description:
      "East Bengal entered its first golden era under coach P.K. Banerjee, beginning a period of unprecedented dominance in Indian football that would last until the mid-1970s.",
    image: "/images/team-photo-white.png",
  },
  {
    year: "1975",
    title: "The 5-0 Derby Victory",
    description:
      "East Bengal achieved its biggest victory in the Kolkata Derby, defeating Mohun Bagan 5-0 in the IFA Shield final. This match, known as the 'Pancha Pandava' match, is etched in East Bengal folklore.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    year: "1984",
    title: "Asian Success",
    description:
      "East Bengal became the first Indian club to reach the semi-finals of the Asian Club Championship (now AFC Champions League), a historic achievement that put Indian football on the continental map.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    year: "1993",
    title: "Bhaichung Bhutia Arrives",
    description:
      "East Bengal signed Bhaichung Bhutia, who would go on to become one of the club's greatest players and an icon of Indian football. His first spell at the club lasted until 1997.",
    image: "/images/player-dribbling.png",
  },
  {
    year: "2000",
    title: "National Football League Champions",
    description:
      "East Bengal won its first National Football League (now I-League) title, beginning a period of national dominance that would see the club win the league three times in four years.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    year: "2003",
    title: "ASEAN Club Championship Victory",
    description:
      "East Bengal created history by becoming the first Indian club to win an international tournament in the post-independence era, defeating BEC Tero Sasana of Thailand in the final of the ASEAN Club Championship.",
    image: "/images/team-photo-field.png",
  },
  {
    year: "2010",
    title: "CFL Dynasty Begins",
    description:
      "East Bengal won the Calcutta Football League, beginning an unprecedented run of eight consecutive titles that would last until 2017, establishing the club's dominance in regional football.",
    image: "/images/player-with-trophy.png",
  },
  {
    year: "2020",
    title: "ISL Entry",
    description:
      "East Bengal joined the Indian Super League (ISL), marking a new chapter in the club's history as it entered India's premier football competition.",
    image: "/images/match-action.png",
  },
  {
    year: "2024",
    title: "First ISL Derby Win",
    description:
      "After a difficult start to life in the ISL, East Bengal finally secured their first derby victory in the competition, defeating Mohun Bagan Super Giant 2-1 in a memorable match.",
    image: "/images/aerial-duel.png",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "Since 1920: Then, Now & Forever",
    slug: "since-1920-then-now-forever",
    category: "history",
  },
  {
    id: "2",
    title: "The Greatest East Bengal XI of All Time",
    slug: "greatest-east-bengal-xi",
    category: "history",
  },
  {
    id: "3",
    title: "East Bengal FC's Journey in the ISL",
    slug: "east-bengal-journey-isl",
    category: "history",
  },
  {
    id: "4",
    title: "The Evolution of East Bengal's Crest",
    slug: "evolution-east-bengal-crest",
    category: "history",
  },
]

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/history" className="text-red-700 hover:text-red-900 inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to History
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/images/team-photo-field.png" alt="East Bengal FC Timeline" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">Club Timeline</h1>
                <p className="text-lg">A Century of East Bengal FC History</p>
              </div>
            </div>

            <div className="p-6">
              <div className="prose max-w-none mb-8">
                <p>
                  Since its founding in 1920, East Bengal Football Club has experienced a rich and eventful history,
                  filled with triumphs, challenges, and moments that have defined the club's identity and legacy. This
                  timeline presents the key milestones and events that have shaped East Bengal's journey over the past
                  century.
                </p>
                <p>
                  From its humble beginnings as a club representing the identity of East Bengali migrants to its status
                  as one of India's most successful and popular football clubs, East Bengal's history reflects not just
                  sporting achievements but also cultural and social significance.
                </p>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-700"></div>

                <div className="space-y-8">
                  {timelineEvents.map((event) => (
                    <div key={event.year} className="relative pl-12">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-6 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                        <span className="text-xs">{event.year}</span>
                      </div>

                      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                        <div className="md:flex">
                          <div className="relative h-64 md:h-auto md:w-1/3 flex-shrink-0">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                            <p className="text-gray-600">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-100 mt-12">
                <h3 className="text-xl font-bold text-red-800 mb-3">Key Periods in East Bengal's History</h3>
                <div className="space-y-4 text-red-700">
                  <div>
                    <h4 className="font-bold">1920-1942: The Formative Years</h4>
                    <p>
                      The early decades saw East Bengal establish itself as a club representing the East Bengali
                      community, gradually building its identity and laying the foundation for future success.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">1943-1969: Rise to Prominence</h4>
                    <p>
                      Beginning with the first IFA Shield victory in 1943, this period saw East Bengal emerge as a major
                      force in Indian football, winning numerous trophies and developing its distinctive playing style.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">1970-1975: The First Golden Era</h4>
                    <p>
                      Under coach P.K. Banerjee, East Bengal achieved unprecedented dominance, winning multiple trophies
                      and setting numerous records, including the famous 5-0 derby victory.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">2000-2004: National and International Glory</h4>
                    <p>
                      East Bengal's most successful period on the national and international stage, winning three
                      National Football League titles and the historic ASEAN Club Championship.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">2010-2017: The CFL Dynasty</h4>
                    <p>
                      A period of regional dominance, with East Bengal winning eight consecutive Calcutta Football
                      League titles, an unprecedented achievement in the competition's history.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">2020-Present: The ISL Era</h4>
                    <p>
                      East Bengal's entry into the Indian Super League marks a new chapter in the club's history, as it
                      adapts to the changing landscape of Indian football in the modern era.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Sidebar popularArticles={popularArticles} />
        </div>
      </div>
    </div>
  )
}

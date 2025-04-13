import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Trophy, Calendar, Star } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Golden Era | EBBU - East Bengal Bangal United",
  description:
    "Explore the golden era of East Bengal FC, a period of unprecedented success and dominance in Indian football history.",
  keywords: "East Bengal golden era, East Bengal glory years, East Bengal dominance, East Bengal success",
}

// Golden Era data
const goldenEras = [
  {
    period: "1970-1975: The Era of Invincibility",
    description:
      "This period marked East Bengal's most dominant phase in Indian football, with the club winning multiple trophies and setting numerous records. The 1970-71 season saw East Bengal complete an unbeaten campaign in the Calcutta Football League, a remarkable achievement that showcased the team's superiority.",
    keyAchievements: [
      "5 consecutive Calcutta Football League titles (1970-1974)",
      "5 IFA Shield titles",
      "3 Durand Cup victories",
      "2 Rovers Cup triumphs",
      "The historic 1970-71 unbeaten season",
    ],
    keyPlayers: ["Subhas Bhowmick", "Mohammed Habib", "Surajit Sengupta", "Shyam Thapa", "Bhaskar Ganguly"],
    coach: "P.K. Banerjee",
    image: "/images/team-photo-white.png",
  },
  {
    period: "2000-2004: National and International Glory",
    description:
      "The early 2000s saw East Bengal achieve unprecedented success on both the national and international stage. The club won three National Football League (now I-League) titles in four years and created history by becoming the first Indian club to win an international tournament in the post-independence era - the ASEAN Club Championship in 2003.",
    keyAchievements: [
      "National Football League Champions (2000-01, 2002-03, 2003-04)",
      "ASEAN Club Championship Winners (2003)",
      "Calcutta Football League Champions (2000, 2002, 2003, 2004)",
      "IFA Shield Winners (2000, 2001, 2002)",
      "Durand Cup Winners (2002, 2004)",
    ],
    keyPlayers: ["Bhaichung Bhutia", "Alvito D'Cunha", "Mahesh Gawli", "Debjit Ghosh", "Mike Okoro"],
    coach: "Subhas Bhowmick",
    image: "/images/team-photo-field.png",
  },
  {
    period: "2010-2017: The CFL Dynasty",
    description:
      "This era saw East Bengal establish an unprecedented dynasty in the Calcutta Football League, winning eight consecutive titles from 2010 to 2017. The club also achieved success in national competitions, winning the I-League in 2010-11 and the Federation Cup in 2010 and 2012.",
    keyAchievements: [
      "8 consecutive Calcutta Football League titles (2010-2017)",
      "I-League Champions (2010-11)",
      "Federation Cup Winners (2010, 2012)",
      "Super Cup Runners-up (2018)",
      "Record points tally in the 2010-11 I-League season",
    ],
    keyPlayers: ["Tolgay Ozbey", "Penn Orji", "Mehtab Hossain", "Arnab Mondal", "Lalrindika Ralte"],
    coach: "Trevor James Morgan",
    image: "/images/player-with-trophy.png",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "The Invincible Season: 1970-71 Revisited",
    slug: "invincible-season-1970-71",
    category: "history",
  },
  {
    id: "2",
    title: "ASEAN Club Championship: East Bengal's Historic Triumph",
    slug: "asean-championship-triumph",
    category: "history",
  },
  {
    id: "3",
    title: "Trevor Morgan: The Architect of East Bengal's CFL Dynasty",
    slug: "trevor-morgan-cfl-dynasty",
    category: "history",
  },
  {
    id: "4",
    title: "Subhas Bhowmick: From Player to Championship-Winning Coach",
    slug: "subhas-bhowmick-player-coach",
    category: "history",
  },
]

export default function GloryYearsPage() {
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
              <Image
                src="/images/player-with-trophy.png"
                alt="East Bengal FC Golden Era"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">Golden Era</h1>
                <p className="text-lg">The Glory Years of East Bengal FC</p>
              </div>
            </div>

            <div className="p-6">
              <div className="prose max-w-none mb-8">
                <p>
                  Throughout its illustrious history spanning over a century, East Bengal FC has experienced several
                  periods of exceptional success and dominance. These "Golden Eras" represent the pinnacle of the club's
                  sporting achievements, characterized by trophy-laden seasons, record-breaking performances, and teams
                  that have left an indelible mark on Indian football history.
                </p>
                <p>
                  From the invincible teams of the 1970s to the international success of the early 2000s and the
                  domestic dominance of the 2010s, these golden periods have defined East Bengal's legacy and cemented
                  its status as one of India's most successful football clubs.
                </p>
              </div>

              <div className="space-y-12">
                {goldenEras.map((era) => (
                  <div key={era.period} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="relative h-64 w-full">
                      <Image src={era.image || "/placeholder.svg"} alt={era.period} fill className="object-cover" />
                      <div className="absolute top-0 left-0 bg-red-700 text-white px-4 py-2 font-bold">
                        {era.period.split(":")[0]}
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3">{era.period}</h2>
                      <p className="text-gray-600 mb-6">{era.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-lg font-bold mb-3 flex items-center">
                            <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                            Key Achievements
                          </h3>
                          <ul className="list-disc pl-6 space-y-1 text-gray-600">
                            {era.keyAchievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-3 flex items-center">
                            <Star className="h-5 w-5 text-yellow-500 mr-2" />
                            Key Players
                          </h3>
                          <ul className="list-disc pl-6 space-y-1 text-gray-600">
                            {era.keyPlayers.map((player, index) => (
                              <li key={index}>{player}</li>
                            ))}
                          </ul>
                          <div className="mt-4">
                            <strong className="text-gray-700">Coach:</strong>{" "}
                            <span className="text-gray-600">{era.coach}</span>
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/history/era-${era.period.split(":")[0].toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-block bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                      >
                        Read Full Era Analysis
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-100 mt-12">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                  <Calendar className="h-6 w-6 mr-2" />
                  What Makes a Golden Era?
                </h3>
                <p className="text-red-700 mb-4">
                  A period in East Bengal's history is considered a "Golden Era" when it meets several of the following
                  criteria:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li>
                    <strong>Trophy Success:</strong> Multiple major trophies won within a concentrated period
                  </li>
                  <li>
                    <strong>Dominance:</strong> Clear superiority over rivals and competitors
                  </li>
                  <li>
                    <strong>Innovation:</strong> Revolutionary playing style or tactical approach
                  </li>
                  <li>
                    <strong>Iconic Players:</strong> Presence of legendary players who defined the era
                  </li>
                  <li>
                    <strong>Records:</strong> Setting new benchmarks and breaking records
                  </li>
                  <li>
                    <strong>Legacy:</strong> Lasting impact on the club's history and identity
                  </li>
                </ul>
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

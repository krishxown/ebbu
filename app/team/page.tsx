import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Team | EBBU - East Bengal Bangal United",
  description: "Meet the East Bengal FC squad, coaching staff, and management team for the current season.",
  keywords: "East Bengal team, East Bengal players, East Bengal squad, East Bengal coaching staff",
}

const teamCategories = [
  {
    id: "1",
    title: "First Team",
    description: "Meet the East Bengal FC first team squad for the current season.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/team/first-team",
  },
  {
    id: "2",
    title: "Coaching Staff",
    description: "Learn about the coaching staff who guide and develop our players.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/team/coaching-staff",
  },
  {
    id: "3",
    title: "Youth Teams",
    description: "Discover the future stars of East Bengal FC in our youth academy.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/team/youth",
  },
]

// Featured players data
const featuredPlayers = [
  {
    id: "1",
    name: "Cleiton Silva",
    position: "Forward",
    nationality: "Brazil",
    image: "/placeholder.svg?height=300&width=300",
    number: "9",
  },
  {
    id: "2",
    name: "Nandhakumar Sekar",
    position: "Midfielder",
    nationality: "India",
    image: "/placeholder.svg?height=300&width=300",
    number: "7",
  },
  {
    id: "3",
    name: "Lalchungnunga",
    position: "Defender",
    nationality: "India",
    image: "/placeholder.svg?height=300&width=300",
    number: "4",
  },
  {
    id: "4",
    name: "Prabhsukhan Gill",
    position: "Goalkeeper",
    nationality: "India",
    image: "/placeholder.svg?height=300&width=300",
    number: "1",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "Cleiton Silva: The Brazilian Maestro Leading East Bengal's Revival",
    slug: "cleiton-silva-brazilian-maestro",
    category: "player-profile",
  },
  {
    id: "2",
    title: "East Bengal FC's New Signings for the 2024-25 Season",
    slug: "east-bengal-new-signings-2024-25",
    category: "news",
  },
  {
    id: "3",
    title: "Carles Cuadrat: The Tactical Mind Behind East Bengal",
    slug: "carles-cuadrat-tactical-mind",
    category: "analysis",
  },
  {
    id: "4",
    title: "Rising Stars: East Bengal's Youth Academy Prospects",
    slug: "rising-stars-youth-academy",
    category: "analysis",
  },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">East Bengal FC Team</h1>
        <p className="text-gray-600">Meet the players and staff who represent the Red & Gold Brigade</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Team Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {teamCategories.map((category) => (
              <Link key={category.id} href={category.link} className="block group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Players */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Featured Players</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {featuredPlayers.map((player) => (
                  <div key={player.id} className="text-center">
                    <div className="relative mb-3 mx-auto">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto">
                        <Image
                          src={
                            player.id === "1"
                              ? "/images/player-with-trophy-sitting.png"
                              : player.id === "2"
                                ? "/images/player-dribbling.png"
                                : player.id === "3"
                                  ? "/images/match-action.png"
                                  : player.id === "4"
                                    ? "/images/aerial-duel.png"
                                    : player.image || "/placeholder.svg"
                          }
                          alt={player.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                        {player.number}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg">{player.name}</h3>
                    <p className="text-gray-600 text-sm">{player.position}</p>
                    <p className="text-gray-500 text-xs">{player.nationality}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/team/first-team"
                  className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium transition"
                >
                  View Full Squad
                </Link>
              </div>
            </div>
          </div>

          {/* Coaching Staff */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Coaching Staff</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                    <Image src="/images/press-conference.png" alt="Carles Cuadrat" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Carles Cuadrat</h3>
                    <p className="text-gray-600 text-sm">Head Coach</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Joined East Bengal FC in 2023 and has brought his tactical expertise to the team.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Assistant Coach"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Assistant Coach</h3>
                    <p className="text-gray-600 text-sm">Assistant Coach</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Works closely with the head coach to implement training sessions and match strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Goalkeeping Coach"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Goalkeeping Coach</h3>
                    <p className="text-gray-600 text-sm">Goalkeeping Coach</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Specializes in training and developing the team's goalkeepers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Fitness Coach"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fitness Coach</h3>
                    <p className="text-gray-600 text-sm">Fitness Coach</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Ensures the players maintain peak physical condition throughout the season.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/team/coaching-staff"
                  className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium transition"
                >
                  View All Staff
                </Link>
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

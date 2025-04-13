import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"
import TagFilter from "@/components/ui/tag-filter"

export const metadata: Metadata = {
  title: "Fixtures | EBBU - East Bengal Bangal United",
  description: "View East Bengal FC's upcoming fixtures and past results for the current season.",
  keywords: "East Bengal fixtures, East Bengal matches, East Bengal schedule, East Bengal results",
}

const fixtureTags = ["All", "Upcoming", "Results", "ISL", "Durand Cup", "Super Cup", "Home", "Away"]

// Upcoming fixtures data
const upcomingFixtures = [
  {
    id: "1",
    competition: "Durand Cup 2024",
    home: {
      name: "East Bengal FC",
      logo: "/placeholder.svg?height=64&width=64",
    },
    away: {
      name: "Mohun Bagan SG",
      logo: "/placeholder.svg?height=64&width=64",
    },
    date: "July 27, 2024",
    time: "7:00 PM",
    venue: "Salt Lake Stadium, Kolkata",
    ticketLink: "#",
  },
  {
    id: "2",
    competition: "Durand Cup 2024",
    home: {
      name: "East Bengal FC",
      logo: "/placeholder.svg?height=64&width=64",
    },
    away: {
      name: "Indian Navy",
      logo: "/placeholder.svg?height=64&width=64",
    },
    date: "August 3, 2024",
    time: "5:00 PM",
    venue: "Salt Lake Stadium, Kolkata",
    ticketLink: "#",
  },
  {
    id: "3",
    competition: "Durand Cup 2024",
    home: {
      name: "Mohammedan SC",
      logo: "/placeholder.svg?height=64&width=64",
    },
    away: {
      name: "East Bengal FC",
      logo: "/placeholder.svg?height=64&width=64",
    },
    date: "August 10, 2024",
    time: "7:00 PM",
    venue: "Kishore Bharati Krirangan, Kolkata",
    ticketLink: "#",
  },
]

// Past results data
const pastResults = [
  {
    id: "4",
    competition: "ISL 2023-24",
    home: {
      name: "East Bengal FC",
      logo: "/placeholder.svg?height=64&width=64",
      score: 2,
    },
    away: {
      name: "Mohun Bagan SG",
      logo: "/placeholder.svg?height=64&width=64",
      score: 1,
    },
    date: "March 10, 2024",
    venue: "Salt Lake Stadium, Kolkata",
    reportLink: "/matches/east-bengal-vs-mohun-bagan-isl-derby",
  },
  {
    id: "5",
    competition: "ISL 2023-24",
    home: {
      name: "East Bengal FC",
      logo: "/placeholder.svg?height=64&width=64",
      score: 3,
    },
    away: {
      name: "NorthEast United FC",
      logo: "/placeholder.svg?height=64&width=64",
      score: 2,
    },
    date: "February 25, 2024",
    venue: "Salt Lake Stadium, Kolkata",
    reportLink: "/matches/east-bengal-vs-northeast-united-isl",
  },
  {
    id: "6",
    competition: "ISL 2023-24",
    home: {
      name: "East Bengal FC",
      logo: "/placeholder.svg?height=64&width=64",
      score: 1,
    },
    away: {
      name: "Chennaiyin FC",
      logo: "/placeholder.svg?height=64&width=64",
      score: 0,
    },
    date: "February 10, 2024",
    venue: "Salt Lake Stadium, Kolkata",
    reportLink: "/matches/east-bengal-vs-chennaiyin-isl",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "East Bengal FC vs Mohun Bagan SG: Durand Cup Preview",
    slug: "east-bengal-mohun-bagan-durand-cup-preview",
    category: "matches",
  },
  {
    id: "2",
    title: "East Bengal FC's Durand Cup 2024 Campaign: What to Expect",
    slug: "east-bengal-durand-cup-campaign-preview",
    category: "analysis",
  },
  {
    id: "3",
    title: "ISL 2024-25 Season: East Bengal FC's Fixtures Analyzed",
    slug: "isl-2024-25-east-bengal-fixtures-analyzed",
    category: "analysis",
  },
  {
    id: "4",
    title: "Derby Delight: East Bengal FC's Victory Over Mohun Bagan SG",
    slug: "derby-delight-victory-mohun-bagan",
    category: "matches",
  },
]

export default function FixturesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : null

  // Filter fixtures based on the tag
  let filteredUpcoming = upcomingFixtures
  let filteredPast = pastResults

  if (tag) {
    if (tag === "Upcoming") {
      filteredPast = []
    } else if (tag === "Results") {
      filteredUpcoming = []
    } else if (tag === "ISL" || tag === "Durand Cup" || tag === "Super Cup") {
      filteredUpcoming = upcomingFixtures.filter((fixture) => fixture.competition.includes(tag))
      filteredPast = pastResults.filter((result) => result.competition.includes(tag))
    } else if (tag === "Home") {
      filteredUpcoming = upcomingFixtures.filter((fixture) => fixture.home.name === "East Bengal FC")
      filteredPast = pastResults.filter((result) => result.home.name === "East Bengal FC")
    } else if (tag === "Away") {
      filteredUpcoming = upcomingFixtures.filter((fixture) => fixture.away.name === "East Bengal FC")
      filteredPast = pastResults.filter((result) => result.away.name === "East Bengal FC")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Fixtures & Results</h1>
        <p className="text-gray-600">View East Bengal FC's upcoming fixtures and past results</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TagFilter tags={fixtureTags} basePath="/fixtures" />

          {/* Next Match */}
          {filteredUpcoming.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Next Match</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-red-700 text-white text-xs px-3 py-1 rounded-full">
                      {filteredUpcoming[0].competition}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{filteredUpcoming[0].date}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="flex flex-col items-center mb-4 md:mb-0">
                      <div className="relative h-16 w-16 mb-2">
                        <Image
                          src="/images/team-photo-field.png"
                          alt={filteredUpcoming[0].home.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-lg">{filteredUpcoming[0].home.name}</h3>
                    </div>
                    <div className="flex flex-col items-center mb-4 md:mb-0">
                      <div className="text-2xl font-bold mb-2">VS</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{filteredUpcoming[0].time}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="relative h-16 w-16 mb-2">
                        <Image
                          src={filteredUpcoming[0].away.logo || "/placeholder.svg"}
                          alt={filteredUpcoming[0].away.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-lg">{filteredUpcoming[0].away.name}</h3>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 mb-4 md:mb-0">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{filteredUpcoming[0].venue}</span>
                    </div>
                    <Link
                      href={filteredUpcoming[0].ticketLink}
                      className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                    >
                      Buy Tickets
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Upcoming Fixtures */}
          {filteredUpcoming.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Upcoming Fixtures</h2>
              <div className="space-y-4">
                {filteredUpcoming.map((fixture) => (
                  <div key={fixture.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {fixture.competition}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{fixture.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center mb-3 md:mb-0">
                          <div className="relative h-10 w-10 mr-3">
                            <Image
                              src={fixture.home.logo || "/placeholder.svg"}
                              alt={fixture.home.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="font-bold">{fixture.home.name}</h3>
                        </div>
                        <div className="text-lg font-bold mb-3 md:mb-0">VS</div>
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 mr-3">
                            <Image
                              src={fixture.away.logo || "/placeholder.svg"}
                              alt={fixture.away.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="font-bold">{fixture.away.name}</h3>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-between mt-3">
                        <div className="flex items-center text-xs text-gray-500 mb-2 md:mb-0">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{fixture.venue}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{fixture.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Results */}
          {filteredPast.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Results</h2>
              <div className="space-y-4">
                {filteredPast.map((result) => (
                  <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {result.competition}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{result.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center mb-3 md:mb-0">
                          <div className="relative h-10 w-10 mr-3">
                            <Image
                              src={result.home.logo || "/placeholder.svg"}
                              alt={result.home.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold">{result.home.name}</h3>
                          </div>
                        </div>
                        <div className="flex items-center mb-3 md:mb-0">
                          <span className="text-2xl font-bold mx-2">{result.home.score}</span>
                          <span className="text-lg font-bold mx-2">-</span>
                          <span className="text-2xl font-bold mx-2">{result.away.score}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 mr-3">
                            <Image
                              src={result.away.logo || "/placeholder.svg"}
                              alt={result.away.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold">{result.away.name}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-between mt-3">
                        <div className="flex items-center text-xs text-gray-500 mb-2 md:mb-0">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{result.venue}</span>
                        </div>
                        <Link href={result.reportLink} className="text-red-700 hover:text-red-900 text-sm font-medium">
                          Match Report
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <Sidebar popularArticles={popularArticles} />
        </div>
      </div>
    </div>
  )
}

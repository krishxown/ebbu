import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "History | EBBU - East Bengal Bangal United",
  description:
    "Explore the rich history of East Bengal Football Club. From its founding to present day, learn about the key moments, legendary players, and historic achievements.",
  keywords: "East Bengal history, football history, East Bengal legends, historic matches, EBBU history",
}

// Mock data
const timelineEvents = [
  {
    id: "1",
    year: "1920",
    title: "The Birth of a Legend",
    description: "East Bengal Club was founded on August 1, 1920, in Kolkata, India.",
    slug: "birth-of-legend-1920",
    image: "/images/team-photo-white.png",
  },
  {
    id: "2",
    year: "1943",
    title: "The Glory of 1943",
    description: "East Bengal won their first major trophy, marking the beginning of a golden era.",
    slug: "glory-of-1943",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    year: "1970s",
    title: "The Rivalry Years: 1970s",
    description: "The decade that saw the Kolkata Derby reach new heights of intensity and passion.",
    slug: "rivalry-years-1970s",
    image: "/images/team-lineup.png",
  },
  {
    id: "4",
    year: "1984",
    title: "Asian Success",
    description: "East Bengal became the first Indian club to reach the semifinals of the Asian Club Championship.",
    slug: "asian-success-1984",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "5",
    year: "1990s",
    title: "Barreto to Baichung: Forward Legends",
    description: "The era of legendary strikers who became icons of Indian football.",
    slug: "forward-legends-1990s",
    image: "/images/player-with-trophy-sitting.png",
  },
  {
    id: "6",
    year: "2003",
    title: "ASEAN Club Championship",
    description:
      "East Bengal became the first Indian club to win an international tournament in the post-independence era.",
    slug: "asean-championship-2003",
    image: "/images/player-with-trophy.png",
  },
  {
    id: "7",
    year: "2020",
    title: "ISL Era Begins",
    description: "East Bengal joined the Indian Super League, beginning a new chapter in the club's storied history.",
    slug: "isl-era-begins-2020",
    image: "/images/press-conference.png",
  },
]

const legends = [
  {
    id: "1",
    name: "Bhaichung Bhutia",
    position: "Forward",
    years: "1993-1997, 2003-2006, 2009-2011",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "2",
    name: "Chima Okorie",
    position: "Forward",
    years: "1991-1993",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "3",
    name: "Sunil Chhetri",
    position: "Forward",
    years: "2008-2009",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "4",
    name: "Subhas Bhowmick",
    position: "Forward",
    years: "1969-1975",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "5",
    name: "Majid Bishkar",
    position: "Midfielder",
    years: "1981-1982",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "6",
    name: "Shyam Thapa",
    position: "Forward",
    years: "1977-1979",
    image: "/placeholder.svg?height=150&width=150",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "The Greatest East Bengal XI of All Time",
    slug: "greatest-east-bengal-xi",
    category: "history" as const,
  },
  {
    id: "2",
    title: "Remembering the 1975 IFA Shield Victory",
    slug: "remembering-1975-ifa-shield",
    category: "history" as const,
  },
  {
    id: "3",
    title: "Interview: Club Captain Speaks About Season Ambitions",
    slug: "captain-interview-season-ambitions",
    category: "news" as const,
  },
  {
    id: "4",
    title: "Derby Day: The Complete Fan Guide",
    slug: "derby-day-fan-guide",
    category: "stories" as const,
  },
]

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">History of East Bengal FC</h1>
        <p className="text-gray-600">
          Explore the rich heritage and storied past of one of India's most iconic football clubs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Timeline Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Timeline</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-700"></div>

              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={event.id} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-6 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                      <span className="text-xs">{event.year}</span>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <Link
                          href={`/history/${event.slug}`}
                          className="text-red-700 hover:text-red-900 font-medium inline-flex items-center"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Legends Gallery */}
          <section className="mx-auto text-center max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Legends of East Bengal</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {legends.map((legend) => (
                <div
                  key={legend.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition text-center"
                >
                  <div className="p-4">
                    <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden mb-4">
                      <Image
                        src={
                          legend.id === "1"
                            ? "/images/player-dribbling.png"
                            : legend.id === "2"
                              ? "/images/match-action.png"
                              : legend.id === "3"
                                ? "/images/aerial-duel.png"
                                : legend.id === "4"
                                  ? "/images/player-with-trophy-sitting.png"
                                  : legend.id === "5"
                                    ? "/images/team-photo-field.png"
                                    : legend.id === "6"
                                      ? "/images/player-with-trophy.png"
                                      : legend.image || "/placeholder.svg"
                        }
                        alt={legend.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{legend.name}</h3>
                    <p className="text-gray-600">{legend.position}</p>
                    <p className="text-sm text-gray-500">{legend.years}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/history/legends"
                className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium transition"
              >
                View All Legends
              </Link>
            </div>
          </section>
        </div>

        <div>
          <Sidebar popularArticles={popularArticles} />
        </div>
      </div>
    </div>
  )
}

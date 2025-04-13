import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Trophy, Users, Calendar, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "East Bengalopedia | EBBU - East Bengal Bangal United",
  description:
    "The comprehensive encyclopedia of East Bengal Football Club. Learn about the club's origins, trophy cabinet, notable players, and historical seasons.",
  keywords:
    "East Bengal encyclopedia, East Bengal history, East Bengal trophies, East Bengal players, EBBU encyclopedia",
}

export default function EastBengalopediaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">East Bengalopedia</h1>
        <p className="text-gray-600">Your comprehensive guide to everything East Bengal FC</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/east-bengalopedia/why-east-bengal"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-6"
        >
          <div className="flex items-start">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <HelpCircle className="h-8 w-8 text-red-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Why East Bengal?</h2>
              <p className="text-gray-600 mb-4">Discover the origins and meaning behind the club's name and identity</p>
              <span className="text-red-700 hover:text-red-900 font-medium inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/east-bengalopedia/trophy-cabinet"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-6"
        >
          <div className="flex items-start">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <Trophy className="h-8 w-8 text-red-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Trophy Cabinet</h2>
              <p className="text-gray-600 mb-4">
                Explore the impressive collection of silverware won throughout our history
              </p>
              <span className="text-red-700 hover:text-red-900 font-medium inline-flex items-center">
                View Trophies
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/east-bengalopedia/notable-players"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-6"
        >
          <div className="flex items-start">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <Users className="h-8 w-8 text-red-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Notable Players</h2>
              <p className="text-gray-600 mb-4">Learn about the legends who have worn the Red and Gold with pride</p>
              <span className="text-red-700 hover:text-red-900 font-medium inline-flex items-center">
                Meet the Legends
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/east-bengalopedia/historical-seasons"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-6"
        >
          <div className="flex items-start">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <Calendar className="h-8 w-8 text-red-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Historical Seasons</h2>
              <p className="text-gray-600 mb-4">Revisit the most memorable campaigns in East Bengal's rich history</p>
              <span className="text-red-700 hover:text-red-900 font-medium inline-flex items-center">
                Explore Seasons
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Featured Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="East Bengal's Greatest Moments"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-bold mb-4">East Bengal's Greatest Moments</h3>
              <p className="text-gray-600 mb-6">
                From historic derby victories to continental triumphs, we look back at the defining moments that have
                shaped East Bengal's legacy over the decades. Relive the glory, the passion, and the unforgettable
                memories that make this club special.
              </p>
              <Link
                href="/east-bengalopedia/greatest-moments"
                className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium transition"
              >
                Read the Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Additions */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recent Additions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">The 1997 Federation Cup Campaign</h3>
              <p className="text-gray-600 mb-4">
                A detailed look at East Bengal's triumphant run to the Federation Cup title in 1997.
              </p>
              <Link
                href="/east-bengalopedia/1997-federation-cup"
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

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Foreign Legends: Overseas Stars</h3>
              <p className="text-gray-600 mb-4">
                Profiles of the international players who made a significant impact at East Bengal.
              </p>
              <Link
                href="/east-bengalopedia/foreign-legends"
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

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Evolution of the East Bengal Crest</h3>
              <p className="text-gray-600 mb-4">
                The history and meaning behind the various iterations of the club's iconic emblem.
              </p>
              <Link
                href="/east-bengalopedia/crest-evolution"
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
      </section>
    </div>
  )
}

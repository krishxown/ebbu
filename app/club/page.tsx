import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Club | EBBU - East Bengal Bangal United",
  description: "Learn about East Bengal Football Club, its rich history, achievements, and vision for the future.",
  keywords: "East Bengal FC, club history, football club, Kolkata football, Indian football",
}

const clubSections = [
  {
    id: "1",
    title: "About",
    description: "Learn about East Bengal FC's mission, vision, and values that guide the club.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/club/about",
  },
  {
    id: "2",
    title: "History",
    description: "Explore the rich heritage of East Bengal FC since its founding in 1920.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/club/history",
  },
  {
    id: "3",
    title: "Trophy Cabinet",
    description: "Discover the impressive collection of silverware won throughout our history.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/club/trophies",
  },
  {
    id: "4",
    title: "Stadium",
    description: "Experience the iconic Salt Lake Stadium, home of East Bengal FC.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/club/stadium",
  },
  {
    id: "5",
    title: "Club Partners",
    description: "Meet the official partners and sponsors who support East Bengal FC.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/club/partners",
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

export default function ClubPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">East Bengal Football Club</h1>
        <p className="text-gray-600">Since 1920: Then, Now & Forever</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-64 md:h-80 w-full">
              <Image src="/images/team-photo-white.png" alt="East Bengal Football Club" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Since 1920</h2>
                <p className="text-lg md:text-xl">Then, Now & Forever</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                East Bengal Football Club, founded in 1920, is one of India's most iconic and successful football clubs.
                Based in Kolkata, the club has a rich heritage spanning over a century and boasts a passionate fan base
                that extends across the country and beyond.
              </p>
              <p className="text-gray-600 mb-4">
                Known for their distinctive Red and Gold colors, East Bengal FC has established itself as a powerhouse
                in Indian football, winning numerous national and regional titles throughout its illustrious history.
              </p>
              <p className="text-gray-600">
                The club currently competes in the Indian Super League (ISL), the top tier of Indian football, and
                continues to uphold its legacy of excellence, passion, and commitment to the beautiful game.
              </p>
            </div>
          </div>

          {/* Club Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {clubSections.map((section) => (
              <Link key={section.id} href={section.link} className="block group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src={section.id === "3" ? "/images/player-with-trophy.png" : section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Club Values */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Club Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-700">Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Striving for the highest standards in everything we do, both on and off the pitch.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-700">Passion</h3>
                  <p className="text-gray-600 text-sm">
                    Bringing energy, enthusiasm, and commitment to our football and our community.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-700">Unity</h3>
                  <p className="text-gray-600 text-sm">
                    Working together as one team, one club, and one community to achieve our goals.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-700">Respect</h3>
                  <p className="text-gray-600 text-sm">
                    Treating everyone with dignity and fairness, valuing diversity and inclusion.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-700">Tradition</h3>
                  <p className="text-gray-600 text-sm">
                    Honoring our rich heritage while embracing innovation and looking to the future.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-700">Community</h3>
                  <p className="text-gray-600 text-sm">
                    Making a positive difference in the lives of our supporters and the wider community.
                  </p>
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

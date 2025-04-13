import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function EastBengalopediaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">East Bengalopedia</h1>
      <p className="text-lg text-gray-700 mb-8">
        Your comprehensive resource for everything East Bengal FC - from the club's rich history to legendary players
        and memorable achievements.
      </p>

      {/* Main Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Category 1 */}
        <Link
          href="/east-bengalopedia/why-east-bengal"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image src="/images/team-photo-field.png" alt="Club Origins" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-red-700 mb-2">Club Origins</h2>
            <p className="text-gray-600 mb-4">
              Discover the fascinating story behind East Bengal FC's formation and early years.
            </p>
            <div className="flex items-center text-red-600 font-medium">
              <span>Read More</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </Link>

        {/* Category 2 */}
        <Link
          href="/east-bengalopedia/trophy-cabinet"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image src="/images/player-with-trophy.png" alt="Trophy Cabinet" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-red-700 mb-2">Trophy Cabinet</h2>
            <p className="text-gray-600 mb-4">
              Explore the impressive collection of silverware won throughout our illustrious history.
            </p>
            <div className="flex items-center text-red-600 font-medium">
              <span>Read More</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </Link>

        {/* Category 3 */}
        <Link
          href="/east-bengalopedia/notable-players"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image src="/images/player-dribbling.png" alt="Legendary Players" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-red-700 mb-2">Legendary Players</h2>
            <p className="text-gray-600 mb-4">
              Meet the iconic figures who have worn the Red and Gold with distinction.
            </p>
            <div className="flex items-center text-red-600 font-medium">
              <span>Read More</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </Link>

        {/* Category 4 */}
        <Link
          href="/east-bengalopedia/historical-seasons"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image src="/images/team-photo-white.png" alt="Historic Seasons" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-red-700 mb-2">Historic Seasons</h2>
            <p className="text-gray-600 mb-4">
              Relive the most memorable campaigns in East Bengal FC's storied history.
            </p>
            <div className="flex items-center text-red-600 font-medium">
              <span>Read More</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </Link>
      </div>

      {/* Featured Content */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-red-700 mb-6 pb-2 border-b border-gray-200">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Item 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src="/images/match-action.png" alt="Greatest Moments" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-700 mb-2">Greatest Moments</h3>
              <p className="text-gray-600 mb-3">The unforgettable victories and achievements that define our legacy.</p>
              <Link href="/east-bengalopedia/greatest-moments" className="text-red-600 font-medium flex items-center">
                Explore
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Featured Item 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/player-with-trophy-sitting.png"
                alt="1997 Federation Cup"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-700 mb-2">1997 Federation Cup</h3>
              <p className="text-gray-600 mb-3">The inside story of our historic Federation Cup triumph.</p>
              <Link
                href="/east-bengalopedia/1997-federation-cup"
                className="text-red-600 font-medium flex items-center"
              >
                Read Story
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Featured Item 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src="/images/aerial-duel.png" alt="Foreign Legends" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-700 mb-2">Foreign Legends</h3>
              <p className="text-gray-600 mb-3">The international stars who made their mark in Red and Gold.</p>
              <Link href="/east-bengalopedia/foreign-legends" className="text-red-600 font-medium flex items-center">
                Discover
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Additions */}
      <div>
        <h2 className="text-2xl font-bold text-red-700 mb-6 pb-2 border-b border-gray-200">Recent Additions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Item 1 */}
          <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-1/3 min-h-[150px]">
              <Image src="/images/team-lineup.png" alt="Crest Evolution" fill className="object-cover" />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-bold text-red-700 mb-2">Crest Evolution</h3>
              <p className="text-gray-600 mb-3">The changing face of East Bengal FC through our iconic emblems.</p>
              <Link href="/east-bengalopedia/crest-evolution" className="text-red-600 font-medium flex items-center">
                View Gallery
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Recent Item 2 */}
          <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-1/3 min-h-[150px]">
              <Image src="/images/press-conference.png" alt="Coaching Legends" fill className="object-cover" />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-bold text-red-700 mb-2">Coaching Legends</h3>
              <p className="text-gray-600 mb-3">The tactical masterminds who guided East Bengal to glory.</p>
              <Link href="/east-bengalopedia/coaching-legends" className="text-red-600 font-medium flex items-center">
                Read Profiles
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

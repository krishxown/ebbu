import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Star, Flag } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Derby Classics | EBBU - East Bengal Bangal United",
  description:
    "Relive the most memorable Kolkata Derby matches between East Bengal FC and Mohun Bagan. Explore the history, rivalry, and iconic moments of one of football's oldest derbies.",
  keywords: "Kolkata Derby, East Bengal vs Mohun Bagan, Derby history, East Bengal derby wins",
}

// Derby data
const derbyInfo = {
  introduction:
    "The Kolkata Derby between East Bengal FC and Mohun Bagan is one of the oldest and most passionate football rivalries in the world. Dating back to 1925, this fixture transcends football and reflects the complex social and cultural dynamics of Bengal. For East Bengal supporters, derby victories are celebrated with special fervor, and certain matches have achieved legendary status in the club's folklore.",
  stats: {
    firstMatch: "August 8, 1925",
    totalMatches: "Over 375",
    eastBengalWins: "Over 135",
    mohunBaganWins: "Over 125",
    draws: "Over 115",
    biggestWin: "5-0 (September 6, 1975)",
  },
}

const classicDerbies = [
  {
    date: "September 6, 1975",
    competition: "IFA Shield Final",
    result: "East Bengal 5-0 Mohun Bagan",
    significance:
      "Known as the 'Pancha Pandava' match, this remains East Bengal's biggest victory in the Kolkata Derby. The humiliating defeat was so devastating for Mohun Bagan supporters that it reportedly led to several suicides. This match is etched in East Bengal folklore as the ultimate derby triumph.",
    keyPlayers: ["Shyam Thapa", "Surajit Sengupta", "Ranjit Mukherjee"],
    image: "/images/team-photo-white.png",
  },
  {
    date: "July 13, 1997",
    competition: "Federation Cup Semi-final",
    result: "East Bengal 4-1 Mohun Bagan",
    significance:
      "In a rain-soaked match at the Salt Lake Stadium, East Bengal produced a masterclass to demolish their rivals. The match is remembered for Bhaichung Bhutia's hat-trick, making him the first player to score three goals in a Kolkata Derby in the modern era.",
    keyPlayers: ["Bhaichung Bhutia", "Raman Vijayan", "Carlton Chapman"],
    image: "/images/player-dribbling.png",
  },
  {
    date: "February 2, 2003",
    competition: "National Football League",
    result: "East Bengal 2-0 Mohun Bagan",
    significance:
      "This victory was part of East Bengal's dominant 2002-03 season, where they won the National Football League, IFA Shield, and Durand Cup. The win helped East Bengal establish their superiority in what would become one of their most successful periods.",
    keyPlayers: ["Mike Okoro", "Alvito D'Cunha", "Debjit Ghosh"],
    image: "/images/player-with-trophy.png",
  },
  {
    date: "September 25, 2011",
    competition: "Federation Cup",
    result: "East Bengal 2-1 Mohun Bagan",
    significance:
      "This match saw East Bengal come from behind to defeat their rivals with a dramatic late winner. The victory was particularly sweet as it came during a period of East Bengal dominance in the Calcutta Football League, where they won eight consecutive titles from 2010 to 2017.",
    keyPlayers: ["Tolgay Ozbey", "Penn Orji", "Mehtab Hossain"],
    image: "/images/match-action.png",
  },
  {
    date: "January 19, 2020",
    competition: "I-League",
    result: "East Bengal 2-1 Mohun Bagan",
    significance:
      "This was the last Kolkata Derby in the I-League before both teams joined the Indian Super League (ISL). East Bengal came from behind to win with a late goal, giving their supporters bragging rights as the derby entered a new era in Indian football.",
    keyPlayers: ["Jaime Santos", "Juan Mera", "Marcos de la Espada"],
    image: "/images/aerial-duel.png",
  },
  {
    date: "March 10, 2024",
    competition: "Indian Super League",
    result: "East Bengal 2-1 Mohun Bagan SG",
    significance:
      "After a difficult start to life in the ISL, East Bengal finally secured their first derby victory in the competition. This win was particularly significant as it came against a Mohun Bagan side that was challenging for the league title, giving East Bengal supporters a moment to cherish in the modern era.",
    keyPlayers: ["Cleiton Silva", "Nandhakumar Sekar", "Lalchungnunga"],
    image: "/images/team-photo-field.png",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "The 5-0 Derby: Remembering the Pancha Pandava Match",
    slug: "pancha-pandava-match-5-0",
    category: "history",
  },
  {
    id: "2",
    title: "Bhaichung Bhutia's Derby Hat-trick: A Rainy Day Masterclass",
    slug: "bhaichung-bhutia-derby-hat-trick",
    category: "history",
  },
  {
    id: "3",
    title: "The Cultural Significance of the Kolkata Derby",
    slug: "cultural-significance-kolkata-derby",
    category: "analysis",
  },
  {
    id: "4",
    title: "East Bengal's First ISL Derby Win: A New Chapter",
    slug: "east-bengal-first-isl-derby-win",
    category: "match-report",
  },
]

export default function DerbyHistoryPage() {
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
              <Image src="/images/team-lineup.png" alt="Kolkata Derby" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">Derby Classics</h1>
                <p className="text-lg">The Historic Rivalry Between East Bengal and Mohun Bagan</p>
              </div>
            </div>

            <div className="p-6">
              <div className="prose max-w-none mb-8">
                <p>{derbyInfo.introduction}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Flag className="h-5 w-5 text-red-700 mr-2" />
                  Derby Facts & Figures
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">First Match</h3>
                    <p className="text-lg font-medium">{derbyInfo.stats.firstMatch}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Total Matches</h3>
                    <p className="text-lg font-medium">{derbyInfo.stats.totalMatches}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">East Bengal Wins</h3>
                    <p className="text-lg font-medium text-red-700 font-bold">{derbyInfo.stats.eastBengalWins}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Mohun Bagan Wins</h3>
                    <p className="text-lg font-medium">{derbyInfo.stats.mohunBaganWins}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Draws</h3>
                    <p className="text-lg font-medium">{derbyInfo.stats.draws}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Biggest Win</h3>
                    <p className="text-lg font-medium text-red-700 font-bold">{derbyInfo.stats.biggestWin}</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-700 pl-3">Memorable Derby Matches</h2>

              <div className="space-y-8">
                {classicDerbies.map((derby) => (
                  <div key={derby.date} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="md:flex">
                      <div className="relative h-64 md:h-auto md:w-1/3 flex-shrink-0">
                        <Image
                          src={derby.image || "/placeholder.svg"}
                          alt={`Derby: ${derby.result}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-red-700 text-white px-3 py-1 text-sm font-bold">
                          {derby.date}
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                          <h3 className="text-xl font-bold">{derby.result}</h3>
                          <div className="text-sm text-gray-500 mt-1 md:mt-0">{derby.competition}</div>
                        </div>
                        <p className="text-gray-600 mb-4">{derby.significance}</p>
                        <div>
                          <h4 className="text-base font-bold mb-2 flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" />
                            Key Players
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {derby.keyPlayers.map((player) => (
                              <span key={player} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                                {player}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-100 mt-12">
                <h3 className="text-xl font-bold text-red-800 mb-3">The Cultural Significance of the Derby</h3>
                <p className="text-red-700 mb-4">
                  The Kolkata Derby is more than just a football match; it represents a complex socio-cultural divide
                  that has its roots in the history of Bengal:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li>
                    <strong>East vs West:</strong> East Bengal traditionally represented the migrants from East Bengal
                    (now Bangladesh), while Mohun Bagan represented the natives of West Bengal.
                  </li>
                  <li>
                    <strong>Identity and Pride:</strong> For East Bengal supporters, the club became a symbol of their
                    cultural identity and pride in a new land.
                  </li>
                  <li>
                    <strong>Beyond Football:</strong> The rivalry extends beyond the pitch, influencing cultural,
                    social, and even political dynamics in Kolkata and Bengal.
                  </li>
                  <li>
                    <strong>Family Divisions:</strong> It's common to find families divided in their support, with
                    different generations supporting different clubs.
                  </li>
                  <li>
                    <strong>Culinary Rivalry:</strong> Even food preferences became part of the rivalry, with East
                    Bengal associated with Ilish (Hilsa fish) and Mohun Bagan with Chingri (prawns).
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

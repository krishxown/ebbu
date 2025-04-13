import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function HistoricalSeasonsPage() {
  // Sample data for historical seasons
  const historicalSeasons = [
    {
      year: "1970-71",
      title: "The Invincible Season",
      description:
        "East Bengal's legendary unbeaten season where they won the Calcutta Football League without conceding a single goal.",
      achievements: ["Calcutta Football League", "IFA Shield", "Durand Cup"],
      image: "/images/team-photo-field.png",
    },
    {
      year: "1975-76",
      title: "Triple Crown Glory",
      description:
        "The historic season where East Bengal claimed three major trophies, cementing their dominance in Indian football.",
      achievements: ["Calcutta Football League", "IFA Shield", "Rovers Cup"],
      image: "/images/team-photo-white.png",
    },
    {
      year: "1984-85",
      title: "Federation Cup Triumph",
      description: "A memorable campaign highlighted by a dramatic Federation Cup victory against arch-rivals.",
      achievements: ["Federation Cup", "Calcutta Football League"],
      image: "/images/player-with-trophy.png",
    },
    {
      year: "1996-97",
      title: "Asian Club Championship Success",
      description:
        "East Bengal's remarkable run in the Asian Club Championship, showcasing Indian football on the continental stage.",
      achievements: ["Federation Cup", "Semi-finals of Asian Club Championship"],
      image: "/images/player-with-trophy-sitting.png",
    },
    {
      year: "2003-04",
      title: "ASEAN Club Championship",
      description:
        "The groundbreaking season where East Bengal became the first Indian club to win an international tournament abroad.",
      achievements: ["ASEAN Club Championship", "National Football League", "Durand Cup"],
      image: "/images/team-lineup.png",
    },
    {
      year: "2009-10",
      title: "I-League Champions",
      description:
        "East Bengal's dominant campaign to claim the prestigious I-League title, showcasing attacking football.",
      achievements: ["I-League", "Federation Cup"],
      image: "/images/match-action.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/east-bengalopedia" className="text-red-600 hover:text-red-800 flex items-center mb-4">
          ← Back to East Bengalopedia
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">Historic Seasons</h1>
        <p className="text-lg text-gray-700">
          Relive the most memorable campaigns in East Bengal FC's storied history, from domestic dominance to
          continental glory.
        </p>
      </div>

      {/* Timeline of Historical Seasons */}
      <div className="space-y-12 mb-12">
        {historicalSeasons.map((season, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="h-64 md:h-full relative">
                  <Image
                    src={season.image || "/placeholder.svg"}
                    alt={`${season.year} Season`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <div className="inline-block bg-red-700 px-3 py-1 rounded-md text-sm font-bold mb-2">
                        {season.year}
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold">{season.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <p className="text-gray-700 mb-4">{season.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">Key Achievements:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {season.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/east-bengalopedia/seasons/${season.year.replace("-", "")}`}
                  className="inline-block bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md font-medium transition"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/east-bengalopedia/trophy-cabinet"
            className="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition"
          >
            <div className="mr-3 text-red-700">
              <ChevronRight className="h-5 w-5" />
            </div>
            <span className="font-medium">Trophy Cabinet</span>
          </Link>
          <Link
            href="/east-bengalopedia/notable-players"
            className="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition"
          >
            <div className="mr-3 text-red-700">
              <ChevronRight className="h-5 w-5" />
            </div>
            <span className="font-medium">Legendary Players</span>
          </Link>
          <Link
            href="/history/derby-history"
            className="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition"
          >
            <div className="mr-3 text-red-700">
              <ChevronRight className="h-5 w-5" />
            </div>
            <span className="font-medium">Derby Classics</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

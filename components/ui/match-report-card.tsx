import Link from "next/link"
import Image from "next/image"
import { Trophy, Calendar } from "lucide-react"

interface MatchReportCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  slug: string
  result?: string
  scorers?: string[]
  venue?: string
  competition?: string
}

export default function MatchReportCard({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  slug,
  result,
  scorers,
  venue,
  competition,
}: MatchReportCardProps) {
  const isUpcoming = result === "Upcoming"

  return (
    <Link href={`/matches/${slug}`} className="block group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full">
        <div className="relative h-40 sm:h-48 w-full">
          <Image src={image || "/placeholder.svg?height=200&width=400"} alt={title} fill className="object-cover" />
          {result && (
            <div
              className={`absolute top-0 right-0 ${isUpcoming ? "bg-blue-700" : "bg-black"} bg-opacity-75 text-white px-2 sm:px-3 py-1 sm:py-2 text-base sm:text-lg font-bold`}
            >
              {result}
            </div>
          )}
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex flex-wrap items-center text-xs text-gray-500 mb-1 sm:mb-2 gap-1 sm:gap-2">
            <time dateTime={date}>{date}</time>
            {competition && (
              <span className="flex items-center">
                <Trophy className="h-3 w-3 mr-1" />
                {competition}
              </span>
            )}
          </div>
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 mb-1 sm:mb-2">{excerpt}</p>
          {scorers && scorers.length > 0 && (
            <div className="text-xs text-gray-600 mb-1 sm:mb-2">
              <span className="font-semibold">Scorers:</span> {scorers.join(", ")}
            </div>
          )}
          {venue && (
            <div className="text-xs text-gray-600 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {venue}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}

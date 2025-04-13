import type { Metadata } from "next"
import MatchReportCard from "@/components/ui/match-report-card"
import { PaginationNew as Pagination } from "@/components/ui/pagination"
import TagFilter from "@/components/ui/tag-filter"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Match Reports | EBBU - East Bengal Bangal United",
  description:
    "Comprehensive match reports and analysis of East Bengal FC games. Pre-match build-up, post-match analysis, and player ratings.",
  keywords: "East Bengal match reports, football analysis, ISL matches, East Bengal results, EBBU match reports",
}

// Mock data
const matchTags = ["All", "ISL", "Durand Cup", "Super Cup", "Derby", "Home", "Away", "Win", "Draw", "Loss"]

const matchReports = [
  {
    id: "1",
    title: "East Bengal Triumph in Season Opener",
    excerpt:
      "A dominant performance saw East Bengal secure all three points in their first match of the new ISL season.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 28, 2023",
    author: "Sunil Chhetri",
    slug: "east-bengal-triumph-season-opener",
    result: "EB 3-1 MCFC",
    scorers: ["Silva 23'", "Mahesh 45'", "Roy 78'"],
    venue: "Salt Lake Stadium",
    competition: "ISL 2023",
  },
  {
    id: "2",
    title: "Late Goal Secures Draw in Thrilling Derby",
    excerpt: "East Bengal fought back from two goals down to secure a dramatic draw against their arch-rivals.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 20, 2023",
    author: "Baichung Bhutia",
    slug: "late-goal-secures-draw-derby",
    result: "EB 2-2 MB",
    scorers: ["Diaz 67'", "Kumar 90+2'"],
    venue: "Salt Lake Stadium",
    competition: "Durand Cup",
  },
  {
    id: "3",
    title: "East Bengal Fall to Narrow Defeat Against Champions",
    excerpt:
      "Despite a spirited performance, East Bengal were edged out by the defending champions in a close contest.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 15, 2023",
    author: "Rahul Sharma",
    slug: "narrow-defeat-against-champions",
    result: "HFC 1-0 EB",
    scorers: [],
    venue: "GMC Balayogi Stadium",
    competition: "ISL 2023",
  },
  {
    id: "4",
    title: "Commanding Victory Boosts East Bengal's Super Cup Hopes",
    excerpt: "A comprehensive win keeps East Bengal's hopes alive in the Super Cup group stage.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 10, 2023",
    author: "Amit Das",
    slug: "victory-boosts-super-cup-hopes",
    result: "EB 3-0 NEUFC",
    scorers: ["Perosevic 12'", "Lima 34'", "Suhair 56'"],
    venue: "Kalinga Stadium",
    competition: "Super Cup",
  },
  {
    id: "5",
    title: "East Bengal Secure Crucial Away Point",
    excerpt: "A resilient defensive display earned East Bengal a valuable point on their travels.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 5, 2023",
    author: "Vikram Singh",
    slug: "crucial-away-point",
    result: "KBFC 0-0 EB",
    scorers: [],
    venue: "Jawaharlal Nehru Stadium",
    competition: "ISL 2023",
  },
  {
    id: "6",
    title: "Five-Star Performance Delights Home Fans",
    excerpt: "East Bengal put on a show for the home supporters with a dazzling attacking display.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 30, 2023",
    author: "Priya Banerjee",
    slug: "five-star-performance",
    result: "EB 5-1 JFC",
    scorers: ["Silva 10'", "Mahesh 23'", "Roy 45'", "Lima 67'", "Perosevic 82'"],
    venue: "Salt Lake Stadium",
    competition: "ISL 2023",
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

export default function MatchesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : null

  // In a real app, you would filter match reports based on the tag
  // For now, we'll just use all the reports
  const filteredReports = matchReports

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Match Reports</h1>
        <p className="text-gray-600">Comprehensive coverage of all East Bengal FC matches</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TagFilter tags={matchTags} basePath="/matches" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReports.map((report) => (
              <MatchReportCard key={report.id} {...report} />
            ))}
          </div>

          <Pagination currentPage={page} totalPages={3} basePath="/matches" />
        </div>

        <div>
          <Sidebar popularArticles={popularArticles} />
        </div>
      </div>
    </div>
  )
}

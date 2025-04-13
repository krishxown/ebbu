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

// Updated match tags based on the official East Bengal FC website
const matchTags = ["All", "ISL", "Durand Cup", "Super Cup", "Derby", "Home", "Away"]

// Updated match reports with content from the official East Bengal FC website
const matchReports = [
  {
    id: "1",
    title: "East Bengal FC vs Mohun Bagan SG: Durand Cup 2024 Preview",
    excerpt:
      "East Bengal FC will face arch-rivals Mohun Bagan SG in the opening match of their Durand Cup 2024 campaign at Salt Lake Stadium.",
    image: "/images/team-lineup.png",
    date: "July 25, 2024",
    author: "EBBU Team",
    slug: "east-bengal-vs-mohun-bagan-durand-cup-preview",
    result: "Upcoming",
    venue: "Salt Lake Stadium",
    competition: "Durand Cup 2024",
  },
  {
    id: "2",
    title: "East Bengal FC 2-1 Mohun Bagan SG: Derby Delight for Red & Gold Brigade",
    excerpt:
      "East Bengal FC secured a memorable victory over arch-rivals Mohun Bagan SG in the Kolkata Derby at Salt Lake Stadium.",
    image: "/images/player-with-trophy.png",
    date: "March 10, 2024",
    author: "EBBU Team",
    slug: "east-bengal-vs-mohun-bagan-isl-derby",
    result: "EBFC 2-1 MBSG",
    scorers: ["Cleiton Silva 23'", "Nandhakumar 78'"],
    venue: "Salt Lake Stadium",
    competition: "ISL 2023-24",
  },
  {
    id: "3",
    title: "East Bengal FC 3-2 NorthEast United FC: Cleiton Silva Hat-trick Seals Victory",
    excerpt:
      "A stunning hat-trick from Cleiton Silva helped East Bengal FC secure all three points in a thrilling encounter.",
    image: "/images/player-with-trophy-sitting.png",
    date: "February 25, 2024",
    author: "EBBU Team",
    slug: "east-bengal-vs-northeast-united-isl",
    result: "EBFC 3-2 NEUFC",
    scorers: ["Cleiton Silva 12'", "Cleiton Silva 45'", "Cleiton Silva 67'"],
    venue: "Salt Lake Stadium",
    competition: "ISL 2023-24",
  },
  {
    id: "4",
    title: "East Bengal FC 1-0 Chennaiyin FC: Nandhakumar's Strike Secures Three Points",
    excerpt:
      "A solitary goal from Nandhakumar Sekar was enough for East Bengal FC to claim victory against Chennaiyin FC.",
    image: "/images/team-photo-white.png",
    date: "February 10, 2024",
    author: "EBBU Team",
    slug: "east-bengal-vs-chennaiyin-isl",
    result: "EBFC 1-0 CFC",
    scorers: ["Nandhakumar 56'"],
    venue: "Salt Lake Stadium",
    competition: "ISL 2023-24",
  },
  {
    id: "5",
    title: "East Bengal FC 2-2 FC Goa: Thrilling Draw at Salt Lake Stadium",
    excerpt: "East Bengal FC and FC Goa played out an entertaining draw in the Indian Super League.",
    image: "/images/press-conference.png",
    date: "January 28, 2024",
    author: "EBBU Team",
    slug: "east-bengal-vs-fc-goa-isl",
    result: "EBFC 2-2 FCG",
    scorers: ["Cleiton Silva 34'", "Saul Crespo 78'"],
    venue: "Salt Lake Stadium",
    competition: "ISL 2023-24",
  },
  {
    id: "6",
    title: "Kerala Blasters FC 1-2 East Bengal FC: Red & Gold Brigade Secure Away Victory",
    excerpt: "East Bengal FC claimed a valuable away win against Kerala Blasters FC in Kochi.",
    image: "/images/team-lineup.png",
    date: "January 12, 2024",
    author: "EBBU Team",
    slug: "kerala-blasters-vs-east-bengal-isl",
    result: "KBFC 1-2 EBFC",
    scorers: ["Cleiton Silva 23'", "Nandhakumar 67'"],
    venue: "Jawaharlal Nehru Stadium, Kochi",
    competition: "ISL 2023-24",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "Since 1920: Then, Now & Forever",
    slug: "since-1920-then-now-forever",
    category: "history" as const,
  },
  {
    id: "2",
    title: "East Bengal FC's Journey in the ISL 2023-24 Season",
    slug: "east-bengal-journey-isl-2023-24",
    category: "analysis" as const,
  },
  {
    id: "3",
    title: "Durand Cup 2024: East Bengal FC's Campaign Preview",
    slug: "durand-cup-2024-east-bengal-preview",
    category: "news" as const,
  },
  {
    id: "4",
    title: "Derby Delight: East Bengal FC's Victory Over Mohun Bagan SG",
    slug: "derby-delight-victory-mohun-bagan",
    category: "matches" as const,
  },
]

export default function MatchesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : null

  // Filter match reports based on the tag
  const filteredReports = tag
    ? matchReports.filter(
        (report) =>
          report.competition.includes(tag) ||
          (tag === "Derby" && report.title.toLowerCase().includes("derby")) ||
          (tag === "Home" && report.venue.includes("Salt Lake Stadium")) ||
          (tag === "Away" && !report.venue.includes("Salt Lake Stadium")),
      )
    : matchReports

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

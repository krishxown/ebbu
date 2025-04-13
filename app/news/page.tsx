import type { Metadata } from "next"
import ArticleCard from "@/components/ui/article-card"
import { PaginationNew as Pagination } from "@/components/ui/pagination"
import TagFilter from "@/components/ui/tag-filter"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "News | EBBU - East Bengal Bangal United",
  description:
    "Latest news and updates about East Bengal Football Club. Transfer news, team updates, press conferences and more.",
  keywords: "East Bengal news, football news, ISL news, East Bengal transfers, EBBU news",
}

// Updated news tags based on the official East Bengal FC website
const newsTags = ["All", "Team News", "Transfer", "Club News", "ISL", "Durand Cup", "Derby"]

// Updated news articles with content from the official East Bengal FC website
const newsArticles = [
  {
    id: "1",
    title: "Since 1920: Then, Now & Forever",
    excerpt:
      "East Bengal FC celebrates its rich heritage and tradition since 1920, embodying the spirit of 'Then, Now & Forever' that defines the club's legacy.",
    image: "/images/team-photo-white.png",
    date: "July 15, 2024",
    author: "EBBU Team",
    category: "news" as const,
    slug: "since-1920-then-now-forever",
    tags: ["Club News"],
  },
  {
    id: "2",
    title: "East Bengal FC Announces Squad for Durand Cup 2024",
    excerpt:
      "The Red & Gold Brigade has announced a strong squad for the upcoming Durand Cup tournament, with several new signings set to make their debut.",
    image: "/images/team-lineup.png",
    date: "July 10, 2024",
    author: "EBBU Team",
    category: "news" as const,
    slug: "east-bengal-durand-cup-squad-2024",
    tags: ["Durand Cup", "Team News"],
  },
  {
    id: "3",
    title: "East Bengal FC Signs Spanish Midfielder for 2024-25 Season",
    excerpt:
      "The Red & Gold Brigade strengthens their midfield with the signing of a Spanish midfielder for the upcoming season.",
    image: "/images/press-conference.png",
    date: "July 5, 2024",
    author: "EBBU Team",
    category: "news" as const,
    slug: "east-bengal-signs-spanish-midfielder",
    tags: ["Transfer", "Team News"],
  },
  {
    id: "4",
    title: "East Bengal FC to Begin Pre-Season Training in July",
    excerpt:
      "The team will assemble in Kolkata to begin preparations for the 2024-25 season under head coach Carles Cuadrat.",
    image: "/images/player-with-trophy.png",
    date: "June 28, 2024",
    author: "EBBU Team",
    category: "news" as const,
    slug: "east-bengal-pre-season-training-july",
    tags: ["Team News"],
  },
  {
    id: "5",
    title: "East Bengal FC Unveils New Home Kit for 2024-25 Season",
    excerpt:
      "The Red & Gold Brigade has unveiled their new home kit for the 2024-25 season, featuring the traditional red and gold colors with a modern design.",
    image: "/images/player-with-trophy-sitting.png",
    date: "June 20, 2024",
    author: "EBBU Team",
    category: "news" as const,
    slug: "east-bengal-new-home-kit-2024-25",
    tags: ["Club News"],
  },
  {
    id: "6",
    title: "East Bengal FC to Face Mohun Bagan SG in Durand Cup Opener",
    excerpt:
      "The Kolkata Derby will kick off the Durand Cup campaign for East Bengal FC as they face arch-rivals Mohun Bagan SG.",
    image: "/images/team-lineup.png",
    date: "June 15, 2024",
    author: "EBBU Team",
    category: "news" as const,
    slug: "east-bengal-mohun-bagan-durand-cup-opener",
    tags: ["Durand Cup", "Derby"],
  },
]

const popularArticles = [
  {
    id: "1",
    title: "Since 1920: The Rich Heritage of East Bengal FC",
    slug: "since-1920-east-bengal-heritage",
    category: "history" as const,
  },
  {
    id: "2",
    title: "Then, Now & Forever: The Evolution of East Bengal FC",
    slug: "then-now-forever-east-bengal-evolution",
    category: "history" as const,
  },
  {
    id: "3",
    title: "East Bengal FC's New Signings for the 2024-25 Season",
    slug: "east-bengal-new-signings-2024-25",
    category: "news" as const,
  },
  {
    id: "4",
    title: "Durand Cup 2024: East Bengal FC's Campaign Preview",
    slug: "durand-cup-2024-east-bengal-preview",
    category: "news" as const,
  },
]

export default function NewsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : null

  // Filter articles based on the tag
  const filteredArticles = tag ? newsArticles.filter((article) => article.tags.includes(tag)) : newsArticles

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Latest News</h1>
        <p className="text-gray-600">Stay updated with the latest news and updates about East Bengal FC</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TagFilter tags={newsTags} basePath="/news" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <Pagination currentPage={page} totalPages={5} basePath="/news" />
        </div>

        <div>
          <Sidebar popularArticles={popularArticles} />
        </div>
      </div>
    </div>
  )
}

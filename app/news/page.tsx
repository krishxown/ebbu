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

// Mock data
const newsTags = ["All", "Transfer", "Team News", "Press Conference", "Club News", "ISL", "Derby"]

const newsArticles = [
  {
    id: "1",
    title: "East Bengal Signs New Striker Ahead of ISL Season",
    excerpt:
      "The Red and Gold Brigade have strengthened their attack with the signing of a promising forward from Brazil.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 15, 2023",
    author: "Rahul Sharma",
    category: "news" as const,
    slug: "east-bengal-signs-new-striker",
    tags: ["Transfer", "ISL"],
  },
  {
    id: "2",
    title: "Coach Announces Squad for Upcoming Derby",
    excerpt:
      "The head coach has revealed the 18-man squad that will face arch-rivals in the much-anticipated Kolkata Derby.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 10, 2023",
    author: "Amit Das",
    category: "news" as const,
    slug: "coach-announces-squad-derby",
    tags: ["Team News", "Derby"],
  },
  {
    id: "3",
    title: "East Bengal Foundation Day Celebrations Announced",
    excerpt:
      "The club has unveiled plans for grand celebrations to mark its foundation day with various events and activities.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 5, 2023",
    author: "Priya Banerjee",
    category: "news" as const,
    slug: "foundation-day-celebrations",
    tags: ["Club News", "Events"],
  },
  {
    id: "4",
    title: "Injury Update: Captain to Miss Next Three Matches",
    excerpt: "The team has been dealt a blow as the captain will be sidelined for the upcoming fixtures due to injury.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 30, 2023",
    author: "Vikram Singh",
    category: "news" as const,
    slug: "injury-update-captain",
    tags: ["Team News", "Injury"],
  },
  {
    id: "5",
    title: "East Bengal Unveils New Home Kit for 2023-24 Season",
    excerpt:
      "The club has revealed its new home kit featuring the traditional red and gold colors with a modern design.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 25, 2023",
    author: "Sanjay Gupta",
    category: "news" as const,
    slug: "new-home-kit-unveiled",
    tags: ["Club News", "Kit"],
  },
  {
    id: "6",
    title: "ISL Announces Fixture List for Upcoming Season",
    excerpt:
      "The Indian Super League has released the complete fixture list for the 2023-24 season with East Bengal starting at home.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 20, 2023",
    author: "Rahul Sharma",
    category: "news" as const,
    slug: "isl-fixture-list-announced",
    tags: ["ISL", "Fixtures"],
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

export default function NewsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : null

  // In a real app, you would filter articles based on the tag
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

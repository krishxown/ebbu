import type { Metadata } from "next"
import ArticleCard from "@/components/ui/article-card"
import { PaginationNew as Pagination } from "@/components/ui/pagination"
import TagFilter from "@/components/ui/tag-filter"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Stories | EBBU - East Bengal Bangal United",
  description:
    "Fan stories, matchday experiences, and opinion pieces about East Bengal Football Club. Share in the passion of the Red and Gold faithful.",
  keywords: "East Bengal stories, fan experiences, matchday stories, football culture, EBBU stories",
}

// Mock data
const storyTags = ["All", "Fan Voice", "Matchday Experience", "Opinion", "Fan Culture", "Community", "History"]

const stories = [
  {
    id: "1",
    title: "The Ultras: Inside East Bengal's Most Passionate Fan Group",
    excerpt: "We go behind the scenes with the dedicated supporters who bring the stadium to life every match day.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 15, 2023",
    author: "Ravi Kumar",
    category: "stories" as const,
    slug: "ultras-passionate-fan-group",
    tags: ["Fan Culture", "Matchday"],
  },
  {
    id: "2",
    title: "From Kolkata to Kerala: The Growing Fan Base",
    excerpt: "How East Bengal's support has expanded beyond its traditional stronghold to new regions of India.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 10, 2023",
    author: "Maya Desai",
    category: "stories" as const,
    slug: "kolkata-to-kerala-growing-fan-base",
    tags: ["Fan Culture", "Community"],
  },
  {
    id: "3",
    title: "My First Derby: A Fan's Perspective",
    excerpt: "A first-hand account of experiencing the electric atmosphere of the Kolkata Derby for the first time.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 5, 2023",
    author: "Arjun Mehta",
    category: "stories" as const,
    slug: "my-first-derby-perspective",
    tags: ["Fan Voice", "Matchday Experience", "Derby"],
  },
  {
    id: "4",
    title: "Opinion: Three Changes East Bengal Need to Make",
    excerpt: "An analysis of what the team needs to do differently to challenge for honors in the upcoming season.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 30, 2023",
    author: "Sunil Chhetri",
    category: "stories" as const,
    slug: "opinion-three-changes-needed",
    tags: ["Opinion", "Analysis"],
  },
  {
    id: "5",
    title: "The Red and Gold Family: How Football Brings Us Together",
    excerpt: "Stories of friendships and bonds formed through a shared love for East Bengal FC.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 25, 2023",
    author: "Priya Banerjee",
    category: "stories" as const,
    slug: "red-gold-family-brings-together",
    tags: ["Fan Culture", "Community"],
  },
  {
    id: "6",
    title: "Away Days: Following East Bengal Across India",
    excerpt: "The adventures and experiences of traveling supporters who follow the team wherever they play.",
    image: "/placeholder.svg?height=200&width=400",
    date: "March 20, 2023",
    author: "Rahul Sharma",
    category: "stories" as const,
    slug: "away-days-following-across-india",
    tags: ["Fan Voice", "Matchday Experience"],
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

export default function StoriesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : null

  // In a real app, you would filter stories based on the tag
  const filteredStories = tag ? stories.filter((story) => story.tags.includes(tag)) : stories

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Fan Stories</h1>
        <p className="text-gray-600">Editorial-style content, fan voices, matchday experiences, and opinion pieces</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TagFilter tags={storyTags} basePath="/stories" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStories.map((story) => (
              <ArticleCard key={story.id} {...story} />
            ))}
          </div>

          <Pagination currentPage={page} totalPages={3} basePath="/stories" />
        </div>

        <div>
          <Sidebar popularArticles={popularArticles} />
        </div>
      </div>
    </div>
  )
}

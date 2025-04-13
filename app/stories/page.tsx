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

// Updated story tags based on the official East Bengal FC website theme
const storyTags = ["All", "Fan Voice", "Club Heritage", "Matchday Experience", "Opinion", "Fan Culture", "History"]

// Updated stories with content inspired by the official East Bengal FC website
const stories = [
  {
    id: "1",
    title: "Since 1920: The Legacy of East Bengal FC",
    excerpt: "Exploring the rich heritage and tradition of East Bengal FC since its founding in 1920.",
    image: "/images/team-photo-white.png",
    date: "July 15, 2024",
    author: "EBBU Team",
    category: "stories" as const,
    slug: "since-1920-legacy-east-bengal",
    tags: ["Club Heritage", "History"],
  },
  {
    id: "2",
    title: "Then, Now & Forever: The Evolution of East Bengal FC",
    excerpt: "How East Bengal FC has evolved over the decades while maintaining its core identity and values.",
    image: "/images/player-with-trophy.png",
    date: "July 10, 2024",
    author: "EBBU Team",
    category: "stories" as const,
    slug: "then-now-forever-evolution",
    tags: ["Club Heritage", "History"],
  },
  {
    id: "3",
    title: "The Ultras: Inside East Bengal's Most Passionate Fan Group",
    excerpt: "We go behind the scenes with the dedicated supporters who bring the stadium to life every match day.",
    image: "/images/team-lineup.png",
    date: "July 5, 2024",
    author: "Ravi Kumar",
    category: "stories" as const,
    slug: "ultras-passionate-fan-group",
    tags: ["Fan Culture", "Matchday Experience"],
  },
  {
    id: "4",
    title: "My First Derby: A Fan's Perspective",
    excerpt: "A first-hand account of experiencing the electric atmosphere of the Kolkata Derby for the first time.",
    image: "/images/press-conference.png",
    date: "June 30, 2024",
    author: "Arjun Mehta",
    category: "stories" as const,
    slug: "my-first-derby-perspective",
    tags: ["Fan Voice", "Matchday Experience", "Derby"],
  },
  {
    id: "5",
    title: "From Kolkata to Kerala: The Growing Fan Base",
    excerpt: "How East Bengal's support has expanded beyond its traditional stronghold to new regions of India.",
    image: "/images/player-with-trophy-sitting.png",
    date: "June 25, 2024",
    author: "Maya Desai",
    category: "stories" as const,
    slug: "kolkata-to-kerala-growing-fan-base",
    tags: ["Fan Culture", "Fan Voice"],
  },
  {
    id: "6",
    title: "The Red and Gold Family: How Football Brings Us Together",
    excerpt: "Stories of friendships and bonds formed through a shared love for East Bengal FC.",
    image: "/images/team-lineup.png",
    date: "June 20, 2024",
    author: "Priya Banerjee",
    category: "stories" as const,
    slug: "red-gold-family-brings-together",
    tags: ["Fan Culture", "Fan Voice"],
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
    title: "The Greatest East Bengal XI of All Time",
    slug: "greatest-east-bengal-xi",
    category: "history" as const,
  },
  {
    id: "3",
    title: "Remembering the 1975 IFA Shield Victory",
    slug: "remembering-1975-ifa-shield",
    category: "history" as const,
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

  // Filter stories based on the tag
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

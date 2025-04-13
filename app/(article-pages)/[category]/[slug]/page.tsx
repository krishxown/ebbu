import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, User, Tag, Share2, Facebook, Twitter, Send } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"

interface ArticlePageProps {
  params: {
    category: string
    slug: string
  }
}

// This would normally be fetched from an API
const getArticleData = (category: string, slug: string) => {
  // Mock data for demonstration
  return {
    title: "East Bengal Signs New Striker Ahead of ISL Season",
    excerpt:
      "The Red and Gold Brigade have strengthened their attack with the signing of a promising forward from Brazil.",
    content: `
      <p>East Bengal FC has announced the signing of Brazilian striker Carlos Silva on a two-year deal ahead of the upcoming Indian Super League (ISL) season.</p>
      
      <p>The 27-year-old forward joins from Flamengo, where he scored 15 goals in 30 appearances last season. Silva is expected to bolster East Bengal's attacking options as they aim to improve on their previous campaign.</p>
      
      <p>"I am very excited to join such a historic club," Silva said at his unveiling. "I have heard about the passionate fans and the rich history of East Bengal. I can't wait to play in front of the supporters at Salt Lake Stadium and help the team win trophies."</p>
      
      <h2>Strategic Signing</h2>
      
      <p>The head coach expressed his satisfaction with the new addition to the squad. "Carlos is a player we have been tracking for some time. He has the qualities we are looking for in a striker – pace, power, and clinical finishing. I believe he will adapt quickly to Indian football and make a significant impact."</p>
      
      <p>This signing comes after East Bengal's struggles in front of goal last season, where they managed just 22 goals in 20 matches. The club's management has made strengthening the attack a priority for the new campaign.</p>
      
      <p>Silva is expected to join the team's pre-season training camp next week and could make his debut in the upcoming friendly matches scheduled before the ISL season kicks off.</p>
      
      <h2>Fan Reaction</h2>
      
      <p>The announcement has been met with excitement from the East Bengal faithful, with many taking to social media to welcome the new striker. The club's supporter groups are planning a special welcome for Silva when he arrives in Kolkata.</p>
      
      <p>With this signing, East Bengal has sent a clear signal of intent for the upcoming season as they look to challenge for honors in both the ISL and domestic cup competitions.</p>
    `,
    image: "/images/press-conference.png",
    date: "May 15, 2023",
    author: "Rahul Sharma",
    tags: ["Transfer", "ISL", "Team News"],
    relatedPosts: [
      {
        id: "2",
        title: "Coach Announces Squad for Upcoming Derby",
        slug: "coach-announces-squad-derby",
        category: "news",
      },
      {
        id: "3",
        title: "East Bengal Foundation Day Celebrations Announced",
        slug: "foundation-day-celebrations",
        category: "news",
      },
      {
        id: "4",
        title: "Injury Update: Captain to Miss Next Three Matches",
        slug: "injury-update-captain",
        category: "news",
      },
    ],
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = params
  const article = getArticleData(category, slug)

  return {
    title: `${article.title} | EBBU - East Bengal Bangal United`,
    description: article.excerpt,
    keywords: `East Bengal, ${article.tags.join(", ")}, EBBU, ${category}`,
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = params
  const article = getArticleData(category, slug)

  // Format the category for display
  const formatCategory = (cat: string) => {
    switch (cat) {
      case "news":
        return "News"
      case "matches":
        return "Match Reports"
      case "stories":
        return "Stories"
      case "history":
        return "History"
      case "east-bengalopedia":
        return "East Bengalopedia"
      default:
        return cat.charAt(0).toUpperCase() + cat.slice(1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href={`/${category}`} className="text-red-700 hover:text-red-900 inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {formatCategory(category)}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-80 w-full">
              <Image src="/images/match-action.png" alt={article.title} fill className="object-cover" />
            </div>

            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <time dateTime={article.date}>{article.date}</time>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>{formatCategory(category)}</span>
                </div>
              </div>

              <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: article.content }} />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/${category}?tag=${tag}`}
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 rounded transition"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-sm font-semibold mb-2 flex items-center">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share this article:
                </h3>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
                    aria-label="Share on Telegram"
                  >
                    <Send className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {article.relatedPosts && article.relatedPosts.length > 0 && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {article.relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <Link href={`/${post.category}/${post.slug}`} className="block p-4">
                      <h3 className="font-bold hover: text-red-700 transition">{post.title}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

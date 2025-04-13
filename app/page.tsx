import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FlameIcon as Fire } from "lucide-react"

// Mock data
const featuredArticle = {
  id: "1",
  title: "Will East Bengal Secure the Double or ISL Will Have a Memorable Season?",
  excerpt:
    "As the season reaches its climax, East Bengal FC stands on the verge of making history with a potential domestic double.",
  image: "/placeholder.svg?height=400&width=800",
  date: "May 15, 2023",
  author: "Rahul Sharma",
  category: "news",
  slug: "east-bengal-double-isl-memorable-season",
  tags: ["ISL", "Team News"],
}

const latestNews = [
  {
    id: "2",
    title: "'Jam Ke Khelo' - East Bengal beat Jamshedpur to secure playoff spot",
    excerpt: "A dominant performance saw East Bengal secure all three points and a playoff berth.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 10, 2023",
    author: "Amit Das",
    category: "news",
    slug: "east-bengal-beat-jamshedpur-playoff",
    tags: ["Match Report", "ISL"],
  },
  {
    id: "3",
    title: "Screamer sends East Bengal to the 2nd Consecutive final",
    excerpt: "A stunning long-range effort has sent East Bengal to their second consecutive cup final.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 8, 2023",
    author: "Priya Banerjee",
    category: "news",
    slug: "screamer-sends-east-bengal-final",
    tags: ["Cup", "Match Report"],
  },
]

const hotNews = [
  "EAST BENGAL SQUAD OVER THE YEARS | 1920-2023",
  "East Bengal announce pre-season tour of Europe",
  "New signing arrives in Kolkata to complete medical",
  "Season tickets for 2023-24 now available",
  "East Bengal Foundation Day celebrations announced",
]

const mohunBaganSection = [
  {
    id: "1",
    title: "Will East Bengal Secure the Double or ISL Will Have a Memorable Season?",
    excerpt:
      "As the season reaches its climax, East Bengal FC stands on the verge of making history with a potential domestic double.",
    image: "/placeholder.svg?height=400&width=800",
    date: "May 15, 2023",
    author: "Rahul Sharma",
    category: "news",
    slug: "east-bengal-double-isl-memorable-season",
    tags: ["ISL", "Team News"],
  },
  {
    id: "2",
    title: "Screamer sends East Bengal to the 2nd Consecutive final",
    excerpt: "A stunning long-range effort has sent East Bengal to their second consecutive cup final.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 8, 2023",
    author: "Priya Banerjee",
    category: "news",
    slug: "screamer-sends-east-bengal-final",
    tags: ["Cup", "Match Report"],
  },
  {
    id: "3",
    title: "Will the Shield winners set-up the final at VYBK?",
    excerpt:
      "The league shield winners are looking to book their place in the final at the iconic Vivekananda Yuba Bharati Krirangan.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 7, 2023",
    author: "Vikram Singh",
    category: "news",
    slug: "shield-winners-final-vybk",
    tags: ["Preview", "ISL"],
  },
  {
    id: "4",
    title: "East Bengal have a chance to face English Giant Norwich City FC",
    excerpt: "The Red and Gold Brigade might face the English Championship side in a pre-season friendly.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 3, 2023",
    author: "Sanjay Gupta",
    category: "news",
    slug: "east-bengal-norwich-friendly",
    tags: ["Friendly", "Pre-season"],
  },
]

const popularArticles = [
  {
    id: "1",
    title: "The signings that made us fools! East Bengal XI that flopped",
    image: "/placeholder.svg?height=200&width=400",
    slug: "signings-made-fools-xi-flopped",
    category: "history",
  },
  {
    id: "2",
    title: "EAST BENGAL SQUAD OVER THE YEARS | 1920-2023",
    image: "/placeholder.svg?height=200&width=400",
    slug: "squad-over-years-1920-2023",
    category: "history",
  },
]

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Featured Articles Section */}
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Main Featured Article */}
          <div className="md:col-span-8">
            <Link href={`/news/${featuredArticle.slug}`} className="block group">
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="inline-block bg-red-700 text-white text-xs px-2 py-1 rounded mb-2">BENGALURU FC</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <span>{featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={featuredArticle.date}>{featuredArticle.date}</time>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Featured Articles */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
            {latestNews.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`} className="block group">
                <div className="relative h-[120px] sm:h-[150px] md:h-[180px] rounded-lg overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-red-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="text-xs text-gray-300">
                      <time dateTime={article.date}>{article.date}</time>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hot News Ticker */}
      <div className="bg-red-700 text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center mr-3 sm:mr-4 font-bold">
              <Fire className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
              <span className="text-sm sm:text-base">Hot News</span>
            </div>
            <div className="ticker-container relative w-full">
              <div className="ticker-animation flex items-center">
                {hotNews.map((news, index) => (
                  <div key={index} className="flex items-center whitespace-nowrap mx-3 sm:mx-6">
                    <span className="text-yellow-300 mr-2 sm:mr-3">•</span>
                    <span className="hover:text-yellow-300 cursor-pointer text-sm sm:text-base">{news}</span>
                  </div>
                ))}
                {/* Duplicate items to create seamless loop */}
                {hotNews.map((news, index) => (
                  <div key={`repeat-${index}`} className="flex items-center whitespace-nowrap mx-3 sm:mx-6">
                    <span className="text-yellow-300 mr-2 sm:mr-3">•</span>
                    <span className="hover:text-yellow-300 cursor-pointer text-sm sm:text-base">{news}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {/* East Bengal News Section */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold border-l-4 border-red-700 pl-3">East Bengal</h2>
                <Link
                  href="/news"
                  className="text-red-700 hover:text-red-900 font-medium inline-flex items-center text-sm sm:text-base"
                >
                  View all
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="md:col-span-2">
                  <Link href={`/news/${mohunBaganSection[0].slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-48 sm:h-64 w-full">
                        <Image
                          src={mohunBaganSection[0].image || "/placeholder.svg"}
                          alt={mohunBaganSection[0].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-red-700 text-white text-xs px-2 py-1 m-3 rounded">
                          BENGALURU FC
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-red-700 transition-colors">
                          {mohunBaganSection[0].title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{mohunBaganSection[0].author}</span>
                          <span className="mx-2">•</span>
                          <time dateTime={mohunBaganSection[0].date}>{mohunBaganSection[0].date}</time>
                        </div>
                        <p className="text-gray-600">{mohunBaganSection[0].excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>

                {mohunBaganSection.slice(1).map((article) => (
                  <div key={article.id}>
                    <Link href={`/news/${article.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-32 sm:h-40 w-full">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <div className="text-xs text-gray-500">
                            <time dateTime={article.date}>{article.date}</time>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Indian Football Section */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold border-l-4 border-red-700 pl-3">Match Reports</h2>
                <Link href="/matches" className="text-red-700 hover:text-red-900 font-medium inline-flex items-center">
                  View all
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mohunBaganSection.slice(0, 4).map((article) => (
                  <div key={article.id}>
                    <Link href={`/matches/${article.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-40 w-full">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <div className="text-xs text-gray-500">
                            <time dateTime={article.date}>{article.date}</time>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* EBBU Specials Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold border-l-4 border-red-700 pl-3">EBBU Specials</h2>
                <Link href="/stories" className="text-red-700 hover:text-red-900 font-medium inline-flex items-center">
                  View all
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mohunBaganSection.slice(0, 4).map((article) => (
                  <div key={article.id}>
                    <Link href={`/stories/${article.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative h-40 w-full">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <div className="text-xs text-gray-500">
                            <time dateTime={article.date}>{article.date}</time>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Follow Us */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">Follow Us</h3>
              <div className="grid grid-cols-5 gap-2">
                <a
                  href="#"
                  className="flex items-center justify-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                  <span className="text-sm">6200</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center bg-black text-white p-2 rounded hover:bg-gray-800"
                >
                  <span className="text-sm">2500</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center bg-red-600 text-white p-2 rounded hover:bg-red-700"
                >
                  <span className="text-sm">6600</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center bg-blue-400 text-white p-2 rounded hover:bg-blue-500"
                >
                  <span className="text-sm">1100</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center bg-green-500 text-white p-2 rounded hover:bg-green-600"
                >
                  <span className="text-sm">1000</span>
                </a>
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">Popular Articles</h3>
              <div className="space-y-6">
                {popularArticles.map((article) => (
                  <Link key={article.id} href={`/${article.category}/${article.slug}`} className="block group">
                    <div className="flex">
                      <div className="relative h-20 w-20 flex-shrink-0">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold group-hover:text-red-700 transition-colors">{article.title}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Subscribe Box */}
            <div className="bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">Join the Fan Zone</h3>
              <p className="mb-4">Connect with fellow supporters and get exclusive content</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-red-900 py-2 rounded-md font-medium transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

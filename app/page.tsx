import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FlameIcon as Fire } from "lucide-react"

// Updated data from East Bengal FC's official sources
const featuredArticle = {
  id: "1",
  title: "East Bengal FC Announces Participation in Calcutta Football League 2024",
  excerpt:
    "The Red & Gold Brigade will compete in the upcoming Calcutta Football League Premier Division A, starting this July.",
  image: "/images/team-lineup.png",
  date: "May 15, 2024",
  author: "EBBU Team",
  category: "news",
  slug: "east-bengal-calcutta-football-league-2024",
  tags: ["CFL", "Team News"],
}

const latestNews = [
  {
    id: "2",
    title: "Cleiton Silva Wins Golden Boot for Second Consecutive Season",
    excerpt:
      "East Bengal FC's star striker Cleiton Silva has secured the ISL Golden Boot award for the 2023-24 season.",
    image: "/images/player-with-trophy.png",
    date: "April 28, 2024",
    author: "EBBU Team",
    category: "news",
    slug: "cleiton-silva-golden-boot-second-season",
    tags: ["ISL", "Player News"],
  },
  {
    id: "3",
    title: "East Bengal FC Announces Pre-Season Camp in Kolkata from July 1",
    excerpt: "The Red & Gold Brigade will begin preparations for the new season with a pre-season camp in Kolkata.",
    image: "/images/press-conference.png",
    date: "May 10, 2024",
    author: "EBBU Team",
    category: "news",
    slug: "east-bengal-pre-season-camp-kolkata",
    tags: ["Pre-Season", "Team News"],
  },
]

const hotNews = [
  "East Bengal FC to participate in Calcutta Football League 2024",
  "Cleiton Silva wins Golden Boot for second consecutive season",
  "Pre-season camp to begin in Kolkata from July 1",
  "East Bengal FC finishes 5th in ISL 2023-24 season",
  "Durand Cup 2024 schedule to be announced soon",
]

const recentArticles = [
  {
    id: "1",
    title: "East Bengal FC Finishes 5th in ISL 2023-24 Season",
    excerpt:
      "The Red & Gold Brigade concludes their ISL campaign with a 5th place finish, their best performance in the competition.",
    image: "/images/press-conference.png",
    date: "April 20, 2024",
    author: "EBBU Team",
    category: "news",
    slug: "east-bengal-fifth-place-isl-2023-24",
    tags: ["ISL", "Season Review"],
  },
  {
    id: "2",
    title: "Nandhakumar Sekar Named in ISL Team of the Season",
    excerpt: "East Bengal FC winger Nandhakumar Sekar has been included in the ISL Team of the Season for 2023-24.",
    image: "/images/team-photo-white.png",
    date: "April 25, 2024",
    author: "EBBU Team",
    category: "news",
    slug: "nandhakumar-sekar-isl-team-of-season",
    tags: ["ISL", "Player News"],
  },
  {
    id: "3",
    title: "East Bengal FC to Face Mohun Bagan SG in Calcutta Football League Derby",
    excerpt: "The first Kolkata Derby of the 2024-25 season is set to take place in the Calcutta Football League.",
    image: "/images/team-lineup.png",
    date: "May 12, 2024",
    author: "EBBU Team",
    category: "news",
    slug: "east-bengal-mohun-bagan-cfl-derby",
    tags: ["Derby", "CFL"],
  },
  {
    id: "4",
    title: "East Bengal FC Celebrates 104 Years of Rich Heritage",
    excerpt: "The Red & Gold Brigade commemorates 104 years of glorious history and tradition in Indian football.",
    image: "/images/player-with-trophy-sitting.png",
    date: "May 1, 2024",
    author: "EBBU Team",
    category: "news",
    slug: "east-bengal-104-years-heritage",
    tags: ["Club History", "Anniversary"],
  },
]

const popularArticles = [
  {
    id: "1",
    title: "The Evolution of East Bengal FC's Playing Style Under Carles Cuadrat",
    image: "/images/press-conference.png",
    slug: "evolution-east-bengal-playing-style-cuadrat",
    category: "analysis",
  },
  {
    id: "2",
    title: "Cleiton Silva: The Brazilian Maestro Leading East Bengal's Revival",
    image: "/images/player-with-trophy.png",
    slug: "cleiton-silva-brazilian-maestro-east-bengal",
    category: "player-profile",
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
                {/* Update the featured article image */}
                <Image
                  src="/images/team-photo-field.png"
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="inline-block bg-red-700 text-white text-xs px-2 py-1 rounded mb-2">FEATURED</div>
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
              <span className="text-sm sm:text-base">Breaking News</span>
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
            {/* Latest News Section */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold border-l-4 border-red-700 pl-3">Latest News</h2>
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
                  <Link href={`/news/${recentArticles[0].slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-48 sm:h-64 w-full">
                        <Image
                          src={recentArticles[0].image || "/placeholder.svg"}
                          alt={recentArticles[0].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-red-700 text-white text-xs px-2 py-1 m-3 rounded">
                          ISL
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-red-700 transition-colors">
                          {recentArticles[0].title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{recentArticles[0].author}</span>
                          <span className="mx-2">•</span>
                          <time dateTime={recentArticles[0].date}>{recentArticles[0].date}</time>
                        </div>
                        <p className="text-gray-600">{recentArticles[0].excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>

                {recentArticles.slice(1).map((article) => (
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

            {/* Match Reports Section */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold border-l-4 border-red-700 pl-3">Match Analysis</h2>
                <Link href="/matches" className="text-red-700 hover:text-red-900 font-medium inline-flex items-center">
                  View all
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Link href="/matches/east-bengal-vs-mohun-bagan-isl-derby" className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="relative h-40 w-full">
                        <Image
                          src="/images/player-with-trophy-sitting.png"
                          alt="East Bengal FC 2-1 Mohun Bagan SG: Derby Delight for Red & Gold Brigade"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          East Bengal FC 2-1 Mohun Bagan SG: Derby Delight for Red & Gold Brigade
                        </h3>
                        <div className="text-xs text-gray-500">
                          <time dateTime="2024-03-10">March 10, 2024</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/matches/east-bengal-vs-northeast-united-isl" className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="relative h-40 w-full">
                        <Image
                          src="/images/team-photo-white.png"
                          alt="East Bengal FC 3-2 NorthEast United FC: Cleiton Silva Hat-trick Seals Victory"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          East Bengal FC 3-2 NorthEast United FC: Cleiton Silva Hat-trick Seals Victory
                        </h3>
                        <div className="text-xs text-gray-500">
                          <time dateTime="2024-02-25">February 25, 2024</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/matches/east-bengal-vs-chennaiyin-isl" className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="relative h-40 w-full">
                        <Image
                          src="/images/player-with-trophy.png"
                          alt="East Bengal FC 1-0 Chennaiyin FC: Nandhakumar's Strike Secures Three Points"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          East Bengal FC 1-0 Chennaiyin FC: Nandhakumar's Strike Secures Three Points
                        </h3>
                        <div className="text-xs text-gray-500">
                          <time dateTime="2024-02-10">February 10, 2024</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/matches/east-bengal-vs-fc-goa-isl" className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="relative h-40 w-full">
                        <Image
                          src="/images/press-conference.png"
                          alt="East Bengal FC 2-2 FC Goa: Thrilling Draw at Salt Lake Stadium"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          East Bengal FC 2-2 FC Goa: Thrilling Draw at Salt Lake Stadium
                        </h3>
                        <div className="text-xs text-gray-500">
                          <time dateTime="2024-01-28">January 28, 2024</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fan Corner Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold border-l-4 border-red-700 pl-3">Fan Corner</h2>
                <Link href="/stories" className="text-red-700 hover:text-red-900 font-medium inline-flex items-center">
                  View all
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Link href="/stories/east-bengal-fan-journey" className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      {/* Update the Fan Corner section images */}
                      <div className="relative h-40 w-full">
                        <Image
                          src="/images/match-action.png"
                          alt="From Kolkata to Kerala: My Journey as an East Bengal Fan"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          From Kolkata to Kerala: My Journey as an East Bengal Fan
                        </h3>
                        <div className="text-xs text-gray-500">
                          <time dateTime="2024-04-15">April 15, 2024</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/stories/derby-day-experience" className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="relative h-40 w-full">
                        <Image
                          src="/images/player-with-trophy.png"
                          alt="Derby Day: The Ultimate Matchday Experience"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          Derby Day: The Ultimate Matchday Experience
                        </h3>
                        <div className="text-xs text-gray-500">
                          <time dateTime="2024-03-15">March 15, 2024</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/stories/east-bengal-ultras" className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="relative h-40 w-full">
                        <Image
                          src="/images/team-photo-white.png"
                          alt="Red & Gold Brigade: The Heartbeat of East Bengal FC"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          Red & Gold Brigade: The Heartbeat of East Bengal FC
                        </h3>
                        <div className="text-xs text-gray-500">
                          <time dateTime="2024-02-20">February 20, 2024</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/stories/east-bengal-away-days" className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                      <div className="relative h-40 w-full">
                        <Image
                          src="/images/press-conference.png"
                          alt="Away Days: Following East Bengal FC Across India"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
                          Away Days: Following East Bengal FC Across India
                        </h3>
                        <div className="text-xs text-gray-500">
                          <time dateTime="2024-01-15">January 15, 2024</time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Social Media Stats */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">Connect With Us</h3>
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
              <h3 className="text-lg font-bold mb-4 border-b pb-2">Trending Articles</h3>
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

            {/* Next Match */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">Next Match</h3>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-3">Calcutta Football League 2024</div>
                <div className="flex items-center justify-center mb-4">
                  <div className="text-center">
                    {/* Update the Next Match section */}
                    <div className="relative h-16 w-16 mx-auto mb-2">
                      <Image src="/images/team-photo-field.png" alt="East Bengal FC" fill className="object-contain" />
                    </div>
                    <div className="font-bold">East Bengal FC</div>
                  </div>
                  <div className="mx-4 text-xl font-bold">vs</div>
                  <div className="text-center">
                    <div className="relative h-16 w-16 mx-auto mb-2">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Mohammedan SC"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="font-bold">Mohammedan SC</div>
                  </div>
                </div>
                <div className="text-sm mb-1">July 15, 2024 • 7:00 PM</div>
                <div className="text-sm mb-4">Kishore Bharati Krirangan, Kolkata</div>
                <Link
                  href="/matches/upcoming/east-bengal-vs-mohammedan"
                  className="inline-block bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Match Preview
                </Link>
              </div>
            </div>

            {/* Subscribe Box */}
            <div className="bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-2">Join the Red & Gold Army</h3>
              <p className="mb-4">Get exclusive content and connect with fellow East Bengal supporters</p>
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

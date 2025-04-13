import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Trophy Cabinet | EBBU - East Bengal Bangal United",
  description:
    "Explore East Bengal FC's impressive collection of silverware won throughout its history. From domestic league titles to international honors, discover the club's rich legacy of success.",
  keywords:
    "East Bengal trophies, East Bengal achievements, East Bengal silverware, East Bengal titles, EBBU trophy cabinet",
}

// Trophy data
const trophies = [
  {
    id: "1",
    name: "Calcutta Football League",
    count: 39,
    years:
      "1942, 1945, 1946, 1949, 1950, 1952, 1961, 1966, 1970, 1971, 1972, 1973, 1974, 1975, 1977, 1982, 1985, 1987, 1988, 1989, 1991, 1993, 1995, 1996, 1998, 1999, 2000, 2002, 2003, 2004, 2006, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017",
    image: "/images/player-with-trophy.png",
    description:
      "The Calcutta Football League is one of the oldest football leagues in Asia and the world. East Bengal holds the record for the most titles in the competition's history.",
  },
  {
    id: "2",
    name: "Federation Cup",
    count: 16,
    years: "1978, 1980, 1981, 1983, 1985, 1996, 2007, 2009, 2010, 2012",
    image: "/images/player-with-trophy-sitting.png",
    description:
      "The Federation Cup was one of the premier cup competitions in Indian football. East Bengal has won it a record 16 times, showcasing their dominance in knockout tournaments.",
  },
  {
    id: "3",
    name: "IFA Shield",
    count: 29,
    years:
      "1943, 1945, 1949, 1950, 1951, 1952, 1956, 1965, 1966, 1970, 1972, 1973, 1974, 1975, 1976, 1981, 1983, 1984, 1986, 1990, 1994, 1995, 1997, 2000, 2001, 2002, 2012, 2018",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "The IFA Shield is one of the oldest football tournaments in the world, having been established in 1893. East Bengal's 29 titles in this prestigious competition highlight their historical strength.",
  },
  {
    id: "4",
    name: "Durand Cup",
    count: 16,
    years: "1951, 1952, 1956, 1960, 1967, 1970, 1972, 1978, 1982, 1989, 1990, 1991, 1993, 1995, 2002, 2004",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "The Durand Cup is the oldest football tournament in Asia and the third oldest in the world. East Bengal's success in this military-organized tournament demonstrates their ability to compete against diverse opposition.",
  },
  {
    id: "5",
    name: "National Football League/I-League",
    count: 3,
    years: "2000-01, 2002-03, 2003-04",
    image: "/images/team-photo-field.png",
    description:
      "East Bengal has won India's premier football league three times, establishing themselves as one of the country's most successful clubs in the national league format.",
  },
  {
    id: "6",
    name: "ASEAN Club Championship",
    count: 1,
    years: "2003",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "East Bengal became the first Indian club to win an international tournament in the post-independence era when they claimed the ASEAN Club Championship in 2003, defeating BEC Tero Sasana of Thailand in the final.",
  },
]

// Major achievements
const majorAchievements = [
  {
    id: "1",
    title: "First Indian club to remain unbeaten in a season (1972)",
    description:
      "East Bengal created history by becoming the first Indian club to remain unbeaten throughout a season in 1972, a remarkable achievement that showcased their dominance.",
  },
  {
    id: "2",
    title: "First Indian club to reach the semifinals of the Asian Club Championship (1985)",
    description:
      "East Bengal's run to the semifinals of the 1985 Asian Club Championship marked a significant milestone for Indian football on the continental stage.",
  },
  {
    id: "3",
    title: "First Indian club to win an international tournament post-independence (2003)",
    description:
      "By winning the ASEAN Club Championship in 2003, East Bengal became the first Indian club to claim an international trophy in the post-independence era.",
  },
  {
    id: "4",
    title: "Record 39 Calcutta Football League titles",
    description:
      "East Bengal's 39 Calcutta Football League titles represent an unmatched level of dominance in one of the world's oldest football leagues.",
  },
]

export default function TrophyCabinetPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Trophy Cabinet</h1>
        <p className="text-gray-600">Exploring East Bengal's impressive collection of silverware</p>
      </div>

      {/* Trophy Overview */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-full w-full">
              <Image
                src="/images/player-with-trophy.png"
                alt="East Bengal Trophy Celebration"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">A Legacy of Success</h2>
            <p className="text-gray-700 mb-4">
              Since its founding in 1920, East Bengal Football Club has established itself as one of the most successful
              football clubs in India. The club's trophy cabinet is a testament to its rich history and tradition of
              excellence on the field.
            </p>
            <p className="text-gray-700 mb-4">
              With over 100 major trophies, including a record 39 Calcutta Football League titles, 29 IFA Shield
              victories, and 16 Federation Cup triumphs, East Bengal's silverware collection is unmatched in Indian
              football.
            </p>
            <p className="text-gray-700">
              Beyond domestic success, East Bengal has also made its mark on the international stage, becoming the first
              Indian club to win an international tournament in the post-independence era with their ASEAN Club
              Championship victory in 2003.
            </p>
          </div>
        </div>
      </div>

      {/* Trophy List */}
      <h2 className="text-2xl font-bold mb-6">Major Trophies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {trophies.map((trophy) => (
          <div key={trophy.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={trophy.image || "/placeholder.svg"}
                alt={`${trophy.name} Trophy`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{trophy.name}</h3>
                <div className="bg-red-700 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                  {trophy.count}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{trophy.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Years Won:</h4>
                <p className="text-gray-600 text-sm">{trophy.years}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Major Achievements */}
      <h2 className="text-2xl font-bold mb-6">Major Achievements</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="p-6">
          <ul className="space-y-6">
            {majorAchievements.map((achievement) => (
              <li key={achievement.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trophy Timeline */}
      <h2 className="text-2xl font-bold mb-6">Trophy Timeline</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="p-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-700"></div>

            <div className="space-y-8">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                  <span className="text-xs">1943</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">First Major Trophy</h3>
                  <p className="text-gray-700">
                    East Bengal won their first major trophy, the IFA Shield, in 1943, defeating Mohun Bagan 1-0 in the
                    final. This victory came during a time of great hardship in Bengal, with the region suffering from a
                    devastating famine.
                  </p>
                </div>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                  <span className="text-xs">1970s</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">The Golden Era</h3>
                  <p className="text-gray-700">
                    The 1970s marked a golden era for East Bengal, with the club winning numerous trophies, including
                    six consecutive Calcutta Football League titles from 1970 to 1975. The team, coached by P.K.
                    Banerjee and featuring stars like Shyam Thapa and Subhas Bhowmick, is widely regarded as one of the
                    greatest in Indian football history.
                  </p>
                </div>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                  <span className="text-xs">2003</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">International Glory</h3>
                  <p className="text-gray-700">
                    East Bengal achieved international success in 2003 by winning the ASEAN Club Championship, becoming
                    the first Indian club to win an international tournament in the post-independence era. The team,
                    coached by Subhas Bhattacharya and led by captain Bhaichung Bhutia, defeated BEC Tero Sasana of
                    Thailand in the final.
                  </p>
                </div>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                  <span className="text-xs">2000s</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">National League Success</h3>
                  <p className="text-gray-700">
                    East Bengal enjoyed significant success in the National Football League (later renamed I-League),
                    winning the title three times in the early 2000s (2000-01, 2002-03, 2003-04). This period of
                    dominance established East Bengal as one of the premier clubs in Indian football.
                  </p>
                </div>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                  <span className="text-xs">2010s</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Continued Dominance in Calcutta</h3>
                  <p className="text-gray-700">
                    East Bengal continued their dominance in the Calcutta Football League in the 2010s, winning the
                    title for eight consecutive years from 2010 to 2017, further cementing their status as the most
                    successful club in the competition's history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="bg-red-50 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/east-bengalopedia/notable-players"
              className="bg-white rounded-md p-4 shadow hover:shadow-md transition flex items-center"
            >
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="font-medium">Notable Players</span>
            </Link>
            <Link
              href="/east-bengalopedia/why-east-bengal"
              className="bg-white rounded-md p-4 shadow hover:shadow-md transition flex items-center"
            >
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium">Club Origins</span>
            </Link>
            <Link
              href="/east-bengalopedia/historical-seasons"
              className="bg-white rounded-md p-4 shadow hover:shadow-md transition flex items-center"
            >
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-medium">Historical Seasons</span>
            </Link>
            <Link
              href="/history/derby-history"
              className="bg-white rounded-md p-4 shadow hover:shadow-md transition flex items-center"
            >
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="font-medium">Derby Classics</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Notable Players | EBBU - East Bengal Bangal United",
  description:
    "Discover the legendary players who have worn the Red and Gold with pride. From iconic strikers to defensive stalwarts, learn about the stars who have shaped East Bengal's rich history.",
  keywords: "East Bengal players, East Bengal legends, East Bengal footballers, East Bengal stars, EBBU players",
}

// Player data
const players = [
  {
    id: "1",
    name: "Bhaichung Bhutia",
    position: "Forward",
    era: "1993-1997, 2003-2006, 2009-2011",
    achievements: "Led East Bengal to the ASEAN Club Championship in 2003, multiple domestic titles",
    description:
      "Known as the 'Sikkimese Sniper', Bhaichung Bhutia is one of the most iconic figures in Indian football. His goal-scoring prowess and leadership were instrumental in East Bengal's success, particularly during their ASEAN Club Championship triumph in 2003.",
    image: "/images/player-dribbling.png",
  },
  {
    id: "2",
    name: "Subhas Bhowmick",
    position: "Forward",
    era: "1969-1975",
    achievements: "Multiple Calcutta Football League titles, IFA Shield victories",
    description:
      "A key figure in East Bengal's golden era of the 1970s, Subhas Bhowmick was known for his powerful shooting and technical ability. He later returned to the club as a successful coach, leading East Bengal to numerous trophies in the early 2000s.",
    image: "/images/player-with-trophy-sitting.png",
  },
  {
    id: "3",
    name: "Chima Okorie",
    position: "Forward",
    era: "1991-1993",
    achievements: "Top scorer in multiple seasons, helped East Bengal win several trophies",
    description:
      "The Nigerian striker was a prolific goal-scorer during his time at East Bengal, terrorizing defenses with his physical presence and finishing ability. Okorie is remembered as one of the most successful foreign players in Indian football history.",
    image: "/images/match-action.png",
  },
  {
    id: "4",
    name: "Majid Bishkar",
    position: "Midfielder",
    era: "1981-1982",
    achievements: "Helped East Bengal win the Federation Cup and Calcutta Football League",
    description:
      "The Iranian midfielder is often regarded as one of the most skillful players to have played in India. His technical ability, vision, and passing range made him a fan favorite during his brief but impactful stint at East Bengal.",
    image: "/images/team-photo-field.png",
  },
  {
    id: "5",
    name: "Sunil Chhetri",
    position: "Forward",
    era: "2008-2009",
    achievements: "Helped East Bengal reach the AFC Cup quarterfinals",
    description:
      "Before becoming India's most celebrated footballer, Sunil Chhetri had a brief but notable spell at East Bengal. His work ethic, technical ability, and goal-scoring instincts were evident even in his early career at the club.",
    image: "/images/aerial-duel.png",
  },
  {
    id: "6",
    name: "Shyam Thapa",
    position: "Forward",
    era: "1977-1979",
    achievements: "Multiple domestic titles, famous for his bicycle kicks",
    description:
      "Known as the 'Bicycle Kick King', Shyam Thapa was renowned for his acrobatic goals and technical ability. He was a key player for East Bengal in the late 1970s, helping the club maintain their status as one of India's top teams.",
    image: "/images/player-with-trophy.png",
  },
  {
    id: "7",
    name: "Manoranjan Bhattacharya",
    position: "Defender",
    era: "1977-1983",
    achievements: "Multiple domestic titles, regarded as one of India's greatest defenders",
    description:
      "A commanding center-back known for his leadership and defensive prowess, Manoranjan Bhattacharya was the backbone of East Bengal's defense for several years. His ability to read the game and organize the defense made him an invaluable asset to the team.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "8",
    name: "Baichung Bhutia",
    position: "Forward",
    era: "1993-1997, 2003-2006, 2009-2011",
    achievements: "Led East Bengal to the ASEAN Club Championship in 2003, multiple domestic titles",
    description:
      "Known as the 'Sikkimese Sniper', Baichung Bhutia is one of the most iconic figures in Indian football. His goal-scoring prowess and leadership were instrumental in East Bengal's success, particularly during their ASEAN Club Championship triumph in 2003.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

// Era data
const eras = [
  {
    id: "1",
    title: "The Founding Years (1920-1940)",
    description:
      "The early decades saw East Bengal establish itself as a competitive force in Calcutta football, laying the foundation for future success.",
    key_players: ["Byomkesh Bose", "Santosh Nandy", "Dasu Roy"],
  },
  {
    id: "2",
    title: "The First Golden Era (1940s-1950s)",
    description:
      "East Bengal won their first major trophy, the IFA Shield, in 1943, and went on to dominate Indian football in the post-independence era.",
    key_players: ["Ahmed Khan", "P.B.A. Saleh", "Appa Rao"],
  },
  {
    id: "3",
    title: "The Legendary 1970s",
    description:
      "The 1970s marked a golden era for East Bengal, with the club winning numerous trophies, including six consecutive Calcutta Football League titles from 1970 to 1975.",
    key_players: ["Subhas Bhowmick", "Shyam Thapa", "Surajit Sengupta"],
  },
  {
    id: "4",
    title: "The International Era (2000s)",
    description:
      "East Bengal achieved international success in the early 2000s, winning the ASEAN Club Championship and establishing themselves as one of Asia's competitive clubs.",
    key_players: ["Bhaichung Bhutia", "Alvito D'Cunha", "Mahesh Gawli"],
  },
]

export default function NotablePlayersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Notable Players</h1>
        <p className="text-gray-600">The legends who have worn the Red and Gold with pride</p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-full w-full">
              <Image src="/images/team-photo-field.png" alt="East Bengal Team" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">A Legacy of Excellence</h2>
            <p className="text-gray-700 mb-4">
              Throughout its rich history, East Bengal Football Club has been home to some of the finest footballers in
              India and beyond. From the early pioneers who established the club's reputation to the modern stars who
              continue to uphold its legacy, these players have left an indelible mark on the Red and Gold Brigade.
            </p>
            <p className="text-gray-700 mb-4">
              East Bengal's ability to attract and nurture talent has been a key factor in its sustained success over
              the decades. The club has been represented by legendary Indian footballers, as well as notable foreign
              players who have embraced the club's culture and contributed to its storied history.
            </p>
            <p className="text-gray-700">
              This page celebrates the iconic figures who have donned the famous Red and Gold jersey, showcasing their
              achievements, contributions, and the lasting impact they have had on East Bengal Football Club.
            </p>
          </div>
        </div>
      </div>

      {/* Player Cards */}
      <h2 className="text-2xl font-bold mb-6">Legendary Players</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {players.map((player) => (
          <div key={player.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="relative h-64 w-full">
              <Image src={player.image || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{player.name}</h3>
              <div className="flex items-center mb-4">
                <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full mr-2">
                  {player.position}
                </span>
                <span className="text-gray-500 text-sm">{player.era}</span>
              </div>
              <p className="text-gray-700 mb-4">{player.description}</p>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-semibold mb-1">Key Achievements:</h4>
                <p className="text-gray-600 text-sm">{player.achievements}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Eras */}
      <h2 className="text-2xl font-bold mb-6">Notable Eras</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="p-6">
          <div className="space-y-8">
            {eras.map((era) => (
              <div key={era.id} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold mb-3">{era.title}</h3>
                <p className="text-gray-700 mb-4">{era.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Players:</h4>
                  <div className="flex flex-wrap gap-2">
                    {era.key_players.map((player, index) => (
                      <span key={index} className="bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full">
                        {player}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foreign Legends */}
      <h2 className="text-2xl font-bold mb-6">Foreign Legends</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="p-6">
          <p className="text-gray-700 mb-6">
            East Bengal has a rich tradition of recruiting talented foreign players who have made significant
            contributions to the club's success. These international stars have not only enhanced the quality of the
            team but have also helped raise the profile of Indian football on the global stage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-3">Chima Okorie (Nigeria)</h3>
              <p className="text-gray-700 mb-2">
                The Nigerian striker was a prolific goal-scorer during his time at East Bengal, terrorizing defenses
                with his physical presence and finishing ability. Okorie is remembered as one of the most successful
                foreign players in Indian football history.
              </p>
              <span className="text-sm text-gray-500">Era: 1991-1993</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-3">Majid Bishkar (Iran)</h3>
              <p className="text-gray-700 mb-2">
                The Iranian midfielder is often regarded as one of the most skillful players to have played in India.
                His technical ability, vision, and passing range made him a fan favorite during his brief but impactful
                stint at East Bengal.
              </p>
              <span className="text-sm text-gray-500">Era: 1981-1982</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-3">Douglas da Silva (Brazil)</h3>
              <p className="text-gray-700 mb-2">
                The Brazilian defender was a commanding presence at the back for East Bengal. His leadership, aerial
                ability, and reading of the game made him one of the most respected foreign players in Indian football.
              </p>
              <span className="text-sm text-gray-500">Era: 2009-2012</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-3">Edmilson Marques (Brazil)</h3>
              <p className="text-gray-700 mb-2">
                The Brazilian forward formed a lethal partnership with Bhaichung Bhutia during East Bengal's successful
                campaigns in the early 2000s. His technical ability and goal-scoring instincts were key to the club's
                domestic and international success.
              </p>
              <span className="text-sm text-gray-500">Era: 2002-2004</span>
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
              href="/east-bengalopedia/trophy-cabinet"
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <span className="font-medium">Trophy Cabinet</span>
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
              href="/history/legends"
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <span className="font-medium">Hall of Fame</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

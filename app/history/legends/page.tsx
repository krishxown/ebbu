import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Star, Award, Calendar } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Hall of Fame | EBBU - East Bengal Bangal United",
  description:
    "Celebrate the greatest players to have worn the Red and Gold jersey. East Bengal FC's Hall of Fame honors the legends who have made an indelible mark on the club's history.",
  keywords: "East Bengal legends, East Bengal Hall of Fame, East Bengal greatest players, East Bengal icons",
}

// Hall of Fame data
const legends = [
  {
    name: "Bhaichung Bhutia",
    nickname: "The Sikkimese Sniper",
    position: "Forward",
    era: "1993-1997, 2003-2006, 2009-2011",
    achievements: [
      "Over 100 goals for East Bengal",
      "ASEAN Club Championship winner",
      "Multiple National Football League titles",
      "Federation Cup winner",
    ],
    bio: "Widely regarded as one of India's greatest footballers, Bhaichung Bhutia had three separate spells with East Bengal, becoming a club icon. His goalscoring prowess, leadership, and loyalty to the club have made him a beloved figure among the Red and Gold faithful.",
    image: "/images/player-dribbling.png",
  },
  {
    name: "Subhas Bhowmick",
    nickname: "Bhombol",
    position: "Forward",
    era: "1969-1975",
    achievements: [
      "83 goals for East Bengal",
      "Part of the 1970-71 invincible team",
      "Multiple Calcutta Football League titles",
      "IFA Shield and Durand Cup winner",
    ],
    bio: "A prolific goalscorer and powerful forward, Subhas Bhowmick was a key figure in East Bengal's dominant teams of the early 1970s. He later coached East Bengal to the historic ASEAN Club Championship victory in 2003, cementing his legacy as both a player and manager.",
    image: "/images/player-with-trophy-sitting.png",
  },
  {
    name: "Ahmed Khan",
    nickname: "The Wizard",
    position: "Forward",
    era: "1949-1959",
    achievements: [
      "Part of the famous 'Five Pandavas' forward line",
      "Multiple IFA Shield titles",
      "Calcutta Football League champion",
      "Revolutionized East Bengal's playing style",
    ],
    bio: "Ahmed Khan was the creative genius behind East Bengal's famous 'Five Pandavas' forward line of the 1950s. His technical skills, vision, and playmaking abilities were ahead of his time, and he played a crucial role in establishing East Bengal as a major force in Indian football.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Majid Bishkar",
    nickname: "The Iranian Magician",
    position: "Midfielder",
    era: "1981-1982",
    achievements: [
      "IFA Shield winner",
      "Calcutta Football League champion",
      "Transformed East Bengal's playing style",
      "Cult hero status despite short stint",
    ],
    bio: "Despite his brief spell at East Bengal, Majid Bishkar left an indelible mark on the club and Indian football. The Iranian midfielder's exceptional technical skills, creativity, and flair made him a fan favorite, and he is widely regarded as one of the greatest foreign players to have played in India.",
    image: "/images/match-action.png",
  },
  {
    name: "Chuni Goswami",
    nickname: "The Golden Boy",
    position: "Forward",
    era: "1963-1964",
    achievements: [
      "India captain",
      "IFA Shield winner with East Bengal",
      "Calcutta Football League champion",
      "Versatile athlete who also played cricket for Bengal",
    ],
    bio: "Though his time at East Bengal was brief, Chuni Goswami's impact was significant. One of India's most complete footballers, he combined technical skill with physical prowess and leadership. His elegant playing style and sportsmanship made him a respected figure across club rivalries.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Krishanu Dey",
    nickname: "The Indian Maradona",
    position: "Forward",
    era: "1985-1990",
    achievements: [
      "Multiple Calcutta Football League titles",
      "IFA Shield and Durand Cup winner",
      "Known for his exceptional dribbling skills",
      "Represented India in international competitions",
    ],
    bio: "Nicknamed 'The Indian Maradona' for his dribbling skills and creativity, Krishanu Dey was one of the most technically gifted players to wear the Red and Gold jersey. His ability to beat defenders and create scoring opportunities made him a key player for East Bengal in the late 1980s.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Alvito D'Cunha",
    nickname: "The Goan Maestro",
    position: "Midfielder",
    era: "2001-2012",
    achievements: [
      "ASEAN Club Championship winner",
      "Multiple National Football League/I-League titles",
      "Federation Cup winner",
      "Over a decade of service to the club",
    ],
    bio: "Alvito D'Cunha's loyalty and consistency made him an East Bengal icon in the 2000s. The skillful midfielder was known for his precise passing, set-piece expertise, and ability to score crucial goals. His leadership on and off the field helped East Bengal achieve success in national and international competitions.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sunil Chhetri",
    nickname: "Captain Fantastic",
    position: "Forward",
    era: "2008-2009",
    achievements: [
      "Federation Cup winner",
      "Scored crucial goals during his stint",
      "Later became India's most capped player and highest goalscorer",
      "Respected figure in Indian football",
    ],
    bio: "Though his time at East Bengal was relatively short, Sunil Chhetri showed glimpses of the quality that would later make him India's greatest modern footballer. His work ethic, professionalism, and goalscoring ability made him a valuable player for the Red and Gold Brigade.",
    image: "/images/aerial-duel.png",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "Bhaichung Bhutia: The Sikkimese Sniper",
    slug: "bhaichung-bhutia-sikkimese-sniper",
    category: "player-profile",
  },
  {
    id: "2",
    title: "The Five Pandavas: East Bengal's Legendary Forward Line",
    slug: "five-pandavas-forward-line",
    category: "history",
  },
  {
    id: "3",
    title: "Majid Bishkar: The Iranian Magician",
    slug: "majid-bishkar-iranian-magician",
    category: "player-profile",
  },
  {
    id: "4",
    title: "Subhas Bhowmick: Player and Coach",
    slug: "subhas-bhowmick-player-coach",
    category: "player-profile",
  },
]

export default function LegendsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/history" className="text-red-700 hover:text-red-900 inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to History
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/images/team-photo-field.png" alt="East Bengal FC Legends" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">Hall of Fame</h1>
                <p className="text-lg">Celebrating East Bengal's Greatest Legends</p>
              </div>
            </div>

            <div className="p-6">
              <div className="prose max-w-none mb-8">
                <p>
                  East Bengal FC's Hall of Fame honors the players who have made exceptional contributions to the club's
                  rich history. These legends have not only achieved success on the field but have also embodied the
                  values, spirit, and identity of East Bengal, leaving an indelible mark on the club and its supporters.
                </p>
                <p>
                  From the pioneering figures of the early years to the modern icons, these players represent the very
                  best of East Bengal FC across different eras. Their skill, dedication, leadership, and passion have
                  made them immortal in the hearts of the Red and Gold faithful.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Hall of Fame Selection Criteria
                </h3>
                <p className="text-red-700 mb-4">
                  Players are inducted into East Bengal's Hall of Fame based on the following criteria:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li>
                    <strong>Exceptional Contribution:</strong> Players who have made a significant impact on the club's
                    success and history
                  </li>
                  <li>
                    <strong>Longevity:</strong> Typically, a minimum of 5 years of service to the club (with exceptions
                    for extraordinary impact)
                  </li>
                  <li>
                    <strong>Leadership:</strong> Demonstration of leadership qualities on and off the field
                  </li>
                  <li>
                    <strong>Legacy:</strong> Lasting impact on the club's identity and supporters' memories
                  </li>
                  <li>
                    <strong>Character:</strong> Embodiment of the club's values and spirit
                  </li>
                </ul>
              </div>

              <div className="space-y-12">
                {legends.map((legend) => (
                  <div key={legend.name} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="md:flex">
                      <div className="relative h-80 md:h-auto md:w-1/3 flex-shrink-0">
                        <Image
                          src={legend.image || "/placeholder.svg"}
                          alt={legend.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                          <h2 className="text-2xl font-bold">{legend.name}</h2>
                          <div className="text-sm text-gray-500 flex items-center mt-1 md:mt-0">
                            <Calendar className="h-4 w-4 mr-1" />
                            {legend.era}
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="inline-block bg-red-700 text-white text-sm px-3 py-1 rounded-full">
                            {legend.nickname}
                          </span>
                          <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full ml-2">
                            {legend.position}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{legend.bio}</p>
                        <div>
                          <h3 className="text-lg font-bold mb-2 flex items-center">
                            <Star className="h-5 w-5 text-yellow-500 mr-2" />
                            Key Achievements
                          </h3>
                          <ul className="list-disc pl-6 space-y-1 text-gray-600">
                            {legend.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/east-bengalopedia/notable-players"
                  className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium transition"
                >
                  Explore More Notable Players
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Sidebar popularArticles={popularArticles} />
        </div>
      </div>
    </div>
  )
}

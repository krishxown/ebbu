import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Camera, Video } from "lucide-react"
import Sidebar from "@/components/layout/sidebar"
import TagFilter from "@/components/ui/tag-filter"

export const metadata: Metadata = {
  title: "Gallery | EBBU - East Bengal Bangal United",
  description: "Browse photos and videos from East Bengal FC matches, training sessions, and events.",
  keywords: "East Bengal gallery, East Bengal photos, East Bengal videos, East Bengal images",
}

const galleryTags = ["All", "Photos", "Videos", "Matches", "Training", "Events", "Fans"]

// Gallery items data
const galleryItems = [
  {
    id: "1",
    type: "photo",
    title: "East Bengal FC vs Mohun Bagan SG - Derby Day",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 10, 2024",
    category: "Matches",
    link: "/gallery/photos/east-bengal-vs-mohun-bagan-derby",
  },
  {
    id: "2",
    type: "photo",
    title: "Pre-Season Training Session",
    image: "/placeholder.svg?height=300&width=500",
    date: "July 5, 2024",
    category: "Training",
    link: "/gallery/photos/pre-season-training",
  },
  {
    id: "3",
    type: "video",
    title: "East Bengal FC 2023-24 Season Highlights",
    image: "/placeholder.svg?height=300&width=500",
    date: "May 15, 2024",
    category: "Matches",
    link: "/gallery/videos/season-highlights-2023-24",
  },
  {
    id: "4",
    type: "photo",
    title: "New Kit Launch Event",
    image: "/placeholder.svg?height=300&width=500",
    date: "June 20, 2024",
    category: "Events",
    link: "/gallery/photos/new-kit-launch",
  },
  {
    id: "5",
    type: "video",
    title: "Player Interviews - Pre-Season",
    image: "/placeholder.svg?height=300&width=500",
    date: "July 10, 2024",
    category: "Training",
    link: "/gallery/videos/player-interviews-pre-season",
  },
  {
    id: "6",
    type: "photo",
    title: "Fan Celebrations - Derby Victory",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 10, 2024",
    category: "Fans",
    link: "/gallery/photos/fan-celebrations-derby",
  },
  {
    id: "7",
    type: "photo",
    title: "East Bengal FC vs NorthEast United FC",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 25, 2024",
    category: "Matches",
    link: "/gallery/photos/east-bengal-vs-northeast-united",
  },
  {
    id: "8",
    type: "video",
    title: "Behind the Scenes - Training Ground",
    image: "/placeholder.svg?height=300&width=500",
    date: "July 15, 2024",
    category: "Training",
    link: "/gallery/videos/behind-scenes-training",
  },
  {
    id: "9",
    type: "photo",
    title: "Fan Zone - Match Day Atmosphere",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 10, 2024",
    category: "Fans",
    link: "/gallery/photos/fan-zone-match-day",
  },
]

const popularArticles = [
  {
    id: "1",
    title: "East Bengal FC's Journey in the ISL 2023-24 Season",
    slug: "east-bengal-journey-isl-2023-24",
    category: "analysis",
  },
  {
    id: "2",
    title: "Derby Day: The Complete Fan Guide",
    slug: "derby-day-fan-guide",
    category: "stories",
  },
  {
    id: "3",
    title: "East Bengal FC's New Home Kit for 2024-25 Season",
    slug: "east-bengal-new-home-kit-2024-25",
    category: "news",
  },
  {
    id: "4",
    title: "The Red and Gold Family: How Football Brings Us Together",
    slug: "red-gold-family-brings-together",
    category: "stories",
  },
]

export default function GalleryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : null

  // Filter gallery items based on the tag
  let filteredItems = galleryItems

  if (tag) {
    if (tag === "Photos") {
      filteredItems = galleryItems.filter((item) => item.type === "photo")
    } else if (tag === "Videos") {
      filteredItems = galleryItems.filter((item) => item.type === "video")
    } else if (["Matches", "Training", "Events", "Fans"].includes(tag)) {
      filteredItems = galleryItems.filter((item) => item.category === tag)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gallery</h1>
        <p className="text-gray-600">Browse photos and videos from East Bengal FC</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TagFilter tags={galleryTags} basePath="/gallery" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <Link key={item.id} href={item.link} className="block group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full">
                  <div className="relative h-48 w-full">
                    <Image
                      src={
                        item.id === "1"
                          ? "/images/team-lineup.png"
                          : item.id === "2"
                            ? "/images/match-action.png"
                            : item.id === "3"
                              ? "/images/player-with-trophy.png"
                              : item.id === "4"
                                ? "/images/player-dribbling.png"
                                : item.id === "5"
                                  ? "/images/press-conference.png"
                                  : item.id === "6"
                                    ? "/images/aerial-duel.png"
                                    : item.id === "7"
                                      ? "/images/player-with-trophy-sitting.png"
                                      : item.id === "8"
                                        ? "/images/team-photo-field.png"
                                        : item.image || "/placeholder.svg"
                      }
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white p-1 rounded-full">
                      {item.type === "photo" ? <Camera className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold mb-1 group-hover:text-red-700 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{item.category}</span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Sidebar popularArticles={popularArticles} />
        </div>
      </div>
    </div>
  )
}

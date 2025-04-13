import type { Metadata } from "next"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Social Wall | EBBU - East Bengal Bangal United",
  description:
    "Stay connected with East Bengal FC through our social media channels. Follow us for the latest updates, fan interactions, and more.",
  keywords:
    "East Bengal social media, EBBU social channels, East Bengal FC Twitter, East Bengal FC Instagram, East Bengal FC Facebook",
}

export default function SocialWallPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">EBBU Social Wall</h1>

      <div className="mb-8">
        <p className="text-gray-600 mb-4">
          Connect with us on our social media channels to stay updated with the latest news, match updates, and fan
          interactions. Join our growing community of passionate East Bengal supporters!
        </p>

        <div className="bg-red-50 p-4 rounded-md border border-red-100 mb-6">
          <p className="text-red-800 font-medium">
            Follow us on all platforms and tag us in your East Bengal FC related posts using #EBBU or
            #EastBengalBangalUnited
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Facebook */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 p-4 flex items-center">
            <Facebook className="h-8 w-8 text-white mr-3" />
            <h2 className="text-xl font-bold text-white">Facebook</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Like and follow our Facebook page for match updates, news, and fan interactions.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61563127798892"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium inline-block transition"
            >
              Follow on Facebook
            </a>
          </div>
        </div>

        {/* Twitter/X */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-black p-4 flex items-center">
            <Twitter className="h-8 w-8 text-white mr-3" />
            <h2 className="text-xl font-bold text-white">Twitter/X</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Follow us on Twitter for live match updates, breaking news, and fan reactions.
            </p>
            <a
              href="https://x.com/ebbu1920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium inline-block transition"
            >
              Follow on Twitter/X
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 p-4 flex items-center">
            <Instagram className="h-8 w-8 text-white mr-3" />
            <h2 className="text-xl font-bold text-white">Instagram</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Follow our Instagram for exclusive photos, videos, and behind-the-scenes content.
            </p>
            <a
              href="https://www.instagram.com/ebbu.1920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 text-white px-4 py-2 rounded-md font-medium inline-block transition"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* YouTube */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-red-600 p-4 flex items-center">
            <Youtube className="h-8 w-8 text-white mr-3" />
            <h2 className="text-xl font-bold text-white">YouTube</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Subscribe to our YouTube channel for match highlights, interviews, and fan videos.
            </p>
            <a
              href="https://www.youtube.com/@ebbu-eastbengalbangalunited"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium inline-block transition"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>

        {/* Medium */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-black p-4 flex items-center">
            <FileText className="h-8 w-8 text-white mr-3" />
            <h2 className="text-xl font-bold text-white">Medium</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Read our in-depth articles, match analyses, and opinion pieces on Medium.
            </p>
            <a
              href="https://medium.com/@ebbu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium inline-block transition"
            >
              Follow on Medium
            </a>
          </div>
        </div>

        {/* Linktree */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 p-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8.92,2.44a1.06,1.06,0,0,0-1.86,0L.1,15.07A1,1,0,0,0,1,16.44h4.7v4.78a.9.9,0,0,0,.89.89H9.33a.91.91,0,0,0,.89-.89V16.44H8.92ZM15.08,2.44a1.06,1.06,0,0,1,1.86,0l7,12.63A1,1,0,0,1,23,16.44H18.39v4.78a.9.9,0,0,1-.89.89H14.67a.91.91,0,0,1-.89-.89V16.44h1.3Z" />
            </svg>
            <h2 className="text-xl font-bold text-white">Linktree</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">Access all our social media links in one place through our Linktree.</p>
            <a
              href="https://linktr.ee/ebbu1920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium inline-block transition"
            >
              Visit our Linktree
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Latest Social Media Posts</h2>
          <p className="text-gray-600 mb-6">
            We're working on embedding our latest social media posts here. Check back soon for updates!
          </p>
          <div className="flex justify-center">
            <Link
              href="https://linktr.ee/ebbu1920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium transition"
            >
              View All Social Profiles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      {/* Top Footer */}
      <div className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 sm:col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 mr-2">
                  <Image src="/placeholder.svg?height=40&width=40" alt="EBBU Logo" fill className="object-contain" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">EBBU.in</h3>
              </div>
              <p className="text-gray-400 mb-4">Home of the Red & Gold Faithful</p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Telegram</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link href="/news" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/matches" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    Match Reports
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href="/history" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/east-bengalopedia"
                    className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                  >
                    East Bengalopedia
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">About</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-2 md:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Get the latest news and updates</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
                <button type="submit" className="bg-red-700 hover:bg-red-600 px-3 sm:px-4 py-2 rounded-r-md transition">
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-gray-400 py-3 sm:py-4">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} East Bengal Bangal United (EBBU). All rights reserved.</p>
          <p className="mt-1">This is an unofficial fan website. Not affiliated with East Bengal Football Club.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, Send } from "lucide-react"

interface SidebarProps {
  popularArticles?: Array<{
    id: string
    title: string
    slug: string
    category: "news" | "matches" | "stories" | "history"
  }>
}

export default function Sidebar({ popularArticles }: SidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Social Links */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-bold mb-4 border-b pb-2">Follow Us</h3>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Popular Articles */}
      {popularArticles && popularArticles.length > 0 && (
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-bold mb-4 border-b pb-2">Most Popular</h3>
          <ul className="space-y-4">
            {popularArticles.map((article) => (
              <li key={article.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <Link
                  href={`/${article.category}/${article.slug}`}
                  className="hover:text-red-700 transition font-medium"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Fan Zone CTA */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white rounded-lg shadow p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Join the Fan Zone</h3>
        <p className="mb-4">Connect with fellow supporters and get exclusive content</p>
        <Link
          href="/login"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-red-900 px-6 py-2 rounded-md font-medium transition"
        >
          Sign Up Now
        </Link>
      </div>
    </aside>
  )
}

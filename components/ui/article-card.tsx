import Link from "next/link"
import Image from "next/image"

interface ArticleCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: "news" | "matches" | "stories" | "history"
  slug: string
  tags?: string[]
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
  slug,
  tags,
}: ArticleCardProps) {
  return (
    <Link href={`/${category}/${slug}`} className="block group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full">
        <div className="relative h-40 sm:h-48 w-full">
          <Image src={image || "/placeholder.svg?height=200&width=400"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-xs text-gray-500 mb-1 sm:mb-2">
            <time dateTime={date}>{date}</time>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3">{excerpt}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}

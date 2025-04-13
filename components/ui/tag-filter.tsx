"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { X } from "lucide-react"

interface TagFilterProps {
  tags: string[]
  basePath: string
}

export default function TagFilter({ tags, basePath }: TagFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  useEffect(() => {
    const tag = searchParams.get("tag")
    setSelectedTag(tag)
  }, [searchParams])

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      // If already selected, clear the filter
      router.push(basePath)
    } else {
      // Otherwise, apply the filter
      router.push(`${basePath}?tag=${tag}`)
    }
  }

  const clearFilter = () => {
    router.push(basePath)
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Filter by Tag:</h3>
        {selectedTag && (
          <button onClick={clearFilter} className="text-sm text-red-700 hover:text-red-900 flex items-center">
            Clear filter
            <X className="h-4 w-4 ml-1" />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === tag ? "bg-red-700 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronDown, Menu, X } from "lucide-react"

// Define the dropdown menu structure
const menuItems = [
  {
    title: "News",
    path: "/news",
    submenu: [
      { title: "Latest News", path: "/news" },
      { title: "Transfer News", path: "/news?tag=Transfer" },
      { title: "Team News", path: "/news?tag=Team+News" },
      { title: "Press Conference", path: "/news?tag=Press+Conference" },
    ],
  },
  {
    title: "Match Reports",
    path: "/matches",
    submenu: [
      { title: "All Matches", path: "/matches" },
      { title: "ISL", path: "/matches?tag=ISL" },
      { title: "Durand Cup", path: "/matches?tag=Durand+Cup" },
      { title: "Super Cup", path: "/matches?tag=Super+Cup" },
    ],
  },
  {
    title: "EBBU Specials",
    path: "/stories",
    submenu: [
      { title: "Fan Stories", path: "/stories" },
      { title: "Matchday Experience", path: "/stories?tag=Matchday+Experience" },
      { title: "Opinion", path: "/stories?tag=Opinion" },
      { title: "Fan Culture", path: "/stories?tag=Fan+Culture" },
    ],
  },
  {
    title: "East Bengalopedia",
    path: "/east-bengalopedia",
    submenu: [
      { title: "Why East Bengal?", path: "/east-bengalopedia/why-east-bengal" },
      { title: "Trophy Cabinet", path: "/east-bengalopedia/trophy-cabinet" },
      { title: "Notable Players", path: "/east-bengalopedia/notable-players" },
      { title: "Historical Seasons", path: "/east-bengalopedia/historical-seasons" },
    ],
  },
  {
    title: "History",
    path: "/history",
    submenu: [
      { title: "Timeline", path: "/history" },
      { title: "Legends", path: "/history/legends" },
      { title: "Glory Years", path: "/history/glory-years" },
      { title: "Derby History", path: "/history/derby-history" },
    ],
  },
]

// Dropdown menu component
const DropdownMenu = ({ items, isOpen, setActiveMenu, menuTitle }) => {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-0 w-48 bg-white shadow-md rounded-b-md py-2 z-50">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="block px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
          onClick={() => setActiveMenu(null)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const menuRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-700 to-yellow-500"></div>

      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-0">
            {/* Logo - Left side */}
            <Link href="/" className="flex items-center space-x-2 py-3">
              <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                <Image src="/placeholder.svg?height=40&width=40" alt="EBBU Logo" fill className="object-contain" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-red-700">EBBU.in</span>
            </Link>

            {/* Center Navigation for medium and up screens */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-4" ref={menuRef}>
              <div className="flex items-center space-x-1">
                <Link href="/" className="px-3 py-4 hover:text-red-700 font-medium">
                  Home
                </Link>

                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    <button
                      className={`flex items-center px-3 py-4 hover:text-red-700 font-medium ${
                        activeMenu === index ? "text-red-700" : ""
                      }`}
                      onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                    <DropdownMenu
                      items={item.submenu}
                      isOpen={activeMenu === index}
                      setActiveMenu={setActiveMenu}
                      menuTitle={item.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Search and Login */}
            <div className="flex items-center py-3">
              <button aria-label="Search" className="px-3 py-2 hover:text-red-700 hidden md:block">
                <Search className="h-5 w-5" />
              </button>

              <Link
                href="/login"
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md font-medium transition ml-2 hidden md:block"
              >
                Login
              </Link>

              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white shadow-md fixed top-[53px] left-0 right-0 h-[calc(100vh-53px)] overflow-y-auto z-50">
          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className="text-lg font-medium hover:text-red-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {menuItems.map((item, index) => (
              <div key={index} className="space-y-3">
                <Link
                  href={item.path}
                  className="text-lg font-medium hover:text-red-700 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
                <div className="pl-4 space-y-3 border-l-2 border-gray-200">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.path}
                      className="block text-base text-gray-600 hover:text-red-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4 flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Link
                href="/login"
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded-md font-medium transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

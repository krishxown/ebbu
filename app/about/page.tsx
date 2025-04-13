import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | EBBU - East Bengal Bangal United",
  description:
    "Learn about EBBU (East Bengal Bangal United), the ultimate fan website for East Bengal Football Club supporters. Our mission, team, and the story behind the site.",
  keywords: "About EBBU, East Bengal fan site, EBBU team, East Bengal supporters, fan website",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About EBBU</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-64 w-full">
            <Image src="/placeholder.svg?height=300&width=800" alt="EBBU Team" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              East Bengal Bangal United (EBBU) was founded in 2020 by a group of passionate East Bengal supporters who
              wanted to create a dedicated online space for fans to connect, share, and celebrate their love for the Red
              and Gold Brigade.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small blog has grown into a comprehensive fan website with thousands of monthly visitors
              from across India and around the world. Our team has expanded to include writers, photographers,
              historians, and technical experts, all united by their passion for East Bengal FC.
            </p>
            <p className="text-gray-600">
              EBBU is run entirely by volunteers who dedicate their time and expertise to providing quality content for
              fellow supporters. We are not officially affiliated with East Bengal Football Club, but we maintain a
              respectful relationship with the club and its official channels.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">At EBBU, our mission is to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Provide comprehensive, accurate, and timely coverage of East Bengal FC</li>
              <li>Preserve and celebrate the rich history and traditions of the club</li>
              <li>Create a welcoming community for supporters to connect and share their passion</li>
              <li>Offer a platform for fan voices and perspectives</li>
              <li>Promote positive fan culture and responsible support</li>
            </ul>
            <p className="text-gray-600">
              We believe in the power of football to unite people across different backgrounds, and we strive to reflect
              the diverse community of East Bengal supporters in our content and approach.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Rahul Sharma" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">Rahul Sharma</h3>
                  <p className="text-sm text-gray-500 mb-2">Founder & Editor-in-Chief</p>
                  <p className="text-sm text-gray-600">
                    A lifelong East Bengal supporter with a background in sports journalism.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Priya Banerjee" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">Priya Banerjee</h3>
                  <p className="text-sm text-gray-500 mb-2">Content Director</p>
                  <p className="text-sm text-gray-600">Manages our editorial calendar and leads our team of writers.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Amit Das" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">Amit Das</h3>
                  <p className="text-sm text-gray-500 mb-2">Technical Lead</p>
                  <p className="text-sm text-gray-600">
                    Oversees the website development and technical infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Sunil Chhetri" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">Sunil Chhetri</h3>
                  <p className="text-sm text-gray-500 mb-2">Match Analyst</p>
                  <p className="text-sm text-gray-600">Provides tactical analysis and match reports.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Plus many more contributors and volunteers who help make EBBU possible!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-gray-600 mb-4">
              EBBU is always looking for passionate supporters to join our team. Whether you're a writer, photographer,
              designer, developer, or just someone with great ideas and enthusiasm, we'd love to hear from you.
            </p>
            <p className="text-gray-600 mb-6">
              If you're interested in contributing to EBBU, please get in touch via our contact page with details about
              yourself and how you'd like to be involved.
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

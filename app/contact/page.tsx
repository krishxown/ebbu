import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | EBBU - East Bengal Bangal United",
  description:
    "Get in touch with the EBBU team. Send us your feedback, suggestions, or inquiries about East Bengal FC and our fan website.",
  keywords: "Contact EBBU, East Bengal fan contact, feedback, suggestions, EBBU team",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Have a question, suggestion, or feedback? We'd love to hear from you! Fill out the form below and our team
              will get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">
                  For general inquiries:{" "}
                  <a href="mailto:info@ebbu.in" className="text-red-700 hover:text-red-900">
                    info@ebbu.in
                  </a>
                </p>
                <p className="text-gray-600">
                  For content submissions:{" "}
                  <a href="mailto:content@ebbu.in" className="text-red-700 hover:text-red-900">
                    content@ebbu.in
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Social Media</h3>
                <p className="text-gray-600 mb-2">You can also reach out to us on our social media channels:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    <a href="#" className="text-red-700 hover:text-red-900">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-700 hover:text-red-900">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-700 hover:text-red-900">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold mb-2">Response Time</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 48 hours. However, during busy periods (such as match days or
                transfer windows), it may take a little longer. Thank you for your patience and understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

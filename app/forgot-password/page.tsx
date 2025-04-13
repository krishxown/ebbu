import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Forgot Password | EBBU - East Bengal Bangal United",
  description: "Reset your password for your EBBU account. We'll send you a link to create a new password.",
  keywords: "East Bengal forgot password, EBBU password reset, account recovery",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="inline-block relative h-16 w-16 mb-4">
              <Image src="/images/ebbu-logo.png" alt="EBBU Logo" fill className="object-contain" />
            </div>
            <h1 className="text-2xl font-bold">Forgot Password</h1>
            <p className="text-gray-600">Enter your email address to reset your password</p>
          </div>

          <form className="space-y-4">
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

            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white py-2 rounded-md font-medium transition"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link href="/login" className="text-red-700 hover:text-red-900 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

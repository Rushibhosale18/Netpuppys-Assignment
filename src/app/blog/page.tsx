import { ScrollReveal } from "@/components/animation/ScrollReveal"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Blog | Tula's International School",
  description: "Read the latest news and insights from Tula's International School.",
}

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Holistic Education in the 21st Century",
    excerpt: "Discover why academic excellence is just one part of a well-rounded education.",
    date: "May 15, 2024",
    category: "Education",
  },
  {
    id: 2,
    title: "A Day in the Life of a TIS Boarding Student",
    excerpt: "Take a peek into the daily schedule and activities of our residential students.",
    date: "April 22, 2024",
    category: "Student Life",
  },
  {
    id: 3,
    title: "Sports and Character Building: The TIS Philosophy",
    excerpt: "How our world-class sports facilities help develop leadership and teamwork.",
    date: "March 10, 2024",
    category: "Sports",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            TIS <span className="text-blue-600 dark:text-blue-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-12">
            Latest news, insights, and stories from the Tula's International School community.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={0.1 * index} direction="up">
              <article className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
                  <span className="text-gray-400 dark:text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={`#`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href={`#`}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-auto"
                >
                  Read full article
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

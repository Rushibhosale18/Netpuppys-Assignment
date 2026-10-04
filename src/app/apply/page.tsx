import { ScrollReveal } from "@/components/animation/ScrollReveal"
import { ApplyForm } from "@/components/sections/ApplyForm"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Apply Now | Tula's International School",
  description: "Start your application for Tula's International School.",
}

export default function ApplyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <ScrollReveal>
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Application <span className="text-blue-600 dark:text-blue-400">Portal</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Take the first step towards a world-class holistic education. Fill out the initial registration form below.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1} className="md:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8">
              <ApplyForm />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="left" className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/50">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Admissions Process</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Fill out this initial registration form.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Our admissions counselor will contact you within 24 hours.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Schedule an online or physical campus tour.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions regarding the application process, please contact us.
              </p>
              <a href="mailto:info@tis.edu.in" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                info@tis.edu.in
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

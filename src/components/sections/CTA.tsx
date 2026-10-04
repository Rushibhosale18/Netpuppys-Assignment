import { ScrollReveal } from "../animation/ScrollReveal"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section id="apply" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-16 text-center border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-40 dark:opacity-20" style={{ backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Ready to Join the <span className="text-blue-600 dark:text-blue-400">TIS Family?</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Begin your journey towards holistic education and personal growth. Admissions are now open for the upcoming academic session.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-medium text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                >
                  Start Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/#"
                  className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 px-8 text-base font-medium text-gray-700 dark:text-gray-200 shadow-sm transition-transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                >
                  <Download className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  Download Brochure
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

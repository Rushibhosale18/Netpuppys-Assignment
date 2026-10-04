import { ScrollReveal } from "../animation/ScrollReveal"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "Middle School",
    grades: "Grades 4 - 8",
    description: "Laying a strong foundation with experiential learning and focus on core concepts.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "High School",
    grades: "Grades 9 - 10",
    description: "Preparing for board examinations with comprehensive academic support and career counseling.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Senior Secondary",
    grades: "Grades 11 - 12",
    description: "Specialized streams in Science, Commerce, and Humanities with competitive exam coaching.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
  }
]

export function Academics() {
  return (
    <section id="academics" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Academic Excellence
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our curriculum is designed to foster critical thinking, creativity, and a lifelong love for learning. We follow the CBSE board curriculum enriched with global best practices.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)} direction="up">
              <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {program.grades}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {program.description}
                  </p>
                  <Link 
                    href={`/#${program.title.toLowerCase().replace(" ", "-")}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

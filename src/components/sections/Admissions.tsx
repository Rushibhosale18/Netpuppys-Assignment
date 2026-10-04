import { ScrollReveal } from "../animation/ScrollReveal"
import { CheckCircle2 } from "lucide-react"

const admissionSteps = [
  "Submit online registration form",
  "Schedule a campus visit or virtual tour",
  "Entrance assessment and interaction",
  "Document verification and fee payment"
]

export function Admissions() {
  return (
    <section id="admissions" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=2070&auto=format&fit=crop" 
                alt="Admissions at TIS" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollReveal>
          
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Begin Your Journey With Us
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We are looking for students who are eager to learn, grow, and contribute to our vibrant campus community. Our admissions process is designed to be transparent and straightforward.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <ul className="space-y-4">
                {admissionSteps.map((step, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

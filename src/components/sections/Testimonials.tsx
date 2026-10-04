import { ScrollReveal } from "../animation/ScrollReveal"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "TIS has completely transformed my child. The balance between academics and extracurriculars is simply outstanding. We couldn't have made a better choice.",
    author: "Rajesh Sharma",
    role: "Parent of Grade 9 Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "The state-of-the-art sports facilities and dedicated coaches helped me pursue my passion for basketball while maintaining excellent academic grades.",
    author: "Aditi Verma",
    role: "Alumna, Class of 2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "A truly international environment that broadens perspectives. The teachers are mentors who guide you every step of the way.",
    author: "Siddharth Rao",
    role: "Grade 11 Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-blue-600 dark:bg-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white blur-[100px]" />
        <div className="absolute top-[80%] -right-[10%] w-[50%] h-[50%] rounded-full bg-white blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Voices of the TIS Family
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-blue-100">
              Hear what our students, parents, and alumni have to say about their experience at Tula's International School.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)} direction="up">
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 p-8 rounded-2xl h-full flex flex-col relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-300/30 dark:text-blue-500/30" />
                <p className="text-white text-lg leading-relaxed mb-8 flex-grow">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={item.image} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-full border-2 border-white/30 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{item.author}</h4>
                    <p className="text-blue-200 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

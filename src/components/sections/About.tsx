import { ScrollReveal } from "../animation/ScrollReveal"
import { BookOpen, Users, Trophy, Target } from "lucide-react"

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Holistic Education",
    description: "Focus on intellectual, physical, emotional and spiritual growth."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Expert Faculty",
    description: "Highly qualified educators dedicated to student success."
  },
  {
    icon: <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "World-Class Sports",
    description: "State-of-the-art facilities for over 16 different sports."
  },
  {
    icon: <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Future Ready",
    description: "Curriculum designed to prepare students for global challenges."
  }
]

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Redefining Education for the <span className="text-blue-600 dark:text-blue-400">Modern World</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At Tula's International School, we believe in nurturing the unique potential of every child. Spread across a lush green campus, our school provides an environment where students can learn, grow, and thrive.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our approach combines academic rigor with a rich array of extracurricular activities, ensuring our students develop into well-rounded, confident, and compassionate global citizens.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="pt-4 grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg h-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.2} className="relative h-[600px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
              alt="Students in campus" 
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating stats card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 rounded-xl shadow-xl z-20 flex justify-around items-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Years of Excellence</p>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">22</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Acres Campus</p>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1:10</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Teacher Ratio</p>
              </div>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  )
}

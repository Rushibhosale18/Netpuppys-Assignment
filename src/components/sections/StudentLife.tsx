import { ScrollReveal } from "../animation/ScrollReveal"

export function StudentLife() {
  return (
    <section id="student-life" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Vibrant Campus Life
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experience a perfect balance of academics, sports, and extracurricular activities in a safe, nurturing environment.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1} direction="up" className="relative h-[300px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
              alt="Boarding Facilities" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-2 shadow-sm">Premium Boarding</h3>
              <p className="text-white/90 font-medium">Home away from home</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up" className="relative h-[300px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2069&auto=format&fit=crop" 
              alt="Sports Infrastructure" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-2 shadow-sm">Sports Infrastructure</h3>
              <p className="text-white/90 font-medium">16+ world-class facilities</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

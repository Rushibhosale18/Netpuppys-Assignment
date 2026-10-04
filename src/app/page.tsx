import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Academics } from "@/components/sections/Academics"
import { Admissions } from "@/components/sections/Admissions"
import { StudentLife } from "@/components/sections/StudentLife"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Academics />
      <StudentLife />
      <Admissions />
      <Testimonials />
      <CTA />
    </>
  )
}

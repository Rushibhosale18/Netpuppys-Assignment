import Link from "next/link"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">TIS</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Tula's International School is a modern co-educational residential school that offers a seamless blend of tradition and modernity.
            </p>
            <div className="flex gap-4">
              <Link href="/#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/#academics" className="hover:text-blue-400 transition-colors">Academics</Link></li>
              <li><Link href="/#admissions" className="hover:text-blue-400 transition-colors">Admissions</Link></li>
              <li><Link href="/#student-life" className="hover:text-blue-400 transition-colors">Student Life</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#" className="hover:text-blue-400 transition-colors">Middle School (Grades 4-8)</Link></li>
              <li><Link href="/#" className="hover:text-blue-400 transition-colors">High School (Grades 9-10)</Link></li>
              <li><Link href="/#" className="hover:text-blue-400 transition-colors">Senior Secondary (Grades 11-12)</Link></li>
              <li><Link href="/#" className="hover:text-blue-400 transition-colors">Sports Academy</Link></li>
              <li><Link href="/#" className="hover:text-blue-400 transition-colors">Arts & Culture</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun, Uttarakhand 248011</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+91 9458311000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:info@tis.edu.in" className="hover:text-blue-400 transition-colors">info@tis.edu.in</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tula's International School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

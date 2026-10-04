"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function ApplyForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Application Received!</h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-md">
          Thank you for your interest in Tula's International School. Our admissions counselor will review your details and contact you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-gray-900 dark:text-gray-200">First Name</label>
          <input type="text" id="firstName" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-gray-900 dark:text-gray-200">Last Name</label>
          <input type="text" id="lastName" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Doe" required />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-200">Email Address</label>
          <input type="email" id="email" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="john@example.com" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-900 dark:text-gray-200">Phone Number</label>
          <input type="tel" id="phone" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="+91 9876543210" required />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="grade" className="text-sm font-medium text-gray-900 dark:text-gray-200">Applying for Grade</label>
        <select id="grade" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" defaultValue="" required>
          <option value="" disabled>Select Grade</option>
          <option value="4">Grade 4</option>
          <option value="5">Grade 5</option>
          <option value="6">Grade 6</option>
          <option value="7">Grade 7</option>
          <option value="8">Grade 8</option>
          <option value="9">Grade 9</option>
          <option value="11">Grade 11</option>
        </select>
      </div>

      <button type="submit" className="w-full h-14 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
        Submit Registration
      </button>
    </form>
  )
}

'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onToggle }: { onToggle: (isOpen: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggle(newState) // Notify parent to shift content
  }

  return (
    <nav className="w-full bg-white border-b border-gray-200 text-black z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold tracking-wide text-purple-800">My Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-purple-500 transition">About</a>
          <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
          <a href="#skills" className="hover:text-purple-500 transition">Skills</a>
          <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
        </div>
      </div>

      {/* Mobile Dropdown */}
        <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
            isOpen ? 'max-h-60 py-4 px-4' : 'max-h-0 py-0 px-4'
        }`}
        >
        <a href="#about" className="block hover:text-purple-500" onClick={toggleMenu}>About</a>
        <a href="#projects" className="block hover:text-purple-500" onClick={toggleMenu}>Projects</a>
        <a href="#skills" className="block hover:text-purple-500" onClick={toggleMenu}>Skills</a>
        <a href="#contact" className="block hover:text-purple-500" onClick={toggleMenu}>Contact</a>
        </div>
    </nav>
  )
}

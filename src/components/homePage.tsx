'use client'

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-black to-black text-white ">
      <div className="flex flex-col items-center justify-center min-h-screen w-full text-center">
        <div className="justify-left">
        <h1 className="text-1xl md:text-4xl font-bold mb-4 font-serif">Hi there,</h1>
        <h2 className="text-3xl md:text-6xl font-bold mb-4 font-sans">I'm Bernadete</h2>
        </div>
        <p className="text-sm md:text-xl text-gray-300 max-w-xl italic">
          When you get here, you probably got my resume.
          <br />
          Please click the project button below to see my featured projects.
        </p>
        
        <a href="#projects">
          <Button className="text-white bg-transparent p-5 mt-5" variant="outline">
            Projects
          </Button>
        </a>
      </div>

      

    </div>
  )
}

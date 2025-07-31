"use client";

import { useState } from 'react'
import Image from "next/image";
import Navbar from "@/components/navBar";
import HomePage from "@/components/homePage";
import ProjectMenu from "@/components/ProjectMenu";
import { Instagram, Github, Linkedin } from 'lucide-react'


export default function Home() {
   const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div  className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen gap-8 px-8 pb-20 sm:px-20">
      <Navbar onToggle={setMenuOpen} />
      
      <main  className={`row-start-1 transition-all duration-300 ease-in-out pt-16 w-full ${
      menuOpen ? 'mt-44' : ''
        }`}>
      <div >
        <HomePage />
        
      </div>
       <div id="projects" className="">
         <ProjectMenu />
       </div>
      
      
        
      </main>

        

      
      
      
      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/bernapooh/"
          target="_blank" rel="noopener noreferrer">
          <Instagram size={16} />
          Instagram
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/MariaBernadeteBaroto"
          target="_blank" rel="noopener noreferrer">
          <Github size={16} />
          GitHub
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/mariabernadetebaroto/"
          target="_blank" rel="noopener noreferrer">
          <Linkedin size={16} />
          LinkedIn
        </a>
      </footer>

    </div>
  );
}

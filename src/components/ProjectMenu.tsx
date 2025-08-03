'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectMenu() {
  const [selectedProject, setSelectedProject] = useState<'project1' | 'project2' | null>(null)
  const [showNotice, setShowNotice] = useState(true)

  const projects = [
    {
      id: 'project1',
      title: 'GO MOMMY',
      summary: '"Go Mommy" is a comprehensive mobile application designed to support and guide expecting parents throughout their incredible journey of pregnancy.',
      details: 'This app aims to be a trusted companion, offering valuable information, tools, and resources to help expectant mothers and their partners make informed decisions, stay healthy, and embrace this transformative phase their of life.\n\n Go Mommy is packed with features to help you stay informed, healthy, and connected during this special time in your life. \n\n Main Features: \n\n 1. Sign In  \n\n 2. Home (Dashboard)  \n\n 3. Calendar (Pregnancy Tracker)  \n\n 4. Maps (Hospital Near Me)  \n\n 5. Tips and Advice  .',
      manualUrl: '/manuals/GoMommy.pdf'
    },{
      id: 'project2',
      title: 'PUP AddER',
      summary: 'PUP AddER (Polytechnic University of the Philippines AddER), an event registration system designed to streamline the process of organizing and registering for university events.',
      details: 'PUP AddER is a dynamic and user-friendly event registration system tailored for thePolytechnic University of the Philippines. The system name reflects its core functionality: making event registration quick and effortless for users. Despite challenges related to time and manpower, the development team successfully built a robust platform that enhances event organization and participation within the university. \n\n Key Features: \n\n 1.  User Authentication: Secure login and registration using Firebase Authentication.\n\n 2. Event Creation & Management: Allow organizers to create, edit, and manage events.\n\n 3. Event Discovery Page:  A visually appealing section where users can browse upcoming events, inspired by the PUP website and LUMA. \n\n 4. Registration System: Users can easily register for events with a single click.\n\n 5. Dashboard Page:  Displays key statistics such as the total number of events, registered users, and logged-in users.\n\n It also provides a downloadable report feature for easy record-keeping and data analysis',
      manualUrl: '/manuals/PUPAddER.pdf'
    }
  ]

  return (
  <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-black to-black text-white flex items-center justify-center px-4 sm:px-6 py-12">
    <div className="text-center">
      {showNotice && (
        <div className="mb-6 bg-yellow-200 text-black text-sm px-4 py-3 rounded shadow-md flex justify-between items-center max-w-4xl mx-auto">
          <p>
            ⚠️ Disclaimer: The projects presented here are university projects. I do not take full credit for them.
          </p>
          <button onClick={() => setShowNotice(false)} className="ml-4 text-black hover:text-red-600 font-bold">
            ✕
          </button>
        </div>
      )}
      <h1 className="text-3xl md:text-5xl font-bold mb-12 font-serif">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setSelectedProject(project.id as 'project1' | 'project2')}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{project.summary}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-black border-purple-500 text-white max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4 text-sm">
                {project.details.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {project.manualUrl && (
                <div className="mt-6">
                  <a
                    href={project.manualUrl}
                    download
                    className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition"
                  >
                    📄 Download Manual
                  </a>
                </div>
              )}
            </DialogContent>

          </Dialog>
        ))}
      </div>
    </div>
  </div>
)
}

'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectMenu() {
  const [selectedProject, setSelectedProject] = useState<'project1' | 'project2' | null>(null)

  const projects = [
    {
      id: 'project1',
      title: 'Automated Water Vehicle',
      summary: 'A smart boat with water quality monitoring.',
      details: 'Full description of AWV, sensors, tech stack, outcomes, etc.'
    },
    {
      id: 'project2',
      title: 'Event Registration System',
      summary: 'A university-wide event platform built with Next.js.',
      details: 'Details about the system, features, Firebase integration, etc.'
    }
  ]

  return (
  <div className="min-h-screen w-screen bg-gradient-to-br from-purple-900 via-black to-black text-white px-6 py-12 flex items-center justify-center">
    <div className="text-center">
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
            <DialogContent className="bg-black border-purple-500 text-white">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-2 text-sm">
                <p>{project.details}</p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  </div>
)
}

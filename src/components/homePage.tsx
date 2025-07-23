'use client'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
      <section className="flex flex-col items-center justify-center min-h-screen min-w-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">hi, I'm Bernadete</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          When you get here, you probably got my resume.
          <br />
          Now let me tell you a bit more detailed about myself.
        </p>
      </section>
    </main>
  )
}

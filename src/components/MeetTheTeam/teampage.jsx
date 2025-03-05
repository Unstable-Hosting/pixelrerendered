import TeamMembers from "./team-members";

import { useEffect } from "react"

export default function TeamPage() {
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1, 
        rootMargin: "0px 0px -100px 0px", 
      },
    )

    
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      // Clean up
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 grid-bg opacity-20 z-0 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-16 flex flex-col">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-[Blanka] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            The brilliant minds behind Pixel - pushing the boundaries of
            technology and creativity
          </p>
        </div>
        <TeamMembers />
      </div>
    </main>
  );
}

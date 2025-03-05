import { useState, useRef, useEffect } from "react"

// Sample team data organized by committees - replace with your actual team members
const teamData = {
  "Core Commitee Members": [
    {
      id: 1,
      name: "Poorva",
      role: "Event Head",
      photoUrl: "/poorva.jpeg",
      videoUrl: "/videofile.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: 2,
      name: "Velvighnesh ",
      role: "Event Co-Head",
      photoUrl: "/velvi.jpg",
      videoUrl: "/videos/team-member-2.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Janani",
      role: "Core member",
      photoUrl: "/janani.jpg",
      videoUrl: "/videos/team-member-3.mp4",
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: 3,
      name: "Ankur",
      role: "Event Head ( Student Council Head ) ",
      photoUrl: "/ankur.jpg",
      videoUrl: "/videos/team-member-3.mp4",
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: 3,
      name: "Rushikesh",
      role: "Commitee Member",
      photoUrl: "/rushikesh.jpeg",
      videoUrl: "/videos/team-member-3.mp4",
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
  ],
  "PR Commitee": [
    {
      id: 4,
      name: "Neha ",
      role: "PR Head",
      photoUrl: "/neha.jpg",
      videoUrl: "/videos/team-member-4.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ],
  "Creatives ": [
    {
      id: 6,
      name: "Sevita",
      role: "Creatives Head",
      photoUrl: "/Sevita.jpg",
      videoUrl: "/videos/team-member-6.mp4",
      socialLinks: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
   
   
  ],
  "Cultural Committee": [
    {
      id: 9,
      name: "Hamza",
      role: "Cultural Head",
      photoUrl: "/hamza.jpg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 9,
      name: "Krishna",
      role: "Cultural Co-Head",
      photoUrl: "/krishna.jpeg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ],
  "Finance": [
    {
      id: 9,
      name: "Rithend ",
      role: "Finance Head",
      photoUrl: "/rithend.jpg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ],
  "Hospitality": [
    {
      id: 9,
      name: "Jesal",
      role: "Hospitality Head",
      photoUrl: "/jesal.jpg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ]
  ,
  "Logistics": [
    {
      id: 9,
      name: "Jeffrin",
      role: "Logistics Head",
      photoUrl: "/jefff.jpg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ],
  "Security": [
    {
      id: 9,
      name: "Vishwajeet",
      role: "Security Head",
      photoUrl: "/vishwajeet.jpg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ]
  ,
  "Social Media": [
    {
      id: 9,
      name: "Lokesh",
      role: "Social Media Head",
      photoUrl: "/lokesh.jpg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ]
  ,
  "Sports Commitee": [
    {
      id: 9,
      name: "Durvankur",
      role: "Sports Committee Head",
      photoUrl: "/durvankur.JPG",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ]
  ,
  "Coverage": [
    {
      id: 9,
      name: "Fouzan",
      role: "Coverage Head",
      photoUrl: "/fouzan.jpg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    }
  ]
  ,
  "Technical Team": [
    {
      id: 1,
      name: "Rein",
      role: "Team Lead",
      photoUrl: "/.jpeg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      
    },
    ///Other Tech team members
    
    
  ]

  ,
  "Developer Team": [
    {
      id: 1,
      name: "Dinesh",
      role: "Team Lead",
      photoUrl: "/dinesh.jpeg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      
    },
    {
      id: 2,
      name: "sahil",
      role: "Team Member",
      photoUrl: "/sahil.jpeg",
      videoUrl: "/videos/team-member-9.mp4",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      
    }
    ///Other development team members

    
  ]

}

const TeamMemberCard = ({ member ,index}) => {
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef(null)
  const playPromiseRef = useRef(null)
  
  // Preload the video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [])
  
  // Handle hover state with proper promise handling
  const handleMouseEnter = () => {
    setIsHovering(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      
      // Store the play promise so we can check its state before pausing
      const playPromise = videoRef.current.play()
      
      // Modern browsers return a promise from play()
      if (playPromise !== undefined) {
        playPromiseRef.current = playPromise
        
        // Handle any errors that might occur during play
        playPromise.catch(error => {
          console.error("Video play error:", error)
        })
      }
    }
  }
  
  const handleMouseLeave = () => {
    setIsHovering(false)
    
    if (videoRef.current) {
      // Check if there's a pending play promise
      if (playPromiseRef.current) {
        // Wait for the play promise to resolve before pausing
        playPromiseRef.current
          .then(() => {
            // Only pause if the video is still playing
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause()
            }
          })
          .catch(error => {
            // Handle any errors
            console.error("Error handling play promise:", error)
          })
          .finally(() => {
            // Clear the promise reference
            playPromiseRef.current = null
          })
      } else {
        // If there's no pending promise, we can safely pause
        videoRef.current.pause()
      }
    }
  }

  return (
    <div
      className={`group relative animate-on-scroll fade-up-delay-${index % 5} `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-full border-4 border-cyan-500/30 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
        {/* Static Image */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"}`}>
          <img
            src={member.photoUrl || "/placeholder-400x400.jpg"}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video that plays on hover */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}>
          <video ref={videoRef} muted playsInline loop className="w-full h-full object-cover">
            <source src={member.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Futuristic overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Scan line effect */}
        <div className="absolute inset-0 bg-scan-lines opacity-20 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Member info with futuristic styling */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-gray-400">{member.role}</p>

        
      </div>
    </div>
  )
}

// Committee section component
const CommitteeSection = ({ title, members, index }) => {
  // Different animation styles based on index
  const animationClasses = [
    "fade-up", // First section fades up
    "fade-right", // Second section fades from right
    "fade-left", // Third section fades from left
    "fade-up-scale", // Fourth section fades up and scales
  ]

  const animationClass = animationClasses[index % animationClasses.length]

  return (
    <div className={`mb-24 animate-on-scroll ${animationClass}`}>
      <div className="relative mb-12">
        {/* Futuristic committee heading with decorative elements */}
        <h2 className="text-3xl font-bold  text-center relative z-10 text-cyan-400">{title}</h2>

      </div>

      {/* Team members grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {members.map((member, idx) => (
          <TeamMemberCard key={member.id} member={member} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default function TeamMembers() {
  return (
    <div>
      {/* Committee navigation */}
      

      {/* Committee sections */}
      {Object.entries(teamData).map(([committee, members], index) => (
        <div key={committee} id={committee.toLowerCase().replace(/\s+/g, "-")}>
          <CommitteeSection title={committee} members={members} index={index} />
        </div>
      ))}
    </div>
  )
}


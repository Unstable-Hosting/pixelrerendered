import { useState  } from "react"

const teamData = {
  "Core Commitee Members": [
    {
      id: 1,
      name: "Poorva",
      role: "Core",
      photoUrl: "/poorva.jpeg"
    },
    {
      id: 2,
      name: "Velvignesh",
      role: "Core",
      photoUrl: "/velvi.jpg"
    },
    {
      id: 3,
      name: "Janani",
      role: "Core",
      photoUrl: "/janani.jpg"
    },
    {
      id: 4,
      name: "Ankur",
      role: "Core",
      photoUrl: "/ankur.jpg"
    },
    {
      id: 5,
      name: "Rushikesh",
      role: "Core",
      photoUrl: "/rushikesh.jpeg"
    }
  ],
  
  "Finance": [
    {
      id: 1,
      name: "Rithend",
      role: "Finance Head",
      photoUrl: "/rithend.jpg"
    }
  ],
    
  "Social Media": [
    {
      id: 1,
      name: "Lokesh",
      role: "Social Media Head",
      photoUrl: "/lokesh.jpg"
    },
    {
      id: 2,
      name: "Maheen",
      role: "Social Media Co-Head",
      photoUrl: "/maheen.jpeg"
    }
  ],
  "PR Commitee": [
    {
      id: 1,
      name: "Neha",
      role: "PR Head",
      photoUrl: "/neha.jpg"
    }
  ],
  
  "Creatives": [
    {
      id: 1,
      name: "Sevita",
      role: "Creatives Head",
      photoUrl: "/Sevita.jpg"
    },
    {
      id: 2,
      name: "Sushmita",
      role: "Creatives Co-Head",
      photoUrl: "/sushmita.jpeg"
    }
  ],
  
  "Cultural Committee": [
    {
      id: 1,
      name: "Hamza",
      role: "Cultural Head",
      photoUrl: "/hamza.jpg"
    },
    {
      id: 2,
      name: "Krishna",
      role: "Cultural Co-Head",
      photoUrl: "/krishna.jpeg"
    }
  ],
  
  "Hospitality": [
    {
      id: 1,
      name: "Jesal",
      role: "Hospitality Head",
      photoUrl: "/jesal.jpg"
    }
  ],
  
  "Logistics": [
    {
      id: 1,
      name: "Jeffrin",
      role: "Logistics Head",
      photoUrl: "/jefff.jpg"
    }
  ],
  
  "Security": [
    {
      id: 1,
      name: "Vishwajeet",
      role: "Security Head",
      photoUrl: "/vishwajeet.jpg"
    }
  ],
  
  "Sports Commitee": [
    {
      id: 1,
      name: "Durvankur",
      role: "Sports Committee Head",
      photoUrl: "/durvankur.JPG"
    }
  ],
  
  "Coverage": [
    {
      id: 1,
      name: "Fouzan",
      role: "Coverage Head",
      photoUrl: "/fouzan.jpg"
    }
  ],
  
  "Technical Team": [
    {
      id: 1,
      name: "Rein",
      role: "Team Lead",
      photoUrl: "/rein.jpeg"
    },
    {
      id: 2,
      name: "Aditya",
      role: "Team Lead",
      photoUrl: "/aditya.jpeg"
    }
  ],
  
  "Development Team": [
    {
      id: 1,
      name: "Dinesh",
      role: "Team Lead",
      photoUrl: "/dinesh.jpeg"
    },
    {
      id: 2,
      name: "Sachin",
      role: "Team Member",
      photoUrl: "/sachin.JPG"
    },
    {
      id: 3,
      name: "Mohan",
      role: "Team Member",
      photoUrl: "/mohan.jpeg"
    },
    {
      id: 4,
      name: "Sumit",
      role: "Team Member",
      photoUrl: "/sumit.jpg"
    },
    {
      id: 5,
      name: "Sahil",
      role: "Team Member",
      photoUrl: "/sahil.jpeg"
    }
  ]
}

const TeamMemberCard = ({ member, index }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className={`group relative animate-on-scroll fade-up-delay-${index % 5}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full max-w-[325px] mx-auto aspect-square overflow-hidden rounded-full border-2 border-cyan-500/30 transition-all duration-300 group-hover:border-cyan-400">
        {/* Main Image */}
        <img
          src={member.photoUrl || "/placeholder-400x400.jpg"}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Minimal hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Simple cyan border glow on hover */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/0 group-hover:border-cyan-400/70 transition-colors duration-300"></div>
      </div>

      {/* Member info with minimal styling */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-gray-400">{member.role}</p>
{isHovering && <p className="text-sm text-gray-300">More details coming soon...</p>}
      </div>
    </div>
  )
}

const CommitteeSection = ({ title, members, index }) => {
 
  const animationClasses = [
    "fade-up",
    "fade-right", 
    "fade-left", 
    "fade-up-scale",
  ]

  const animationClass = animationClasses[index % animationClasses.length]

  return (
    <div className={`mb-24 animate-on-scroll ${animationClass}`}>
      <div className="relative mb-12 pb-2 text-center">
       
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">{title}</h2>

        
        <div className="inline-block w-24 h-0.5 bg-cyan-500 relative">
          <div className="absolute inset-0 bg-cyan-400 blur-sm opacity-50"></div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
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

      {Object.entries(teamData).map(([committee, members], index) => (
        <div key={committee} id={committee.toLowerCase().replace(/\s+/g, "-")}>
          <CommitteeSection title={committee} members={members} index={index} />
        </div>
      ))}
    </div>
  )
}


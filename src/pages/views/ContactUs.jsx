import React, { useState, useEffect, useRef } from "react"
import "../css/ContactUs.css"

const ContactUs = React.memo(() => {
  const [activeCheckpoint, setActiveCheckpoint] = useState(null)
  const timelineRef = useRef(null)

  const contactItems = [
    {
      label: "PIXEL COMMITTEE CORE TEAM",
      link: "mailto:core.pixel@university.edu",
      text: "Please reach out to our core team for queries related to events: ",
      contacts: [
        {
          text: "Poorva Shivaraman: ",
          phoneNo: 8425091066
        },
        {
          text: "Velvignesh Pillai: ",
          phoneNo: 9820315671
        },
        {
          text: "Janani Naidu: ",
          phoneNo: 9372901369
        },
        {
          text: "Rushikesh Mandane: ",
          phoneNo: 8928508584
        }
      ]
    },
    {
      label: "PIXEL INSTAGRAM HANDLE",
      link: "https://www.instagram.com/pixelstechfest?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      text: "Follow us for latest updates at: ",
      handle: "@pixelstechfest"
    },
    {
      label: "PIXEL EMAIL",
      link: "mailto:pixels.siescoms@gmail.com",
      text: "For any queries or sponsorship opportunities, feel free to reach out to us via email at:",
      handle: "pixels.siescoms@gmail.com"
    },
    {
      label: "FIND US HERE",
      isAddress: true,
      address: "Department of Computer Applications,\nSIES College of Management Studies",
      mapLink: "https://maps.app.goo.gl/MY5HguUjSjHZW6Fp8",
      coordinates: "19.042816783218374, 73.02288504146134",
    },
  ]

  useEffect(() => {
    if (!timelineRef.current) return

    const options = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target
        const checkpoint = section.querySelector(".checkpoint")
        const card = section.querySelector(".timeline-card")

        const visibleRatio = entry.intersectionRatio
        const index = Number.parseInt(section.getAttribute("data-index"))

        if (visibleRatio > 0.25) {
          checkpoint?.classList.add("active")
          card?.classList.add("visible")
          setActiveCheckpoint(index)
        } else {
          checkpoint?.classList.remove("active")
          card?.classList.remove("visible")
        }
      })
    }, options)

    const sections = timelineRef.current.querySelectorAll(".timeline-section")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleKeyDown = (e, link) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      window.location.href = link
    }
  }

  return (
    <div className="contact-page contact-theme">
      <div className="content">
        <nav className="timeline" ref={timelineRef}>
          <div className="timeline-line"></div>
          {contactItems.map((item, index) => (
            <div key={index} className="timeline-section" data-index={index}>
              <div className="checkpoint" role="button" aria-label={`Checkpoint ${index + 1}`} tabIndex={0} />
              <div className={`timeline-card ${index % 2 === 0 ? "right" : "left"}`}>
                <div className="card-content">
                  <div className="card-label">{item.label}</div>
                  {item.isAddress ? (
                    <div className="address-content">
                      <address>{item.address}</address>
                      <span className="coordinates">{item.coordinates}</span>
                      <a href={item.mapLink} className="contact-link">
                        <span className="direction-text">GET DIRECTIONS</span>
                      </a>
                    </div>
                  ) : item.contacts ? (
                    <div className="contacts-container flex flex-col items-center w-full">
                      <div className="max-w-xl w-full">
                        {" "}
                        <p className="text-left">{item.text}</p>
                        {item.contacts.map((contact, contactIndex) => (
                          <div key={contactIndex} className="contact-item text-left">
                            <span>{contact.text}</span>
                            <a href={`tel:${contact.phoneNo}`} className="contact-link contact-details">
                              {contact.phoneNo}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span>{item.text}</span>
                      <a
                        href={item.link}
                        className="contact-link"
                        tabIndex={0}
                        onKeyDown={(e) => handleKeyDown(e, item.link)}
                      >
                        {item.handle}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
})

export default ContactUs

"use client"

import { useEffect } from "react"

export default function RestaurantGuruBadge() {
  useEffect(() => {
    // Load the external CSS for the badge
    const link = document.createElement("link")
    link.href = "https://awards.infcdn.net/2024/circle_v2.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div
      id="circle-r-ribbon"
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.nodeName.toLowerCase() !== "a") {
          window.open("https://restaurantguru.com/The-Eatery-Westerly")
        }
      }}
      className="cursor-pointer"
    >
      <div className="r-ribbon_ahead">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="160px"
          height="160px"
          viewBox="0 0 160 160"
        >
          <defs>
            <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0"></path>
          </defs>
          <text className="r-ribbon_ahead-heading" fill="#000" textAnchor="middle">
            <textPath startOffset="50%" xlinkHref="#heading-arc">
              Recommended
            </textPath>
          </text>
        </svg>
      </div>
      <p className="r-ribbon_year">2025</p>
      <a
        href="https://restaurantguru.com/The-Eatery-Westerly"
        className="r-ribbon_title"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Eatery
      </a>
      <div className="r-ribbon_ahead r-ribbon_ahead-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="120px"
          height="120px"
          viewBox="0 0 120 120"
        >
          <defs>
            <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0"></path>
          </defs>
          <text className="r-ribbon_ahead-subh" fill="#000" textAnchor="middle">
            <textPath startOffset="50%" xlinkHref="#subheading-arc">
              <a href="https://restaurantguru.com" target="_blank" rel="noopener noreferrer">
                Restaurant Guru
              </a>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}

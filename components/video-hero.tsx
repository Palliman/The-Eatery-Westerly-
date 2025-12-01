"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX, Coffee, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function VideoHero({ className }: { className?: string }) {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle component mounting
  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
      // Clear any pending timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Handle image error - only after component is mounted
  useEffect(() => {
    if (!isMounted || !imageError) return

    const heroImage = document.querySelector(".hero-image") as HTMLImageElement
    if (heroImage) {
      heroImage.src = "/placeholder.svg?key=rn64c"
    }
  }, [imageError, isMounted])

  // Handle video setup - only after component is mounted
  useEffect(() => {
    if (!isMounted) return

    const videoElement = document.getElementById("hero-video") as HTMLVideoElement
    if (!videoElement) return

    videoRef.current = videoElement
    videoElement.muted = isMuted

    // Event listeners for video
    const handleLoadedData = () => {
      if (isMounted) {
        setVideoLoaded(true)
      }
    }

    const handleError = (e: Event) => {
      console.error("Video error:", e)
      if (isMounted) {
        setVideoError(true)
        setIsPlaying(false)
      }
    }

    videoElement.addEventListener("loadeddata", handleLoadedData)
    videoElement.addEventListener("error", handleError)

    // Cleanup function
    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData)
      videoElement.removeEventListener("error", handleError)

      // Pause video on unmount to prevent memory leaks
      if (videoElement) {
        videoElement.pause()
      }
    }
  }, [isMuted, isMounted])

  // Safe play function with error handling
  const playVideo = () => {
    if (!isMounted || !videoRef.current || !videoLoaded) return

    const playPromise = videoRef.current.play()

    // Play returns a promise that may be rejected
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playback started successfully
        })
        .catch((error) => {
          console.error("Play failed:", error)
          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          // Retry after a short delay, but only if component is still mounted
          timeoutRef.current = setTimeout(() => {
            if (isMounted && videoRef.current && isPlaying) {
              videoRef.current.play().catch((e) => {
                console.error("Retry failed:", e)
                if (isMounted) {
                  setIsPlaying(false)
                  setVideoError(true)
                }
              })
            }
          }, 1000)
        })
    }
  }

  // Handle play/pause state changes - only after component is mounted
  useEffect(() => {
    if (!isMounted || !videoRef.current || !videoLoaded) return

    if (isPlaying) {
      playVideo()
    } else if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [isPlaying, videoLoaded, isMounted])

  // Handle mute state changes - only after component is mounted
  useEffect(() => {
    if (!isMounted || !videoRef.current) return

    videoRef.current.muted = isMuted
  }, [isMuted, isMounted])

  // Toggle play/pause - only if mounted
  const togglePlay = () => {
    if (isMounted) {
      setIsPlaying((prev) => !prev)
    }
  }

  // Toggle mute - only if mounted
  const toggleMute = () => {
    if (isMounted) {
      setIsMuted((prev) => !prev)
    }
  }

  // Don't render anything until component is mounted
  if (!isMounted) {
    return (
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/eatery-exterior.png"
            alt="The Eatery exterior with Fish & Chip Fridays sign"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-blue-900/50 to-slate-800/80"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-4xl font-serif">
            <span className="block text-white drop-shadow-2xl">The Eatery</span>
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("relative h-[80vh] min-h-[600px] md:h-[70vh] md:min-h-[500px] w-full overflow-hidden", className)}
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/eatery-exterior.png"
          alt="The Eatery exterior with Fish & Chip Fridays sign"
          fill
          priority
          className="object-cover hero-image"
          onError={() => {
            if (isMounted) {
              setImageError(true)
            }
          }}
        />

        {/* Video overlay that plays when loaded */}
        {!videoError && (
          <video
            id="hero-video"
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded && isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-serving-a-dish-of-fine-dining-restaurant-3772-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Navy blue overlay for better logo contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-blue-900/50 to-slate-800/80"></div>
      </div>

      {/* Breakfast-themed Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
        {/* Main heading with breakfast styling */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-4xl font-serif">
            <span className="block text-white drop-shadow-2xl">The Eatery</span>
          </h1>

          {/* Morning greeting */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="h-6 w-6 text-yellow-300" />
            <span className="text-lg md:text-xl font-medium text-yellow-100 tracking-wide">
              Good Morning, Westerly!
            </span>
            <Coffee className="h-6 w-6 text-yellow-300" />
          </div>

          {/* Breakfast-themed decorative element */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-yellow-300 rounded-full"></div>
            <span className="text-yellow-200 text-2xl">🥞</span>
            <div className="w-8 h-0.5 bg-yellow-300 rounded-full"></div>
          </div>

          {/* Location and tagline with better contrast */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl px-6 py-4 mx-auto max-w-2xl border border-yellow-200/30 shadow-xl">
            <p className="text-lg md:text-xl mb-2 font-medium text-yellow-100">55 Beach St, Westerly, RI</p>
            <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
              Start Your Day Right with Homestyle Breakfast
            </p>
          </div>
        </div>

        {/* Breakfast specialties highlight */}
        <div className="bg-blue-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-200/40 shadow-lg">
          <div className="flex items-center gap-2 text-white">
            <Heart className="h-5 w-5 text-red-300" />
            <span className="text-base md:text-lg font-medium">
              Famous for Irish Eggs Benedict & Cinnamon Swirl French Toast
            </span>
            <Heart className="h-5 w-5 text-red-300" />
          </div>
        </div>

        {/* Opening hours for breakfast */}
        <div className="mt-4 mb-6 text-yellow-100 text-[10px] md:text-sm text-center px-2">
          <p className="leading-tight">
            BREAKFAST SERVED ALL DAY • WEEKDAY HOURS: 7:00 AM – 2:00 PM (MON–FRI) • LUNCH BEGINS DAILY AT 11:00 AM •
            FRIDAY SPECIAL: FISH & CHIPS 4:00 PM – 7:00 PM • WEEKEND HOURS: 7:00 AM – 1:00 PM (SAT–SUN)
          </p>
        </div>
      </div>

      {/* Video controls - only show if video is available */}
      {!videoError && videoLoaded && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-slate-700/30 backdrop-blur-sm border border-yellow-200/30"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-slate-700/30 backdrop-blur-sm border border-yellow-200/30"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>
      )}
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe3D } from "@/components/ui/3d-globe"

const sampleMarkers = [
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://res.cloudinary.com/dj95cxdqo/image/upload/v1782211542/1771874162127_meffyz.jpg",
    label: "Dubai, UAE",
  },
  {
    lat: 19.0760,
    lng: 72.8777,
    src: "https://res.cloudinary.com/dj95cxdqo/image/upload/v1782211542/1771874162127_meffyz.jpg",
    label: "Mumbai, India",
  },
];

export default function SpaceBackground() {
  const canvasRef = useRef(null)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let stars = []
    let cosmicParticles = []
    let shootingStars = []
    let currentDarkStatus = true

    const checkTheme = () => {
      const darkActive = document.documentElement.classList.contains('dark')
      setIsDark(darkActive)
      
      if (darkActive !== currentDarkStatus) {
        currentDarkStatus = darkActive
        if (currentDarkStatus) {
          initSpaceObjects()
          cancelAnimationFrame(animationFrameId)
          render()
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          cancelAnimationFrame(animationFrameId)
        }
      }
    }

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      currentDarkStatus = document.documentElement.classList.contains('dark')
      if (currentDarkStatus) {
        initSpaceObjects()
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    const initSpaceObjects = () => {
      stars = []
      const starCount = Math.floor((canvas.width * canvas.height) / 4000)
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          speed: 0.005 + Math.random() * 0.015,
        })
      }

      cosmicParticles = []
      const particleCount = Math.floor(canvas.width / 40)
      for (let i = 0; i < particleCount; i++) {
        cosmicParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 0.5 + Math.random() * 1.5,
          alpha: 0.1 + Math.random() * 0.4,
          speedY: -(0.05 + Math.random() * 0.12),
          speedX: (Math.random() - 0.5) * 0.05,
        })
      }
    }

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.9,
        y: Math.random() * canvas.height * 0.3,
        length: 120 + Math.random() * 120,
        speed: 6 + Math.random() * 8,
        angle: (Math.PI / 4) + (Math.random() * 0.08 - 0.04),
        opacity: 1,
        fadeSpeed: 0.01 + Math.random() * 0.015,
        colorVariant: Math.random() > 0.4 ? '#2dd4bf' : '#38bdf8'
      })
    }

    const render = () => {
      if (!currentDarkStatus) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.alpha += star.speed
        if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.15, star.alpha)})`
        ctx.fill()
      })

      cosmicParticles.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        if (p.y < -10) p.y = canvas.height + 10
        if (p.x < -10 || p.x > canvas.width + 10) p.x = Math.random() * canvas.width

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45, 212, 191, ${p.alpha})`
        ctx.fill()
      })

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i]
        const cosAngle = Math.cos(ss.angle)
        const sinAngle = Math.sin(ss.angle)
        const endX = ss.x - ss.length * cosAngle
        const endY = ss.y - ss.length * sinAngle

        const gradient = ctx.createLinearGradient(ss.x, ss.y, endX, endY)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`)
        gradient.addColorStop(0.1, `${ss.colorVariant}${Math.floor(ss.opacity * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(0.4, `rgba(147, 51, 234, ${ss.opacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2.5
        ctx.moveTo(ss.x, ss.y)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        ss.x += ss.speed * cosAngle
        ss.y += ss.speed * sinAngle
        ss.opacity -= ss.fadeSpeed

        if (ss.opacity <= 0 || ss.x > canvas.width || ss.y > canvas.height) {
          shootingStars.splice(i, 1)
        }
      }

      if (Math.random() < 0.025 && shootingStars.length < 5) {
        createShootingStar()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener('resize', resizeCanvas)
    
    const darkActive = document.documentElement.classList.contains('dark')
    setIsDark(darkActive)
    currentDarkStatus = darkActive
    resizeCanvas()
    if (currentDarkStatus) {
      render()
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="hidden dark:block fixed inset-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-b from-[#000000] via-[#03060d] to-[#04060a]"
        style={{ backgroundColor: 'transparent' }}
      />

      {isDark && (
        <div className="fixed cursor-grab -right-64 -bottom-64 md:-right-32 md:-bottom-36 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-auto z-1 opacity-75 select-none animate-fade-in duration-1000">
          <Globe3D
            markers={sampleMarkers}
            config={{
              atmosphereColor: "#ededed", 
              atmosphereIntensity: 12,
              bumpScale: 3,
              autoRotateSpeed: 1.25,
            }}
            onMarkerClick={(marker) => console.log("Clicked marker:", marker.label)}
            onMarkerHover={(marker) => marker && console.log("Hovering:", marker.label)}
          />
        </div>
      )}
    </>
  )
}
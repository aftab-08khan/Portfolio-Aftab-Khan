'use client'

import { useEffect, useRef } from 'react'

export default function SpaceBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let stars = []
    let shootingStars = []
    let isDark = true

    // 1. Core theme monitor rule
    const checkTheme = () => {
      const darkActive = document.documentElement.classList.contains('dark')
      
      // If theme context changes, handle loop state cleanly
      if (darkActive !== isDark) {
        isDark = darkActive
        if (isDark) {
          initStars()
          // Resume animation frame loop when changing back to dark mode
          cancelAnimationFrame(animationFrameId)
          render()
        } else {
          // Hard wipe canvas and stop rendering entirely to save CPU/Battery in light mode
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
      isDark = document.documentElement.classList.contains('dark')
      if (isDark) {
        initStars()
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    const initStars = () => {
      stars = []
      const starCount = Math.floor((canvas.width * canvas.height) / 4000)
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          speed: 0.01 + Math.random() * 0.02,
        })
      }
    }

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.8,
        y: Math.random() * canvas.height * 0.4,
        length: 80 + Math.random() * 100,
        speed: 4 + Math.random() * 6,
        angle: (Math.PI / 4) + (Math.random() * 0.1 - 0.05),
        opacity: 1,
        fadeSpeed: 0.015 + Math.random() * 0.02,
      })
    }

    // 2. Render loop runs ONLY if dark mode is active
    const render = () => {
      if (!isDark) return // Safety exit bridge

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Ambient Background Space Stars
      stars.forEach((star) => {
        star.alpha += star.speed
        if (star.alpha > 1 || star.alpha < 0) {
          star.speed = -star.speed
        }
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.2, star.alpha)})`
        ctx.fill()
      })

      // Cosmic Shooting Star Streaks
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i]
        const cosAngle = Math.cos(ss.angle)
        const sinAngle = Math.sin(ss.angle)
        const endX = ss.x - ss.length * cosAngle
        const endY = ss.y - ss.length * sinAngle

        const gradient = ctx.createLinearGradient(ss.x, ss.y, endX, endY)
        gradient.addColorStop(0, `rgba(45, 212, 191, ${ss.opacity})`) // Teal matching accent color
        gradient.addColorStop(0.2, `rgba(147, 51, 234, ${ss.opacity * 0.6})`) // Purple aura
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
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

      if (Math.random() < 0.008 && shootingStars.length < 3) {
        createShootingStar()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener('resize', resizeCanvas)
    
    // Initial evaluation trigger
    isDark = document.documentElement.classList.contains('dark')
    resizeCanvas()
    if (isDark) {
      render()
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hidden dark:block fixed inset-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-b from-[#000000] via-[#04070f] to-[#05070c]"
      style={{ backgroundColor: 'transparent' }}
    />
  )
}
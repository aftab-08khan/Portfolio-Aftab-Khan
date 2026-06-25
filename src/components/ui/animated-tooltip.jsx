'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiFirebase, SiPython, SiDjango, SiAmazonaws,
  SiBootstrap, SiGit, SiGithub,
  SiShadcnui
} from 'react-icons/si'
import { FaAws, FaCss3 } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const iconMap = {
  html: SiHtml5,
  css: FaCss3,
  js: SiJavascript,
  python: SiPython,
  react: SiReact,
  native: TbBrandReactNative,
  next: SiNextdotjs,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  shadcn: SiShadcnui,
  django: SiDjango,
  firebase: SiFirebase,
  aws: FaAws,
  git: SiGit,
  github: SiGithub,
}
export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0)

  const rotate = useSpring(useTransform(x, [-100, 100], [-30, 30]), springConfig)
  const translateX = useSpring(useTransform(x, [-100, 100], [-35, 35]), springConfig)

  const handleMouseMove = (event) => {
    const halfWidth = event.currentTarget.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth)
  }





  return (
    <>
      {items.map((item) => {
        const Icon = iconMap[item.iconKey] || SiReact

        return <div
          className="group relative flex h-20 w-20 items-center z-20 justify-center rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 dark:border-zinc-800/40 dark:bg-zinc-900/40 backdrop-blur-sm hover:border-teal-500/40 dark:hover:border-teal-400/40 hover:shadow-md cursor-pointer"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 260, damping: 12 },
                }}
                exit={{ opacity: 0, y: 10, scale: 0.85 }}
                style={{ translateX, rotate, whiteSpace: 'nowrap' }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-slate-950/95 border border-slate-800/80 backdrop-blur-md px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-6 -bottom-px z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-teal-400 to-transparent" />

                <div className="relative z-30 text-xsm font-semibold text-slate-100">
                  {item.name}
                </div>
                {item.designation && (
                  <div className="text-[9px] text-teal-400 font-mono tracking-wider mt-0.5 uppercase">
                    {item.designation}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative transition duration-300 group-hover:scale-110 group-hover:rotate-3 opacity-80 group-hover:opacity-100 flex items-center justify-center">
            <Icon size={32} className="text-teal-400" />          </div>
        </div>
      })}
    </>
  )
}
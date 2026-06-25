'use client'

import React, { useState } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiVisualstudiocode, SiGithub, SiFirebase, SiExpo,
  SiGooglechrome, SiVercel, SiFigma, SiTailwindcss,
  SiPython, SiDjango
} from 'react-icons/si'
import { TbBrandVscode } from "react-icons/tb";

export default function Uses() {
  const [activeTab, setActiveTab] = useState('engineering')

  const systemsData = {
    engineering: {
      label: '01 // DEV_KERNELS',
      title: 'Engineering Core Modules',
      tools: [
        { title: 'Visual Studio Code', icon: TbBrandVscode, code: 'ENV-VS', desc: 'Centralized environment setup for full-stack architecture. Heavy extension tuning for pristine React, Next.js, and Python workflows.' },
        { title: 'Python & Django DRF', icon: SiDjango, code: 'API-DJ', desc: 'Used to build secure, modular relational databases, clean API structures, and object-relational mappings optimized for performance.' },
        { title: 'GitHub Pipeline', icon: SiGithub, code: 'VCS-GIT', desc: 'Crucial control center for asynchronous version tracking, cloud repository array indexing, and collaborative branch configurations.' },
        { title: 'Firebase Matrix', icon: SiFirebase, code: 'DB-FB', desc: 'My choice for serverless app infrastructures, cloud data syncing, and dynamic micro-service authentication parameters.' },
        { title: 'Expo Framework', icon: SiExpo, code: 'MOB-EXP', desc: 'Streamlines full-stack compilation targets, letting me build and debug native mobile structures seamlessly.' },
        { title: 'Chrome DevTools', icon: SiGooglechrome, code: 'DBG-CHR', desc: 'Indispensable execution analysis panel used for performance monitoring, paint layout auditing, and network state testing.' },
      ]
    },
    cloud: {
      label: '02 // CLOUD_NODES',
      title: 'Cloud Infrastructure & Networks',
      tools: [
        { title: 'Vercel Edge Nodes', icon: SiVercel, code: 'CDN-VER', desc: 'Production hosting pipeline for server-rendered Next.js layouts. Exceptional edge networks with lightning-fast continuous deployment hooks.' },
      ]
    },
    design: {
      label: '03 // AVIONICS_UI',
      title: 'Interface Design Systems',
      tools: [
        { title: 'Figma Core UI', icon: SiFigma, code: 'DSN-FIG', desc: 'Advanced playground mapping UI blueprints, bento canvas specs, and asset wireframes prior to engineering frontend components.' },
        { title: 'Tailwind CSS Grid', icon: SiTailwindcss, code: 'STY-TW', desc: 'A brilliant utility-first style compiler keeping the DOM markup uniform, fluidly scaling layout frames without stylesheet clutter.' },
      ]
    }
  }

  return (
    <SimpleLayout
      title="System Infrastructure & Core Tooling Arrays"
      intro="A calculated diagnostic log of the environment parameters, layout engines, and hardware components utilized to deploy secure full-stack code-bases."
    >
      <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto mt-12 items-start">

        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 border-b lg:border-b-0 lg:border-l border-zinc-200/10 dark:border-zinc-800/60 pb-4 lg:pb-0 lg:pl-4 overflow-x-auto scrollbar-none shrink-0 z-20">
          {Object.keys(systemsData).map((tabKey) => {
            const tab = systemsData[tabKey];
            const isSelected = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`text-left px-4 py-3 rounded-xl font-mono text-xs tracking-widest transition-all duration-300 relative whitespace-nowrap outline-none ${isSelected
                    ? 'text-teal-500 font-bold bg-teal-500/5 border border-teal-500/20'
                    : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                  }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="hudIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-teal-400 rounded-full hidden lg:block"
                  />
                )}
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="flex-auto w-full z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                <h2 className="text-sm font-semibold tracking-wider font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                  {systemsData[activeTab].title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {systemsData[activeTab].tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.title}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 dark:border-zinc-800/40 dark:bg-zinc-900/20 backdrop-blur-sm hover:border-zinc-300 dark:hover:border-zinc-700/60 hover:shadow-md"
                    >
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 dark:border-zinc-800/60 dark:bg-zinc-800/30 text-zinc-500 dark:text-zinc-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                              <Icon size={18} />
                            </div>
                            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                              {tool.title}
                            </h3>
                          </div>

                          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/40 px-2 py-0.5 rounded-md tracking-wider">
                            {tool.code}
                          </span>
                        </div>

                        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 font-light">
                          {tool.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/30 flex items-center justify-between text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600 uppercase">
                        <span>SYS_LOG_ACTIVE</span>
                        <span className="text-teal-500/70 dark:text-teal-400/50 font-bold animate-pulse">[ ONLINE ]</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </SimpleLayout>
  )
}
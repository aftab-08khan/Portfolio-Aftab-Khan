'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaLaptopCode } from "react-icons/fa6";

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import ProjectIcon from '@/images/projectIcon.png'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ProjectSkeleton() {
  return (
    <li className="animate-pulse rounded-2xl border border-zinc-100 p-6 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-900/20">
      <div className="h-10 w-10 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-4 h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-3 w-4/5 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="mt-6 h-3 w-20 rounded bg-zinc-200 dark:bg-zinc-800" />
    </li>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        'https://raw.githubusercontent.com/aftab-08khan/portfolio-projects-api/refs/heads/main/projects-list',
      )
      const data = await res.json()
      setProjects(data)
    } catch (error) {
      console.log('Error :', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <SimpleLayout
      title="Things I’ve Built to Leave My Mark in the Dev World"
      intro="Over time, I’ve worked on a variety of projects that reflect my growth as a frontend developer. These highlight my skills in React, Next.js, Tailwind CSS, API integration, and more. Many of them are live and open-source — feel free to explore, get inspired, or contribute if you have ideas for improvement."
    >
      <ul
        role="list"
        className={`grid grid-cols-1 gap-6 relative z-20 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 ease-in-out ${
          loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {loading &&
          Array.from({ length: 6 }).map((_, i) => <ProjectSkeleton key={i} />)}
{!loading &&
  projects.map((project) => (
    <Card 
      as="li" 
      key={project.name} 
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out dark:border-zinc-800/60 dark:bg-zinc-900/40 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700/80 hover:shadow-xl dark:hover:shadow-black/40 hover:bg-zinc-50/10 dark:hover:bg-zinc-900/60"
    >
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />

      <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-teal-500/0 blur-2xl transition-all duration-500 pointer-events-none group-hover:bg-teal-500/10 dark:group-hover:bg-teal-400/5" />

      <div>
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 group-hover:border-teal-500/30 group-hover:bg-teal-500/5 dark:border-zinc-800 dark:bg-zinc-800/50 dark:group-hover:border-teal-400/40 dark:group-hover:bg-teal-400/10">
        
          <FaLaptopCode className="h-6 w-6 group-hover:text-teal-600 dark:group-hover:text-teal-400 object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"/>
        </div>

        <h2 className="mt-4 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <Card.Link href={project.link.href} target="_blank">
            <span className="absolute -inset-x-0 -inset-y-0 z-20 rounded-2xl" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
              {project.name}
            </span>
          </Card.Link>
        </h2> 

        <div className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 font-light line-clamp-3">
          <Card.Description>{project.description}</Card.Description>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex items-center text-xs font-mono uppercase tracking-widest text-zinc-400 transition-colors duration-300 group-hover:text-teal-500 dark:text-zinc-500 dark:group-hover:text-teal-400">
        <span>{project.link.label || 'view project'}</span>
        <LinkIcon className="ml-2 h-3 w-3 flex-none transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 opacity-60 group-hover:opacity-100" />
      </div>
    </Card>
  ))}
      </ul>
    </SimpleLayout>
  )
}
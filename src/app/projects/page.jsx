'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

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
    <li className="animate-pulse">
      <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-700" />

      <div className="mt-6 h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-700" />
      <div className="mt-6 h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-700" />

      <div className="mt-4 h-3 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
      <div className="mt-2 h-3 w-5/6 rounded bg-zinc-200 dark:bg-zinc-700" />

      <div className="mt-6 h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-700" />
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
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* 🔹 Skeletons while loading */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => <ProjectSkeleton key={i} />)}

        {/* 🔹 Actual Projects */}
        {!loading &&
          projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={ProjectIcon}
                  alt={project.name}
                  width={32}
                  height={32}
                  className="h-8 w-8"
                  unoptimized
                />
              </div>

              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">
                  {project.name}
                </Card.Link>
              </h2>

              <Card.Description>{project.description}</Card.Description>

              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2 capitalize">{project.link.label}</span>
              </p>
            </Card>
          ))}
      </ul>
    </SimpleLayout>
  )
}

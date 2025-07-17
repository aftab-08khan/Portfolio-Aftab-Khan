import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I often get asked about the technologies and tools I rely on for front-end development and staying productive. Here's a focused list based on what I use in my daily workflow as a developer."
    >
      <div className="space-y-20">
        <ToolsSection title="Development Stack">
          <Tool title="Visual Studio Code">
            My go-to code editor. Lightweight, fast, and packed with extensions
            that enhance my development experience with React, Next.js, and
            Tailwind CSS.
          </Tool>
          <Tool title="GitHub">
            Essential for version control, collaboration, and hosting my
            personal projects.
          </Tool>
          <Tool title="Firebase">
            I use Firebase for authentication, real-time database, and backend
            needs — especially useful in my React Native and web-based projects.
          </Tool>
          <Tool title="Expo">
            Simplifies the process of building and testing React Native apps
            across platforms.
          </Tool>
          <Tool
            title="Chrome DevTools
"
          >
            Powerful and reliable for debugging front-end applications.
          </Tool>
          <Tool
            title="Vercel
"
          >
            My preferred platform for deploying and hosting Next.js projects.
            Fast and hassle-free deployments.
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Design & UI
"
        >
          <Tool title="Figma">
            Helps me prototype and design responsive user interfaces before
            building them out with Tailwind CSS and React.
          </Tool>
          <Tool
            title="Tailwind CSS
"
          >
            Utility-first CSS framework that speeds up my workflow and keeps
            styles clean and maintainable.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

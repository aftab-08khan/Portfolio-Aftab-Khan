import { SimpleLayout } from '@/components/SimpleLayout'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'

export const metadata = {
  title: 'Skills Control Matrix',
  description: 'Engineered tech stack for next-gen deployment payloads.',
}

export default function Speaking() {
  const coreLanguages = [
    { id: 1, name: 'HTML5', designation: 'Structure Engine', iconKey: 'html' },
    { id: 2, name: 'CSS3', designation: 'Layout Matrix', iconKey: 'css' },
    { id: 3, name: 'JavaScript', designation: 'Async Runtime Engine', iconKey: 'js' },
    { id: 4, name: 'Python', designation: 'Scripting Core Kernel', iconKey: 'python' },
  ]

  const frontendAvionics = [
    { id: 5, name: 'React JS', designation: 'SPA Architecture', iconKey: 'react' },
    { id: 6, name: 'Next JS', designation: 'SSR Production Portal', iconKey: 'next' },
    { id: 7, name: 'React Native', designation: 'Cross-Platform Mobile Avionics', iconKey: 'native' },
    { id: 8, name: 'Tailwind CSS', designation: 'Utility Styling Grid', iconKey: 'tailwind' },
    { id: 9, name: 'Bootstrap', designation: 'Legacy Custom Grid System', iconKey: 'bootstrap' },
    { id: 10, name: 'ShadCN UI', designation: 'Radix Primitive System', iconKey: 'shadcn' },
  ]

  const backendDataMatrix = [
    { id: 11, name: 'Django REST', designation: 'Scalable API Engine', iconKey: 'django' },
    { id: 12, name: 'Firebase', designation: 'Realtime Serverless Stack', iconKey: 'firebase' },
    { id: 13, name: 'AWS Cloud', designation: 'Infrastructure Cloud Grid', iconKey: 'aws' },
  ]

  const systemControls = [
    { id: 14, name: 'Git', designation: 'Distributed Version Tracker', iconKey: 'git' },
    { id: 15, name: 'GitHub', designation: 'Remote Repository Array', iconKey: 'github' },
  ]

  return (
    <SimpleLayout
      title="Tech Stack Matrix & System Capabilities"
      intro="Architecting responsive, secure, and production-ready ecosystems across web and mobile platforms. Specialized in modular component structures, optimized data query states, and clean frontend presentation arrays."
    >
      <div className="space-y-16 max-w-5xl mx-auto">
        
        <div className="border-l-2 border-zinc-500/20 pl-6">
          <h3 className="text-sm font-semibold tracking-widest text-zinc-400 font-mono mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
            SYS // 01.CORE_LANGUAGES
          </h3>
          <div className="flex flex-wrap gap-6 justify-start">
            <AnimatedTooltip items={coreLanguages} />
          </div>
        </div>

        <div className="border-l-2 border-blue-500/30 pl-6">
          <h3 className="text-sm font-semibold tracking-widest text-blue-400 font-mono mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            SYS // 02.FRONTEND_AVIONICS
          </h3>
          <div className="flex flex-wrap gap-6 justify-start">
            <AnimatedTooltip items={frontendAvionics} />
          </div>
        </div>

        <div className="border-l-2 border-teal-500/30 pl-6">
          <h3 className="text-sm font-semibold tracking-widest text-teal-400 font-mono mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            SYS // 03.BACKEND_DATA_MATRIX
          </h3>
          <div className="flex flex-wrap gap-6 justify-start">
            <AnimatedTooltip items={backendDataMatrix} />
          </div>
        </div>

        <div className="border-l-2 border-purple-500/30 pl-6">
          <h3 className="text-sm font-semibold tracking-widest text-purple-400 font-mono mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            SYS // 04.VERSION_CONTROL_CHANNELS
          </h3>
          <div className="flex flex-wrap gap-6 justify-start">
            <AnimatedTooltip items={systemControls} />
          </div>
        </div>

      </div>
    </SimpleLayout>
  )
}
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import HTML from '@/images/skills/html.png'
import CSS from '@/images/skills/css.png'
import Javascript from '@/images/skills/javascript.png'
import React from '@/images/skills/react.png'
import Next from '@/images/skills/nextjs.png'
import ReactNative from '@/images/skills/react-native.png'
import Tailwind from '@/images/skills/tailwindcss.png'
import ShadcnUI from '@/images/skills/shadcn-ui.png'
import Firebase from '@/images/skills/firebase.png'

export const metadata = {
  title: 'Skills',
  description: 'Code-Driven Solutions for the Real World',
}

export default function Speaking() {
  const skillsData = [
    { id: 1, name: 'HTML', designation: '', image: HTML },
    { id: 2, name: 'CSS', designation: '', image: CSS },
    { id: 3, name: 'Javascript', designation: '', image: Javascript },
    { id: 4, name: 'React JS', designation: '', image: React },
    { id: 5, name: 'Next JS', designation: '', image: Next },
    { id: 6, name: 'Tailwind CSS', designation: '', image: Tailwind },
    { id: 7, name: 'Firebase', designation: '', image: Firebase },
    { id: 8, name: 'React Native', designation: '', image: ReactNative },
    { id: 9, name: 'ShadCN UI', designation: '', image: ShadcnUI },
  ]

  return (
    <SimpleLayout
      title="Code-Driven Solutions for the Real World"
      intro="I specialize in building modern, responsive, and high-performance web and mobile applications using technologies like React.js, Next.js, Tailwind CSS, React Native, and Firebase. I enjoy solving real-world problems through clean UI design and seamless user experiences. Whether it’s developing a full-fledged School Management System or crafting a sleek portfolio, I’m passionate about using code to create impactful digital solutions."
    >
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-12 gap-y-16 px-4 md:px-8">
        <AnimatedTooltip items={skillsData} />
      </div>
    </SimpleLayout>
  )
}

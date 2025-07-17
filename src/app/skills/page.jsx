import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import HTML from '@/images/skills/html.png'
import CSS from '@/images/skills/css-removebg.png'
import Javascript from '@/images/skills/javascript.jpg'
import React from '@/images/skills/react.jpg'
import Next from '@/images/skills/nextjs.jpg'
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
      <div className="flex flex-wrap justify-center gap-12 space-y-20 px-8">
        <AnimatedTooltip items={skillsData}></AnimatedTooltip>
        {/* <SpeakingSection title="Conferences">
          <Appearance
            href="#"
            title="In space, no one can watch you stream — until now"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="Lessons learned from our first product recall"
            description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
            event="Business of Startups 2020"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="Using design as a competitive advantage"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Bootstrapping an aerospace company to $17M ARR"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Programming your company operating system"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </SpeakingSection> */}
      </div>
    </SimpleLayout>
  )
}

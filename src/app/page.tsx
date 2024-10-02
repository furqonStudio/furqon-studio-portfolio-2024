'use client'
import { BottomNavbar } from '@/components/molecules/BottomNavbar'
import { ContactSection } from '@/components/section/ContactSection'
import { EducationAndExperiencesSection } from '@/components/section/EducationAndExperiencesSection'
import { ProfileSection } from '@/components/section/ProfileSection'
import { ProjectSection } from '@/components/section/ProjectsSection'
import { useRef } from 'react'

export default function Home() {
  const sections = {
    profile: useRef(null),
    project: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  }

  const scrollToSection = (section) => {
    if (sections[section]) {
      sections[section].current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div ref={sections.profile}>
        <ProfileSection />
      </div>
      <div ref={sections.project}>
        <ProjectSection />
      </div>
      <div ref={sections.education}>
        <EducationAndExperiencesSection />
      </div>
      <div ref={sections.contact}>
        <ContactSection />
      </div>
      <BottomNavbar scrollToSection={scrollToSection} />
    </>
  )
}

'use client'

import { ContactSection } from '@/components/section/ContactSection'
import { EducationAndExperiencesSection } from '@/components/section/EducationAndExperiencesSection'
import { ProfileSection } from '@/components/section/ProfileSection'
import { ProjectSection } from '@/components/section/ProjectsSection'
import { SkillsSection } from '@/components/section/SkillsSection'

export default function Home() {
  return (
    <div className="lg:flex lg:flex-row max-w-[1280px] m-auto">
      <div className="lg:w-3/12 lg:sticky top-0 lg:h-screen lg:overflow-y-auto">
        <ProfileSection id="profile" />
      </div>
      <div className="lg:w-9/12">
        <SkillsSection id="skills" />
        <ProjectSection id="projects" />
        <EducationAndExperiencesSection id="experiences" />
        <ContactSection id="contact" />
        <div className="mb-20 lg:hidden" />
      </div>
    </div>
  )
}

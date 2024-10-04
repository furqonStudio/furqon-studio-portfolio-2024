'use client'
import { BottomNavbar } from '@/components/molecules/BottomNavbar'
import { ContactSection } from '@/components/section/ContactSection'
import { EducationAndExperiencesSection } from '@/components/section/EducationAndExperiencesSection'
import { ProfileSection } from '@/components/section/ProfileSection'
import { ProjectSection } from '@/components/section/ProjectsSection'
import { SkillsSection } from '@/components/section/SkillsSection'

export default function Home() {
  return (
    <>
      <ProfileSection />
      <SkillsSection />
      <ProjectSection />
      <EducationAndExperiencesSection />
      <ContactSection />
      <div className="mb-20" />
    </>
  )
}

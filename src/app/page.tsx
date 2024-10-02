import { EducationAndExperiencesSection } from '@/components/section/EducationAndExperiencesSection'
import { ProfileSection } from '@/components/section/ProfileSection'
import { ProjectSection } from '@/components/section/ProjectsSection'

export default function Home() {
  return (
    <>
      <ProfileSection />
      <ProjectSection />
      <EducationAndExperiencesSection />
    </>
  )
}

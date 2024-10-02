import React from 'react'
import { ProjectCard } from '../molecules/ProjectCard'
import { SectionTitle } from '../atomic/SectionTitle'

export const ProjectSection = () => {
  return (
    <section className="section-style">
      <SectionTitle text="Project" />
      <ProjectCard
        image="/img.jpg"
        title="Prelovnes"
        description="UNNES preloved marketplace mobile"
        textDark
        bgColor="bg-red-500"
      />
      <ProjectCard
        image="/img.jpg"
        title="Prelovnes"
        description="UNNES preloved marketplace mobile"
        textDark
      />
    </section>
  )
}

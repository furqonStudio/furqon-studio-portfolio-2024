import { SectionTitle } from '../atomic/SectionTitle'
import { ProjectCard } from '../molecules/ProjectCard'

export const ProjectSection = () => {
  const Projects = [
    {
      id: 1,
      imageUrl: '/img.jpg',
      title: 'Prelovnes',
      description: 'UNNES preloved marketplace mobile',
      bgColor: 'bg-yellow-400',
      isTextDark: true,
    },
    {
      id: 2,
      imageUrl: '/img.jpg',
      title: 'Prelovnes',
      description: 'UNNES preloved marketplace mobile',
      bgColor: 'bg-yellow-400',
      isTextDark: true,
    },
    {
      id: 3,
      imageUrl: '/img.jpg',
      title: 'Prelovnes',
      description: 'UNNES preloved marketplace mobile',
      bgColor: 'bg-lime-400',
      isTextDark: true,
    },
  ]
  return (
    <section className="section-style">
      <SectionTitle text="Project" />
      <div className="flex flex-col gap-4">
        {Projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.imageUrl}
            title={project.title}
            description={project.description}
            textDark={project.isTextDark}
            bgColor={project.bgColor}
          />
        ))}
      </div>
    </section>
  )
}

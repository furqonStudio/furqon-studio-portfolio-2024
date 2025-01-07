import { projects } from '@/data/data'
import { ProjectCard } from '../molecules/ProjectCard'
import { useEffect, useState } from 'react'

export const ProjectSection = ({ id }: { id: string }) => {
  const [visibleCount, setVisibleCount] = useState(3)
  const [isMdScreen, setIsMdScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      prevCount === projects.length ? 3 : projects.length
    )
  }

  return (
    <section id={id} className="section-style">
      <h2 className="text-white font-gasoek text-center text-3xl">PROJECTS</h2>
      <div className="grid md:grid-cols-4 md:grid-rows-3 md:gap-4 gap-4">
        {projects
          .slice(0, isMdScreen ? projects.length : visibleCount)
          .map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageUrl}
              bgColor={project.bgColor}
              className={project.className}
              imageClassName={project.imageClassName}
              textLight={project.textLight}
            />
          ))}
      </div>
      {!isMdScreen && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-red-600 text-white text-xs rounded-2xl font-inter"
          >
            {visibleCount === projects.length ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  )
}

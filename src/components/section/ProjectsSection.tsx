import { ProjectCard } from '../molecules/ProjectCard'
import { useState } from 'react'

export const ProjectSection = ({ id }: { id: string }) => {
  const projects = [
    {
      id: 1,
      imageUrl: '/assets/projects/prelovnes.jpeg',
      title: 'Prelovnes',
      description: 'UNNES preloved marketplace mobile',
      bgColor: 'bg-yellow-400',
      imageClassName:
        'left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] w-52 rounded-xl',
    },
    {
      id: 2,
      imageUrl: '/assets/projects/xballacc.png',
      title: 'Xballacc',
      description: 'Website toko online aksesoris HP',
      bgColor: 'bg-green-500',
      imageClassName: 'left-1/2 w-64 translate-x-[-50%] top-24',
    },
    {
      id: 3,
      imageUrl: '/assets/projects/positivus.png',
      title: 'Positivus',
      description: 'Slicing UI Website',
      bgColor: 'bg-blue-500',
      imageClassName: 'left-1/2 w-64 translate-x-[-50%] top-24',
      textLight: true,
    },
    {
      id: 4,
      imageUrl: '/assets/projects/cheatsheet.jpg',
      title: 'Cheatsheet',
      description: 'Website cheatsheet belajar modern website',
      bgColor: 'bg-red-500',
      imageClassName: 'left-1/2 w-72 translate-x-[-50%] translate-y-[50%]',
      textLight: true,
    },
    {
      id: 5,
      imageUrl: '/assets/projects/macode.jpg',
      title: 'Macode.',
      description: 'Slicing UI Website',
      bgColor: 'bg-lime-400',
      imageClassName: 'left-1/2 w-52 translate-x-[-50%] top-24',
    },
    {
      id: 6,
      imageUrl: '/assets/projects/sipekat.png',
      title: 'Sipekat',
      description: 'Slicing UI Website',
      bgColor: 'bg-violet-600',
      imageClassName: 'left-40 bottom-0 scale-[180%]',
      textLight: true,
    },
    {
      id: 7,
      imageUrl: '/assets/projects/everymindmap.png',
      title: 'everymindmap',
      description: 'website mindmap belajar ilmu pengetahuan',
      bgColor: 'bg-blue-600',
      imageClassName: 'bottom-6 -left-[2px]  scale-[130%]',
      textLight: true,
    },
  ]

  const [visibleCount, setVisibleCount] = useState(3)

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      prevCount === projects.length ? 3 : projects.length
    )
  }

  return (
    <section id={id} className="section-style">
      <h2 className="text-white font-gasoek text-center text-3xl 2xl:text-5xl">
        PROJECTS
      </h2>
      <div className="grid md:grid-cols-4 md:grid-rows-3 md:gap-4 gap-4 ">
        {projects.slice(0, visibleCount).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageUrl}
            bgColor={project.bgColor}
            imageClassName={project.imageClassName}
            textLight={project.textLight}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleShowMore}
          className="px-4 py-2 bg-red-600 text-white text-xs rounded-2xl"
        >
          {visibleCount === projects.length ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  )
}

import Image from 'next/image'
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
      <div className="md:hidden grid gap-4">
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
      <div className="md:grid md:grid-cols-4 md:grid-rows-3 md:gap-4 gap-4 hidden">
        <ProjectCard
          title="Prelovnes"
          className="md:row-span-2"
          description="UNNES preloved marketplace mobile"
          imageSrc="/assets/projects/prelovnes.jpeg"
          bgColor="bg-yellow-400"
          imageClassName="left-1/2 mt-8 translate-x-[-50%] w-32 rounded-lg"
        />

        <ProjectCard
          title="Xballacc"
          className=""
          description="Website toko online aksesoris HP"
          imageSrc="/assets/projects/xballacc.png"
          bgColor="bg-green-600"
          imageClassName="left-1/2 mt-4 translate-x-[-50%] w-32 rounded-lg"
        />

        <ProjectCard
          title="everymindmap"
          className="md:col-span-2"
          description="Website toko online aksesoris HP"
          imageSrc="/assets/projects/everymindmap.png"
          bgColor="bg-blue-600"
          imageClassName="left-1/2 mt-4 w-72 translate-x-[-50%] rounded"
          textLight
        />

        <ProjectCard
          title="cheatsheet"
          className="md:col-span-2 h-44"
          description="Website toko online aksesoris HP"
          imageSrc="/assets/projects/everymindmap.png"
          bgColor="bg-red-600"
          imageClassName="left-1/2 mt-4 w-72 translate-x-[-50%] rounded"
          textLight
        />

        <ProjectCard
          title="Macode"
          className="md:row-span-2"
          description="macode"
          imageSrc="/assets/projects/macode.jpg"
          bgColor="bg-lime-400"
          imageClassName="left-1/2 mt-4 w-32 translate-x-[-50%] rounded"
        />

        <ProjectCard
          title="SIPEKAT"
          className="md:col-span-2"
          description="SIPEKAT"
          imageSrc="/assets/projects/sipekat.png"
          bgColor="bg-violet-600"
          imageClassName="mt-4 rounded"
          textLight
        />

        <ProjectCard
          title="Positivus"
          className=""
          description="UI Slicing"
          imageSrc="/assets/projects/positivus.png"
          bgColor="bg-yellow-400"
          imageClassName="mt-4 w-32 rounded"
        />
      </div>
      <div className="text-center mt-4 md:hidden">
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

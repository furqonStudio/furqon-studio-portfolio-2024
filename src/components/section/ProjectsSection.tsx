import { projects } from '@/data/data'
import { ProjectCard } from '../molecules/ProjectCard'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

export const ProjectSection = ({ id }: { id: string }) => {
  const [visibleCount, setVisibleCount] = useState(3)
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768)

  const ref = useRef(null)
  const buttonRef = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isButtonInView = useInView(buttonRef, { once: true }) // Track button visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768)
    }

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

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section ref={ref} id={id} className="section-style">
      <motion.h2
        className="text-white font-gasoek text-center text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        SKILLS
      </motion.h2>
      <div className="grid md:grid-cols-4 md:grid-rows-3 md:gap-4 gap-4">
        {projects
          .slice(0, isMdScreen ? projects.length : visibleCount)
          .map((project, index) => (
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
              delay={index * 0.1}
            />
          ))}
      </div>
      {!isMdScreen && (
        <div className="text-center mt-4">
          <motion.button
            ref={buttonRef} // Attach the button ref
            onClick={handleShowMore}
            className="px-4 py-2 bg-red-600 text-white text-xs rounded-2xl font-inter"
            initial="hidden"
            animate={
              isButtonInView
                ? visibleCount === projects.length
                  ? 'hidden'
                  : 'visible'
                : 'hidden'
            }
            variants={buttonAnimation}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {visibleCount === projects.length ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>
      )}
    </section>
  )
}

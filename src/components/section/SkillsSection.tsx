import { Skills } from '@/data/data'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'motion/react'

export const SkillsSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true, // Only trigger once when it comes into view
  })

  return (
    <section ref={ref} id={id} className="section-style">
      <motion.h2
        className="text-white font-gasoek text-center text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animate based on visibility
        transition={{ duration: 0.5 }}
      >
        SKILLS
      </motion.h2>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
        {Skills.map((skill, index) => (
          <motion.div
            className="bg-neutral-800 hover:bg-red-600 hover:scale-95 duration-700 transition ease-in-out p-6 rounded-2xl flex flex-col items-center justify-center"
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on visibility
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              alt="skill"
              src={skill.imageUrl}
              width={300}
              height={300}
              className="p-2"
            />
            <p className="font-inter font-bold text-center text-sm text-white">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

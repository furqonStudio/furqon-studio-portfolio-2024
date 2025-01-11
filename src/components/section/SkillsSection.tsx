import { Skills } from '@/data/data'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const SkillsSection = ({ id }: { id: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} id={id} className="section-style">
      <motion.h2
        className="text-white font-gasoek text-center text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        SKILLS
      </motion.h2>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
        {Skills.map((skill, index) => (
          <motion.div
            className="bg-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg"
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.5)',
              transition: { duration: 0.3 },
            }}
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

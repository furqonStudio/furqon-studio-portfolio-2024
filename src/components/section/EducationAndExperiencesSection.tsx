import {
  certificationTimelines,
  educationTimelines,
  workExperienceTimelines,
} from '@/data/data'
import Image from 'next/image'
import { Timelines } from '../molecules/Timelines'
import { useInView } from 'react-intersection-observer'
import { motion } from 'motion/react'

export const EducationAndExperiencesSection = ({ id }: { id: string }) => {
  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: certificationRef, inView: certificationInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id={id} className="section-style">
      <motion.h2
        className="text-white font-gasoek text-center text-3xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={
          educationInView || certificationInView || experienceInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -20 }
        }
        transition={{ duration: 0.6 }}
      >
        EDUCATION & EXPERIENCES
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-row items-center justify-center gap-2 lg:justify-start mb-4">
            <Image
              src={'/assets/icons/education.png'}
              alt="education"
              width={48}
              height={48}
              className="lg:w-14 lg:h-14"
            />
            <p className="text-white text-lg font-inter font-black tracking-tighter">
              Education
            </p>
          </div>
          <Timelines timelines={educationTimelines} />
        </motion.div>

        <motion.div
          ref={certificationRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            certificationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-row items-center justify-center gap-2 lg:justify-start mb-4">
            <Image
              src={'/assets/icons/certificate.png'}
              alt="certification"
              width={48}
              height={48}
              className="lg:w-14 lg:h-14"
            />
            <p className="text-white text-lg font-inter font-black tracking-tighter">
              Certifications
            </p>
          </div>
          <Timelines timelines={certificationTimelines} />
        </motion.div>

        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-row items-center justify-center gap-2 lg:justify-start mb-4">
            <Image
              src={'/assets/icons/work.png'}
              alt="experience"
              width={48}
              height={48}
              className="lg:w-14 lg:h-14"
            />
            <p className="text-white text-lg font-inter font-black tracking-tighter">
              Experiences
            </p>
          </div>
          <Timelines timelines={workExperienceTimelines} />
        </motion.div>
      </div>
    </section>
  )
}

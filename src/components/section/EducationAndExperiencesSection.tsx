import {
  certificationTimelines,
  educationTimelines,
  workExperienceTimelines,
} from '@/data/data'
import Image from 'next/image'
import { Timelines } from '../molecules/Timelines'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export const EducationAndExperiencesSection = ({ id }: { id: string }) => {
  // Refs for each section
  const educationRef = useRef<HTMLDivElement>(null)
  const certificationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  // useInView for each section
  const educationInView = useInView(educationRef, { once: true, amount: 0.2 })
  const certificationInView = useInView(certificationRef, {
    once: true,
    amount: 0.2,
  })
  const experienceInView = useInView(experienceRef, { once: true, amount: 0.2 })

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
        {/* Combined Education and Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            educationInView || certificationInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          {/* Education Section */}
          <motion.div
            ref={educationRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0 }} // No delay for Education
          >
            <div className="flex flex-row items-center justify-center gap-2 lg:justify-start">
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

          {/* Certifications Section with delayed animation */}
          <motion.div
            ref={certificationRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              certificationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.5 }} // Delay for Certifications
          >
            <div className="flex flex-row items-center justify-center gap-2 lg:justify-start mt-6">
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
        </motion.div>

        {/* Experience Section */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 1 }} // Adjust delay as needed
        >
          <div className="flex flex-row items-center justify-center gap-2 lg:justify-start">
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

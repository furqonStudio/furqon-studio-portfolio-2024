import Image from 'next/image'
import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export const ProfileSection = ({ id }: { id: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id={id} className="lg:mr-0 section-style">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-white text-center"
      >
        <h1 className="font-gasoek text-5xl lg:text-4xl">
          <span className="inline">FURQON</span>
          <span className="block sm:inline lg:hidden"> AL-RASYID</span>
          <span className="hidden lg:block"> AL-RASYID</span>
        </h1>
        <p className="font-inter">Software Engineer</p>
      </motion.div>
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6 }}
          className="m-auto p-4"
        >
          <Image
            alt="furqon-al-rasyid"
            src={'/assets/profile-picture.png'}
            width={400}
            height={400}
            className="m-auto rounded-t-full bg-neutral-800"
          />
        </motion.div>
        <CustomButton text="CONTACT ME" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Trigger animation on visibility
        transition={{ duration: 0.6 }}
        className="space-y-2 text-center"
      >
        <p className="font-inter text-white">My Socials</p>
        <SocialMedia />
      </motion.div>
    </section>
  )
}

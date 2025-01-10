import Image from 'next/image'
import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'
import { motion } from 'motion/react'

export const ProfileSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="lg:mr-0 section-style">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-center"
      >
        <h1 className="font-gasoek text-4xl">
          <span className="inline">FURQON</span>
          <span className="block sm:inline lg:hidden"> AL-RASYID</span>
          <span className="hidden lg:block"> AL-RASYID</span>
        </h1>
        <p className="font-inter">Software Engineer</p>
      </motion.div>
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="m-auto"
        >
          <Image
            alt="furqon-al-rasyid"
            src={'/assets/furqon-avatar.png'}
            width={400}
            height={400}
            className="m-auto"
          />
        </motion.div>
        <CustomButton text="CONTACT ME" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-2 text-center"
      >
        <p className="font-inter text-white">My Socials</p>
        <SocialMedia />
      </motion.div>
    </section>
  )
}

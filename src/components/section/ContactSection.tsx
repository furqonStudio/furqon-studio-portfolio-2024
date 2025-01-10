import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'
import { useInView } from 'react-intersection-observer'
import { motion } from 'motion/react'

export const ContactSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id={id} ref={ref} className="section-style lg:hidden">
      <motion.h2
        className="text-white font-gasoek text-center text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Let&apos;s Work Together!
      </motion.h2>
      <CustomButton text="CONTACT ME" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SocialMedia />
      </motion.div>
    </section>
  )
}

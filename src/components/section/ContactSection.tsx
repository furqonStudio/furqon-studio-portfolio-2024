import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export const ContactSection = ({ id }: { id: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id={id} ref={ref} className="section-style lg:hidden">
      <motion.h2
        className="text-white font-gasoek text-center text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Let&apos;s Work Together!
      </motion.h2>
      <CustomButton text="CONTACT ME" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SocialMedia />
      </motion.div>
    </section>
  )
}

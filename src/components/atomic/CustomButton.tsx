import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

interface CustomButtonProps {
  text: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref} // Attach the ref here
      className="bg-red-600 p-4 text-lg text-center rounded-2xl font-gasoek text-white hover:cursor-pointer md:max-w-md md:m-auto"
      initial={{ opacity: 0, scale: 0.8 }} // Initial state: invisible
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} // Animate based on inView
      transition={{ duration: 0.6 }} // Transition duration
      whileHover={{ scale: 1.1 }} // Scale up to 110% on hover
      whileTap={{ scale: 0.95 }} // Scale down to 95% when pressed
    >
      {text}
    </motion.div>
  )
}

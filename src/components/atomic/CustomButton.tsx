import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface CustomButtonProps {
  text: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={`bg-red-600 hover:bg-purple-600 transition-all duration-300 ease-in-out hover:scale-95 p-4 text-lg text-center rounded-2xl font-gasoek text-white hover:cursor-pointer md:max-w-md md:m-auto `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  )
}

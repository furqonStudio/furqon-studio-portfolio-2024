import React, { useState } from 'react'
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

  const [isPressed, setIsPressed] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={`bg-red-600 p-4 text-lg text-center rounded-2xl font-gasoek text-white hover:cursor-pointer md:max-w-md md:m-auto ${
        isPressed ? 'bg-purple-700' : ''
      }`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ backgroundColor: '#6D28D9' }}
      whileTap={{ scale: 0.95 }}
      onTapStart={() => setIsPressed(true)}
      onTapCancel={() => setIsPressed(false)}
      onTap={() => setIsPressed(false)}
    >
      {text}
    </motion.div>
  )
}

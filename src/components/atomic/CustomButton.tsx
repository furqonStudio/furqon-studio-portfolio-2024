import { motion } from 'motion/react'

interface CustomButtonProps {
  text: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <motion.div
      className="bg-red-600 p-4 text-lg text-center rounded-2xl font-gasoek text-white hover:cursor-pointer md:max-w-md md:m-auto"
      initial={{ opacity: 0, y: 20 }} // Keadaan awal: tidak terlihat dan sedikit turun
      animate={{ opacity: 1, y: 0 }} // Keadaan akhir: terlihat dan di posisi normal
      transition={{ duration: 0.5 }} // Durasi transisi
      whileHover={{ scale: 1.05 }} // Efek saat hover
      whileTap={{ scale: 0.95 }} // Efek saat ditekan
    >
      {text}
    </motion.div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

interface ProjectCardProps {
  id: number
  imageSrc: string
  title: string
  description: string
  textLight?: boolean
  bgColor?: string
  imageClassName: string
  className?: string
  delay?: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const hoverVariants = {
  scale: 1.05, // Slightly scale up the card
  y: -40, // Move the card up by 10 pixels
  boxShadow: '0px 15px 30px rgba(0, 0, 0, 1)', // Add shadow
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  imageSrc,
  title,
  description,
  bgColor = 'bg-yellow-400',
  textLight = false,
  imageClassName,
  className = '',
  delay = 0,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverVariants}
      className={`${bgColor} ${className} h-full rounded-2xl aspect-square md:aspect-auto py-4 px-8 md:p-4 relative overflow-hidden`}
    >
      <Link href={`/projects/${id}`}>
        <h3
          className={`font-gasoek text-2xl md:text-xl text-center md:text-left ${
            textLight ? 'text-white' : ''
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm font-inter text-center md:text-left md:text-xs ${
            textLight ? 'text-white' : ''
          }`}
        >
          {description}
        </p>
        <Image
          alt={title}
          src={imageSrc}
          width={500}
          height={500}
          draggable={false}
          className={`absolute ${imageClassName}`}
        />
      </Link>
    </motion.div>
  )
}

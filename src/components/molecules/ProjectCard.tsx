import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
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

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  imageSrc,
  title,
  description,
  bgColor = 'bg-yellow-400',
  imageClassName,
  className = '',
  delay = 0,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.05,
        y: -10,
        backgroundColor: bgColor,
        boxShadow: '0px 15px 30px rgba(0, 0, 0, 1)',
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      className={`bg-neutral-800  ${className} h-full rounded-2xl aspect-square md:aspect-auto py-4 px-8 md:p-4 relative overflow-hidden`}
      style={{ backgroundColor: isPressed ? bgColor : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTapStart={() => setIsPressed(true)}
      onTapCancel={() => setIsPressed(false)}
      onTap={() => setIsPressed(false)}
    >
      <Link href={`/projects/${id}`} passHref>
        <div>
          <motion.h3
            className={`font-inter font-black tracking-tight text-2xl md:text-xl text-center md:text-left ${
              isHovered ? 'text-black' : 'text-gray-200'
            }`}
            style={{ color: isPressed ? '#000000' : undefined }}
          >
            {title}
          </motion.h3>
          <motion.p
            className={`text-sm font-inter text-center md:text-left md:text-xs ${
              isHovered ? 'text-black' : 'text-gray-300'
            }`}
            style={{ color: isPressed ? '#000000' : undefined }}
          >
            {description}
          </motion.p>
          <Image
            alt={title}
            src={imageSrc}
            width={500}
            height={500}
            draggable={false}
            className={`absolute ${imageClassName}`}
          />
        </div>
      </Link>
    </motion.div>
  )
}

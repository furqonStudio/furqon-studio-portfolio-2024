import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  imageSrc: string
  title: string
  description: string
  textLight?: boolean
  bgColor?: string
  imageClassName: string
  className?: string // Tambahkan prop className
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  bgColor = 'bg-yellow-400',
  textLight = false,
  imageClassName,
  className = '', // Default ke string kosong
}) => {
  return (
    <Link
      href={'/projects'}
      className={`${bgColor} ${className} h-full rounded-2xl aspect-square md:aspect-auto py-4 px-8 md:p-4 relative overflow-hidden hover:scale-95 duration-700 transition ease-in-out `}
    >
      <h3
        className={`font-gasoek text-2xl md:text-xl text-center md:text-left ${
          textLight && 'text-white'
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm font-inter text-center md:text-left md:text-xs ${
          textLight && 'text-white'
        }`}
      >
        {description}
      </p>
      <Image
        alt={title}
        src={imageSrc}
        width={500}
        height={500}
        className={`absolute ${imageClassName}`}
      />
    </Link>
  )
}

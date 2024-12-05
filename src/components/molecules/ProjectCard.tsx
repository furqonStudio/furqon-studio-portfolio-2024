import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  imageSrc: string
  title: string
  description: string
  textLight?: boolean
  bgColor?: string
  imageClassName: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  bgColor = 'bg-yellow-400',
  textLight = false,
  imageClassName,
}) => {
  return (
    <Link
      href={'/projects'}
      className={`${bgColor} md:row-span-2 h-full rounded-2xl aspect-square md:aspect-auto py-4 px-8 relative overflow-hidden hover:scale-95 duration-700 transition ease-in-out`}
    >
      <h3
        className={`font-gasoek text-2xl text-center ${
          textLight && 'text-white'
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm font-inter text-center   ${
          textLight && 'text-white'
        }`}
      >
        {description}
      </p>
      <Image
        alt="project1"
        src={imageSrc}
        width={500}
        height={500}
        className={`absolute rounded-xl ${imageClassName}`}
      />
    </Link>
  )
}

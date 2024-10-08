import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  textDark?: boolean
  bgColor?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  bgColor = 'bg-yellow-400',
  textDark = false,
}) => {
  return (
    <Link href={'/projects'}>
      <div className={`${bgColor}  p-4 rounded-2xl space-y-2`}>
        <div>
          <h3
            className={`font-inter font-bold tracking-tight text-lg -mb-1 ${
              textDark ? 'text-gray-900' : 'text-white'
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-inter text-sm ${
              textDark ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            {description}
          </p>
        </div>
        <Image
          src={image}
          width={426}
          height={233}
          alt="project-thumbnail"
          className="rounded-xl"
        />
      </div>
    </Link>
  )
}

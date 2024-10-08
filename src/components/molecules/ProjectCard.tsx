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
      <div
        className={`${bgColor}  p-4 rounded-2xl space-y-2 hover:scale-95 transition ease-in-out duration-700 lg:w-full`}
      >
        <div>
          <h3
            className={`2xl:text-3xl font-inter font-bold tracking-tight text-lg -mb-1 ${
              textDark ? 'text-gray-900' : 'text-white'
            }`}
          >
            {title}
          </h3>
          <p
            className={`2xl:text-xl font-inter text-sm ${
              textDark ? 'text-gray-800' : 'text-gray-200'
            }`}
          >
            {description}
          </p>
        </div>
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image}
            alt="project-thumbnail"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </Link>
  )
}

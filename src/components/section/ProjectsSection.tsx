// import { projects } from '@/data/data'
import { ProjectCard } from '../molecules/ProjectCard'
import { useEffect, useState } from 'react'

const projects = [
  {
    id: 1,
    imageUrl: '/assets/projects/prelovnes.jpeg',
    title: 'Prelovnes',
    description: 'UNNES preloved marketplace mobile',
    bgColor: 'bg-yellow-400',
    className: 'md:row-span-2',
    imageClassName:
      'left-1/2 translate-x-[-50%] mt-8 w-52 rounded-xl md:w-32 md:rounded-lg',
    details: {
      introduction:
        'Prelovnes adalah aplikasi marketplace berbasis React Native yang dirancang khusus untuk mahasiswa Universitas Negeri Semarang. Aplikasi ini memungkinkan pengguna untuk membeli dan menjual barang bekas dengan fitur keamanan data transaksi menggunakan AES.',
      features: [
        'Pencarian Produk',
        'Keamanan Data Transaksi',
        'Notifikasi Real-Time',
        'Autentikasi',
      ],
      technologies: [
        {
          category: 'Frontend',
          tools: 'React Native, Tailwind CSS',
        },
        {
          category: 'Backend',
          tools: 'Supabase, AES Encryption',
        },
        {
          category: 'Autentikasi',
          tools: 'Clerk Expo',
        },
        {
          category: 'Routing',
          tools: 'Expo Router',
        },
      ],
    },
  },
  {
    id: 2,
    imageUrl: '/assets/projects/xballacc.png',
    title: 'Xballacc',
    description: 'Website toko online aksesoris HP',
    bgColor: 'bg-green-500',
    className: '',
    imageClassName:
      'left-1/2 w-64 translate-x-[-50%] mt-8 rounded-xl md:mt-4 md:w-32 md:rounded-lg',
  },
  {
    id: 3,
    imageUrl: '/assets/projects/everymindmap.png',
    title: 'everymindmap',
    description: 'Mindmap belajar ilmu pengetahuan',
    bgColor: 'bg-blue-500',
    className: 'md:col-span-2',
    imageClassName:
      'left-1/2 w-72 translate-x-[-50%] mt-8 rounded-xl md:mt-4 md:rounded',
    textLight: true,
  },
  {
    id: 4,
    imageUrl: '/assets/projects/everymindmap.png',
    title: 'Cheatsheet',
    description: 'Website cheatsheet belajar modern website',
    bgColor: 'bg-red-500',
    className: 'md:col-span-2 md:h-44',
    imageClassName:
      'left-1/2 w-72 translate-x-[-50%] translate-y-[50%] rounded-xl md:mt-4 md:rouned',
    textLight: true,
  },
  {
    id: 5,
    imageUrl: '/assets/projects/macode.png',
    title: 'Macode.',
    description: 'Slicing UI Website',
    bgColor: 'bg-lime-400',
    className: 'md:row-span-2',
    imageClassName:
      'left-1/2 w-52 translate-x-[-50%]  rounded-xl mt-8 md:mt-4 md:w-32 md:rounded',
  },
  {
    id: 6,
    imageUrl: '/assets/projects/sipekat.png',
    title: 'Sipekat',
    description: 'Manajemen Kendaraan',
    bgColor: 'bg-violet-600',
    className: 'md:col-span-2',
    imageClassName:
      'mt-20 ml-24 scale-150 md:scale-100 rounded md:mt-4 md:ml-0',
    textLight: true,
  },
  {
    id: 7,
    imageUrl: '/assets/projects/positivus.png',
    title: 'Positivus',
    description: 'Slicing UI',
    bgColor: 'bg-yellow-400',
    imageClassName:
      'mt-8 w-64 left-1/2 translate-x-[-50%] rounded-xl md:mt-4 md:w-32 md:rounded',
  },
]

export const ProjectSection = ({ id }: { id: string }) => {
  const [visibleCount, setVisibleCount] = useState(3)
  const [isMdScreen, setIsMdScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      prevCount === projects.length ? 3 : projects.length
    )
  }

  return (
    <section id={id} className="section-style">
      <h2 className="text-white font-gasoek text-center text-3xl">PROJECTS</h2>
      <div className="grid md:grid-cols-4 md:grid-rows-3 md:gap-4 gap-4">
        {projects
          .slice(0, isMdScreen ? projects.length : visibleCount)
          .map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageUrl}
              bgColor={project.bgColor}
              className={project.className}
              imageClassName={project.imageClassName}
              textLight={project.textLight}
            />
          ))}
      </div>
      {!isMdScreen && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-red-600 text-white text-xs rounded-2xl"
          >
            {visibleCount === projects.length ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  )
}

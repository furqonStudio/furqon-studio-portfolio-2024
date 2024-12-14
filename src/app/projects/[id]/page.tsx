'use client'
import { projects } from '@/data/data'
import {
  SiClerk,
  SiExpo,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si'

const ProjectsDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params

  const project = projects.find((proj) => proj.id === Number(id))

  if (!project) {
    return (
      <div className="p-8 text-center text-white">
        <h1 className="text-2xl font-bold">Proyek Tidak Ditemukan</h1>
        <p className="mt-4">Silakan kembali ke halaman sebelumnya.</p>
      </div>
    )
  }

  return (
    <div className="max-w-[1280px] m-auto text-white p-8 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 ">
      <div
        className={`w-full aspect-[9/16] rounded-3xl  ${project.bgColor}`}
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="mt-8 space-y-8 md:mt-0">
        <div>
          <h1 className="text-2xl font-gasoek lg:text-3xl">{project.title}</h1>
          <p className="text-sm lg:text-base text-justify font-inter text-gray-400 text-secondary">
            {project.description}
          </p>
        </div>
        <div>
          <p className="mt-4 font-bold font-inter lg:text-lg">Teknologi:</p>
          <div className="flex gap-4 text-gray-400">
            <div className="flex flex-col items-center">
              <SiReact className="text-4xl lg:text-5xl p-1" />
              <p className="font-inter text-[8px]">React Native</p>
            </div>
            <div className="flex flex-col items-center">
              <SiExpo className="text-4xl lg:text-5xl p-1" />
              <p className="font-inter text-[8px]">Expo</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl lg:text-5xl p-1" />
              <p className="font-inter text-[8px]">Nativewind</p>
            </div>
            <div className="flex flex-col items-center">
              <SiClerk className="text-4xl lg:text-5xl p-1" />
              <p className="font-inter text-[8px]">Clerk</p>
            </div>
            <div className="flex flex-col items-center">
              <SiSupabase className="text-4xl lg:text-5xl p-1" />
              <p className="font-inter text-[8px]">Supabase</p>
            </div>
          </div>
        </div>
        {project.details && (
          <>
            <div>
              <p className="mt-4 font-bold font-inter lg:text-lg">Deskripsi:</p>
              <p className="text-sm lg:text-base text-gray-400 font-inter">
                {project.details.introduction}
              </p>
            </div>

            <div>
              <p className="mt-4 font-bold font-inter lg:text-lg">Fitur:</p>
              <ul className="list-disc list-inside text-sm lg:text-base text-gray-400 font-inter">
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectsDetailPage

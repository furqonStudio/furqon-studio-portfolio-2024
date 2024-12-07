'use client'
import { projects } from '@/data/data'

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
    <div className="text-white p-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <div
        className={`w-full aspect-square rounded-3xl ${project.bgColor}`}
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="mt-4 md:mt-0 lg:col-span-2">
        <h1 className="text-xl font-gasoek">{project.title}</h1>
        <p className="text-sm text-justify font-inter text-gray-400 text-secondary">
          {project.description}
        </p>
        {project.details && (
          <>
            <p className="mt-4 font-bold font-inter">Tentang Proyek:</p>
            <p className="text-sm text-gray-400 font-inter">
              {project.details.introduction}
            </p>

            <p className="mt-4 font-bold font-inter">Fitur:</p>
            <ul className="list-disc list-inside text-sm text-gray-400 font-inter">
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <p className="mt-4 font-bold font-inter">Teknologi:</p>
            <ul className="list-disc list-inside text-sm text-gray-400 font-inter">
              {project.details.technologies.map((tech, index) => (
                <li key={index}>
                  <strong>{tech.category}: </strong>
                  {tech.tools}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectsDetailPage

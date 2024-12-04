import Image from 'next/image'
import { SectionTitle } from '../atomic/SectionTitle'
import { ProjectCard } from '../molecules/ProjectCard'

export const ProjectSection = () => {
  // const Projects = [
  //   {
  //     id: 1,
  //     imageUrl: '/img.jpg',
  //     title: 'Prelovnes',
  //     description: 'UNNES preloved marketplace mobile',
  //     bgColor: 'bg-yellow-400',
  //     isTextDark: true,
  //   },
  //   {
  //     id: 2,
  //     imageUrl: '/img.jpg',
  //     title: 'Prelovnes',
  //     description: 'UNNES preloved marketplace mobile',
  //     bgColor: 'bg-yellow-400',
  //     isTextDark: true,
  //   },
  //   {
  //     id: 3,
  //     imageUrl: '/img.jpg',
  //     title: 'Prelovnes',
  //     description: 'UNNES preloved marketplace mobile',
  //     bgColor: 'bg-lime-400',
  //     isTextDark: true,
  //   },
  // ]
  return (
    <section className="section-style">
      <h2 className="text-white font-gasoek text-center text-3xl 2xl:text-5xl">
        PROJECTS
      </h2>
      <div className="grid md:grid-cols-4 md:grid-rows-3 md:gap-4 gap-4">
        <div className="bg-yellow-400 md:row-span-2 h-full rounded-2xl aspect-square md:aspect-auto py-4 px-8 relative overflow-hidden">
          <h3 className="font-gasoek text-xl text-center">Prelovnes</h3>
          <p className="text-sm font-inter text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Image
            alt="project1"
            src={'/assets/projects/prelovnes.jpeg'}
            width={500}
            height={500}
            className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] w-52 rounded-xl"
          />
        </div>

        <ProjectCard
          title="Xballacc"
          description="Website toko online aksesoris HP"
          imageSrc="/assets/projects/xballacc.jpg"
          bgColor="bg-green-500"
          imageClassName="left-1/2 w-72 translate-x-[-50%] translate-y-[50%]"
        />
        {/* <div className="bg-green-600  rounded-xl h-full aspect-square" /> */}

        <div className="bg-blue-600 md:col-span-2 rounded-xl h-full aspect-square" />

        <div className="bg-red-600 h-44 md:col-span-2 rounded-xl h-full aspect-square" />
        <div className="bg-neutral-800 text-white h-full md:row-span-2 p-4 overflow-hidden relative rounded-2xl">
          <h3 className="font-gasoek text-lg">Macode.</h3>
          <p className="text-sm max-w-28">Slicing UI Mobile</p>
          <Image
            alt="project1"
            src={'/assets/projects/macode.jpg'}
            width={500}
            height={500}
            className="absolute w-48 rounded-lg mt-4"
          />
        </div>
        <div className="md:col-span-2 rounded-2xl p-4 relative overflow-hidden bg-neutral-800 text-white">
          <h3 className="font-gasoek text-lg">SIPEKAT</h3>
          <p className="text-sm max-w-28">
            Sistem Informasi Perawatan Kendaraan Terpusat
          </p>
          <Image
            alt="project1"
            src={'/assets/projects/sipekat.jpg'}
            width={500}
            height={500}
            className="absolute -bottom-2 -right-4 w-80 rounded-lg"
          />
        </div>
        <div className="bg-yellow-600  rounded-xl" />
      </div>
    </section>
  )
}

import { Skills } from '@/data/data'
import Image from 'next/image'
import { SectionTitle } from '../atomic/SectionTitle'

export const SkillsSection = () => {
  return (
    <section className="section-style">
      <SectionTitle text="Skills" />
      <div className="grid grid-cols-2 gap-4 2xl:gap-6 mt-4 md:grid-cols-4">
        {Skills.map((skill) => (
          <div
            className={`bg-gray-700 hover:bg-red-600 hover:scale-95 duration-700 transition ease-in-out p-4 rounded-2xl aspect-square flex flex-col items-center justify-center`}
            key={skill.id}
          >
            <Image alt="skill" src={skill.imageUrl} width={300} height={300} />
            <p className="font-inter font-bold text-white tracking-tight 2xl:text-xl">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

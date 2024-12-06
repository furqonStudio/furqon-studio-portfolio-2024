import { Skills } from '@/data/data'
import Image from 'next/image'
import { SectionTitle } from '../atomic/SectionTitle'

export const SkillsSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section-style">
      <SectionTitle text="SKILLS" />
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
        {Skills.map((skill) => (
          <div
            className={`bg-neutral-800 hover:bg-red-600 hover:scale-95 duration-700 transition ease-in-out p-4 rounded-2xl flex flex-col items-center justify-center`}
            key={skill.id}
          >
            <Image alt="skill" src={skill.imageUrl} width={300} height={300} />
            <p className="font-inter text-center font-bold text-white tracking-tight">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

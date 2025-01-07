import { Skills } from '@/data/data'
import Image from 'next/image'

export const SkillsSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section-style">
      <h2 className="text-white font-gasoek text-center text-3xl">SKILLS</h2>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
        {Skills.map((skill) => (
          <div
            className={`bg-neutral-800 hover:bg-red-600 hover:scale-95 duration-700 transition ease-in-out p-6 rounded-2xl flex flex-col items-center justify-center`}
            key={skill.id}
          >
            <Image
              alt="skill"
              src={skill.imageUrl}
              width={300}
              height={300}
              className="p-2"
            />
            <p className="font-inter font-bold text-center text-sm text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

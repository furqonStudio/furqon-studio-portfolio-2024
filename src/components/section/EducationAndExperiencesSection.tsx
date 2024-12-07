import {
  certificationTimelines,
  educationTimelines,
  workExperienceTimelines,
} from '@/data/data'
import Image from 'next/image'
import { Timelines } from '../molecules/Timelines'

export const EducationAndExperiencesSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section-style">
      <h2 className="text-white font-gasoek text-center text-3xl">
        EDUCATION & EXPERIENCES
      </h2>
      <div className="grid md:grid-cols-2">
        <div className="">
          <div>
            <div className="flex flex-row items-center justify-center gap-2 lg:justify-start">
              <Image
                src={'/assets/icons/education.png'}
                alt="education"
                width={48}
                height={48}
                className="lg:w-14 lg:h-14"
              />
              <p className="text-white text-lg font-inter font-black tracking-tighter">
                Education
              </p>
            </div>
            <Timelines timelines={educationTimelines} />
          </div>
          <div>
            <div className="flex flex-row items-center justify-center gap-2 lg:justify-start">
              <Image
                src={'/assets/icons/certificate.png'}
                alt="education"
                width={48}
                height={48}
                className="lg:w-14 lg:h-14"
              />
              <p className="text-white text-lg font-inter font-black tracking-tighter">
                Certifications
              </p>
            </div>
            <Timelines timelines={certificationTimelines} />
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-center gap-2 lg:justify-start">
            <Image
              src={'/assets/icons/work.png'}
              alt="education"
              width={48}
              height={48}
              className="lg:w-14 lg:h-14"
            />
            <p className="text-white text-lg font-inter font-black tracking-tighter">
              Experiences
            </p>
          </div>
          <Timelines timelines={workExperienceTimelines} />
        </div>
      </div>
    </section>
  )
}

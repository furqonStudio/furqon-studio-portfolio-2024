import {
  certificationTimelines,
  educationTimelines,
  workExperienceTimelines,
} from '@/data/data'
import Image from 'next/image'
import { SectionTitle } from '../atomic/SectionTitle'
import { Timelines } from '../molecules/Timelines'

export const EducationAndExperiencesSection = () => {
  return (
    <section className="section-style">
      <SectionTitle text="Education & Experiences" />
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            src={'/assets/icons/education.png'}
            alt="education"
            width={48}
            height={48}
          />
          <p className="text-white text-lg font-inter font-black tracking-tighter text-center">
            Education
          </p>
        </div>
        <Timelines timelines={educationTimelines} />
      </div>
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            src={'/assets/icons/certificate.png'}
            alt="education"
            width={50}
            height={50}
          />
          <p className="text-white text-lg font-inter font-black tracking-tighter text-center">
            Certifications
          </p>
        </div>
        <Timelines timelines={certificationTimelines} />
      </div>
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            src={'/assets/icons/work.png'}
            alt="education"
            width={50}
            height={50}
          />
          <p className="text-white text-lg font-inter font-black tracking-tighter text-center">
            Experiences
          </p>
        </div>
        <Timelines timelines={workExperienceTimelines} />
      </div>
    </section>
  )
}

import {
  certificationTimelines,
  educationTimelines,
  workExperienceTimelines,
} from '@/data/data'
import Image from 'next/image'
import { SectionTitle } from '../atomic/SectionTitle'
import { TimelineCard } from '../molecules/TimelineCard'

export const EducationAndExperiencesSection = () => {
  return (
    <section className="section-style">
      <SectionTitle text="Education & Experiences" />
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            src={'/assets/icons/education.png'}
            alt="education"
            width={50}
            height={50}
          />
          <p className="text-white text-lg font-gasoek text-center">
            Education
          </p>
        </div>
        <TimelineCard timelines={educationTimelines} />
      </div>
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            src={'/assets/icons/certificate.png'}
            alt="education"
            width={50}
            height={50}
          />
          <p className="text-white text-lg font-gasoek text-center">
            Certifications
          </p>
        </div>
        <TimelineCard timelines={certificationTimelines} />
      </div>
      <div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Image
            src={'/assets/icons/work.png'}
            alt="education"
            width={50}
            height={50}
          />
          <p className="text-white text-lg font-gasoek text-center">
            Experiences
          </p>
        </div>
        <TimelineCard timelines={workExperienceTimelines} />
      </div>
    </section>
  )
}

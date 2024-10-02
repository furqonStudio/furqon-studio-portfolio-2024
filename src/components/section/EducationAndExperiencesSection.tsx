import React from 'react'
import { SectionTitle } from '../atomic/SectionTitle'
import { TimelineCard } from '../molecules/TimelineCard'

export const EducationAndExperiencesSection = () => {
  const educationTimelines = [
    {
      title: 'Semarang State University',
      description: 'Informatics and Computer Engineering Education | 3.72 GPA',
      timePeriod: '2020 - 2024',
    },
    {
      title: 'State Vocational High School 01 Sragi',
      description: 'Computer and Network Engineering',
      timePeriod: '2017 - 2020',
    },
  ]

  const certificationTimelines = [
    {
      title: 'Junior Web Developer',
      description: 'Intermediate Android Application Developer Dicoding',
      timePeriod: '2024',
    },
    {
      title: 'Android Developer',
      description: 'Intermediate Android Application Developer Dicoding',
      timePeriod: '2022',
    },
    {
      title: 'Basic UX Design',
      description: 'Dicoding Learn Basic UX Design',
      timePeriod: '2022',
    },
    {
      title: 'Junior Graphic Designer',
      description: 'BPPTIK Kemenkominfo Junior Graphic Designer',
      timePeriod: '2021',
    },
  ]

  const workExperienceTimelines = [
    {
      title: 'Web Developer',
      description: 'Create UI app design and build a website using wordpress',
      timePeriod: 'August 2023 – December 2023',
    },
    {
      title: 'Education Engineer',
      description: 'Create UI app design and build a website using wordpress',
      timePeriod: 'August 2023 – December 2023',
    },
    {
      title: 'Web Developer & UI Designer',
      description: 'Create UI app design and build a website using wordpress',
      timePeriod: 'March 2023 – July 2023',
    },
    {
      title: 'Dicoding Academy Independence Study',
      description:
        'Learn native android development, UX design, and digital era soft skills',
      timePeriod: 'August 2022 – December 2022',
    },
    {
      title: 'Guru Juara',
      description:
        'Create posters, virtual backgrounds, twibbons, and certificates design',
      timePeriod: 'February 2022 – June 2022',
    },
    {
      title: 'Fine Arts and Design Student Organization.',
      description:
        'Communication and Information Media Staff & Head of the computer photography division',
      timePeriod: 'January 2021 – October 2022',
    },
  ]
  return (
    <section className="section-style">
      <SectionTitle text="Education & Experiences" />
      <div className="">
        <p className="text-white text-lg font-gasoek text-center">Education</p>
        <TimelineCard timelines={educationTimelines} />
      </div>
      <div className="">
        <p className="text-white text-lg font-gasoek text-center">
          Certifications
        </p>
        <TimelineCard timelines={certificationTimelines} />
      </div>
      <div className="">
        <p className="text-white text-lg font-gasoek text-center">
          Experiences
        </p>
        <TimelineCard timelines={workExperienceTimelines} />
      </div>
    </section>
  )
}

import React from 'react'
import { SectionTitle } from '../atomic/SectionTitle'

export const SkillsSection = () => {
  return (
    <section className="section-style">
      <SectionTitle text="Skill" />
      <div className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-3">
        <div className="bg-gray-200 p-4 aspect-square rounded-2xl text-center">
          Website
        </div>
        <div className="bg-gray-200 p-4 aspect-square rounded-2xl text-center">
          Mobile
        </div>
        <div className="bg-gray-200 p-4 aspect-square rounded-2xl text-center">
          Graphic Design
        </div>
        <div className="bg-gray-200 p-4 aspect-square rounded-2xl text-center">
          UI/UX Design
        </div>
      </div>
    </section>
  )
}

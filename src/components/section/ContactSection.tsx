import React from 'react'
import { SectionTitle } from '../atomic/SectionTitle'
import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'

export const ContactSection = () => {
  return (
    <section className="section-style">
      <SectionTitle text="Let's Work Together!" />
      <CustomButton text="Contact Me" />
      <SocialMedia />
    </section>
  )
}

import React from 'react'

import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'

export const ProfileSection = () => {
  return (
    <section className="section-style">
      <div className="text-white text-center">
        <p className="font-gasoek text-4xl">
          FURQON
          <br />
          AL-RASYID
        </p>
        <p className="font-inter">Software Engineer</p>
      </div>
      <div className="space-y-4">
        <div className="w-full aspect-square bg-yellow-300 rounded-2xl" />
        <CustomButton text="Contact Me" />
      </div>
      <div className="space-y-2 text-center ">
        <p className="font-inter text-white">My Socials</p>
        <SocialMedia />
      </div>
    </section>
  )
}

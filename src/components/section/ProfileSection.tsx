import React from 'react'
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTikTok,
  AiFillYoutube,
} from 'react-icons/ai'
import { CustomButton } from '../atomic/CustomButton'

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
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <AiFillInstagram size={24} />
          </div>
          <div className="w-10 h-10 bg-white rounded-full  flex justify-center items-center">
            <AiFillLinkedin size={24} />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <AiFillYoutube size={24} />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <AiFillTikTok size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}

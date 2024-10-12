import Image from 'next/image'
import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'

export const ProfileSection = () => {
  return (
    <section className="lg:mr-0 section-style ">
      <div className="text-white text-center">
        <p className="font-gasoek text-4xl 2xl:text-6xl">
          FURQON
          <br />
          AL-RASYID
        </p>
        <p className="font-inter 2xl:text-2xl">Software Engineer</p>
      </div>
      <div className="space-y-4">
        <Image
          alt="furqon-al-rasyid"
          src={'/assets/furqon-avatar.png'}
          width={400}
          height={400}
          className="m-auto"
        />
        <CustomButton text="Contact Me" />
      </div>
      <div className="space-y-2 text-center ">
        <p className="font-inter text-white 2xl:text-2xl">My Socials</p>
        <SocialMedia />
      </div>
    </section>
  )
}

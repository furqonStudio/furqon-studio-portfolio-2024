import Image from 'next/image'
import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'

export const ProfileSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="lg:mr-0 section-style">
      <div className="text-white text-center">
        <h1 className="font-gasoek text-4xl">
          <span className="inline">FURQON</span>
          <span className="block sm:inline lg:hidden"> AL-RASYID</span>
          <span className="hidden lg:block"> AL-RASYID</span>
        </h1>
        <p className="font-inter">Software Engineer</p>
      </div>
      <div className="space-y-4">
        <Image
          alt="furqon-al-rasyid"
          src={'/assets/furqon-avatar.png'}
          width={400}
          height={400}
          className="m-auto"
        />
        <CustomButton text="CONTACT ME" />
      </div>
      <div className="space-y-2 text-center">
        <p className="font-inter text-white">My Socials</p>
        <SocialMedia />
      </div>
    </section>
  )
}

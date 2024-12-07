import { CustomButton } from '../atomic/CustomButton'
import { SocialMedia } from '../molecules/SocialMedia'

export const ContactSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section-style lg:hidden">
      <h2 className="text-white font-gasoek text-center text-3xl">
        Let&apos;s Work Together!
      </h2>
      <CustomButton text="CONTACT ME" />
      <SocialMedia />
    </section>
  )
}

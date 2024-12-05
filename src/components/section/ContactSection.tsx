import { CustomButton } from '../atomic/CustomButton'
import { SectionTitle } from '../atomic/SectionTitle'
import { SocialMedia } from '../molecules/SocialMedia'

export const ContactSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section-style lg:hidden">
      <SectionTitle text="Let's Work Together!" />
      <CustomButton text="CONTACT ME" />
      <SocialMedia />
    </section>
  )
}

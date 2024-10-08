interface SectionTitleProps {
  text: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <h2 className="text-white font-gasoek text-center text-3xl mb-4 2xl:text-5xl">
      {text}
    </h2>
  )
}

interface CustomButtonProps {
  text: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <div className="bg-red-600 p-4 text-lg text-center rounded-2xl font-gasoek text-white hover:cursor-pointer">
      {text}
    </div>
  )
}

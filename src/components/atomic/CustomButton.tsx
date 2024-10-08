interface CustomButtonProps {
  text: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <div className="bg-red-600 p-4 text-lg text-center rounded-2xl font-gasoek text-white hover:cursor-pointer hover:scale-95 transition ease-in-out duration-700 md:max-w-md md:m-auto">
      {text}
    </div>
  )
}

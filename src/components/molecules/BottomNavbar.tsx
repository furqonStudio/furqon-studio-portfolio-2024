'use client'
import { AiOutlineFolder, AiOutlineStock, AiOutlineUser } from 'react-icons/ai'

export const BottomNavbar = ({ scrollToSection }) => {
  return (
    <div className="bg-neutral-900 w-full h-16 fixed bottom-0 flex justify-around items-center">
      <button onClick={() => scrollToSection('profile')} className="text-white">
        <AiOutlineUser size={24} />
      </button>
      <button onClick={() => scrollToSection('project')} className="text-white">
        <AiOutlineFolder size={24} />
      </button>
      <button
        onClick={() => scrollToSection('education')}
        className="text-white"
      >
        <AiOutlineStock size={24} />
      </button>
    </div>
  )
}

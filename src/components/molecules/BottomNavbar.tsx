'use client'
import { AiOutlineUser } from 'react-icons/ai'

export const BottomNavbar = () => {
  return (
    <div className="bg-neutral-900 w-full h-16 fixed bottom-0 flex justify-around items-center">
      <button className="text-white flex flex-row items-center">
        <AiOutlineUser size={24} />
        <span className="hidden md:block ml-2">Profile</span>
      </button>
      <button className="text-white flex flex-row items-center">
        <AiOutlineUser size={24} />
        <span className="hidden md:block ml-2">Skills</span>
      </button>
      <button className="text-white flex flex-row items-center">
        <AiOutlineUser size={24} />
        <span className="hidden md:block ml-2">Projects</span>
      </button>
      <button className="text-white flex flex-row items-center">
        <AiOutlineUser size={24} />
        <span className="hidden md:block ml-2">Experiences</span>
      </button>
    </div>
  )
}

import { LuFlame, LuFolder, LuHistory, LuUserCircle } from 'react-icons/lu'

export const BottomNavbar = () => {
  return (
    <div className="bg-neutral-900 w-full h-16 fixed bottom-0 flex justify-around items-center lg:hidden">
      <button className="text-white flex flex-row items-center">
        <LuUserCircle size={24} />
        <span className="hidden md:block ml-2">Profile</span>
      </button>
      <button className="text-white flex flex-row items-center">
        <LuFlame size={24} />
        <span className="hidden md:block ml-2">Skills</span>
      </button>
      <button className="text-white flex flex-row items-center">
        <LuFolder size={24} />
        <span className="hidden md:block ml-2">Projects</span>
      </button>
      <button className="text-white flex flex-row items-center">
        <LuHistory size={24} />
        <span className="hidden md:block ml-2">Experiences</span>
      </button>
    </div>
  )
}

'use client'
import {
  LuBot,
  LuBrainCog,
  LuGalleryVerticalEnd,
  LuGraduationCap,
} from 'react-icons/lu'

export const BottomNavbar = () => {
  const scrollToSection = (id: string, offset = -14) => {
    const section = document.getElementById(id)
    if (section) {
      const elementPosition = section.getBoundingClientRect().top // Posisi relatif terhadap viewport
      const offsetPosition = elementPosition + window.pageYOffset + offset // Tambahkan offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="bg-neutral-900 w-full h-16 fixed bottom-0 flex justify-around items-center lg:hidden">
      <button
        className="text-white flex flex-row items-center"
        onClick={() => scrollToSection('profile')}
      >
        <LuBot size={24} />
        <span className="hidden md:block ml-2">Profile</span>
      </button>
      <button
        className="text-white flex flex-row items-center"
        onClick={() => scrollToSection('skills')}
      >
        <LuBrainCog size={24} />
        <span className="hidden md:block ml-2">Skills</span>
      </button>
      <button
        className="text-white flex flex-row items-center"
        onClick={() => scrollToSection('projects')}
      >
        <LuGalleryVerticalEnd size={24} />
        <span className="hidden md:block ml-2">Projects</span>
      </button>
      <button
        className="text-white flex flex-row items-center"
        onClick={() => scrollToSection('experiences')}
      >
        <LuGraduationCap size={24} />
        <span className="hidden md:block ml-2">Experiences</span>
      </button>
    </div>
  )
}

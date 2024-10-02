'use client'
import { useState, useRef } from 'react'
import { AiOutlineFolder, AiOutlineStock, AiOutlineUser } from 'react-icons/ai'

export const BottomNavbar = () => {
  const [active, setActive] = useState('user')

  return (
    <>
      <div className="bg-neutral-900 w-full h-16 fixed bottom-0 flex justify-around items-center">
        <button
          className={`text-white ${active === 'user' ? 'text-red-500' : ''}`}
          onClick={() => {
            setActive('user')
          }}
        >
          <AiOutlineUser size={24} />
        </button>
        <button
          className={`text-white ${active === 'folder' ? 'text-red-500' : ''}`}
          onClick={() => {
            setActive('folder')
          }}
        >
          <AiOutlineFolder size={24} />
        </button>
        <button
          className={`text-white ${active === 'stock' ? 'text-red-500' : ''}`}
          onClick={() => {
            setActive('stock')
          }}
        >
          <AiOutlineStock size={24} />
        </button>
      </div>
    </>
  )
}

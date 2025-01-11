import Link from 'next/link'
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTikTok,
  AiFillYoutube,
} from 'react-icons/ai'

export const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-3">
      <Link
        href={'https://www.instagram.com/furqon.std/'}
        className="cursor-pointer w-10 h-10 border text-white border-neutral-700 rounded-2xl flex justify-center items-center hover:bg-white hover:text-black transition ease-in-out duration-500"
      >
        <AiFillInstagram size={24} />
      </Link>
      <Link
        href={'https://www.instagram.com/furqon.std/'}
        className="w-10 h-10 border text-white border-neutral-700 rounded-2xl  flex justify-center items-center hover:bg-white hover:text-black transition ease-in-out duration-500"
      >
        <AiFillLinkedin size={24} />
      </Link>
      <Link
        href={'https://www.instagram.com/furqon.std/'}
        className="w-10 h-10 border text-white border-neutral-700 rounded-2xl flex justify-center items-center hover:bg-white hover:text-black transition ease-in-out duration-500"
      >
        <AiFillYoutube size={24} />
      </Link>
      <Link
        href={'https://www.instagram.com/furqon.std/'}
        className="w-10 h-10 border text-white border-neutral-700 rounded-2xl flex justify-center items-center hover:bg-white hover:text-black transition ease-in-out duration-500"
      >
        <AiFillTikTok size={24} />
      </Link>
    </div>
  )
}

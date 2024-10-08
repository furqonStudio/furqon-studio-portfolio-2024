import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTikTok,
  AiFillYoutube,
} from 'react-icons/ai'

export const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-10 h-10 bg-white rounded-2xl flex justify-center items-center hover:scale-95 transition ease-in-out duration-700">
        <AiFillInstagram size={24} />
      </div>
      <div className="w-10 h-10 bg-white rounded-2xl  flex justify-center items-center hover:scale-95 transition ease-in-out duration-700">
        <AiFillLinkedin size={24} />
      </div>
      <div className="w-10 h-10 bg-white rounded-2xl flex justify-center items-center hover:scale-95 transition ease-in-out duration-700">
        <AiFillYoutube size={24} />
      </div>
      <div className="w-10 h-10 bg-white rounded-2xl flex justify-center items-center hover:scale-95 transition ease-in-out duration-700">
        <AiFillTikTok size={24} />
      </div>
    </div>
  )
}

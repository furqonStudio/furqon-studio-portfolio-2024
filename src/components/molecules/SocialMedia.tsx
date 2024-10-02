import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTikTok,
  AiFillYoutube,
} from 'react-icons/ai'

export const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-10 h-10 bg-white rounded-2xl flex justify-center items-center">
        <AiFillInstagram size={24} />
      </div>
      <div className="w-10 h-10 bg-white rounded-2xl  flex justify-center items-center">
        <AiFillLinkedin size={24} />
      </div>
      <div className="w-10 h-10 bg-white rounded-2xl flex justify-center items-center">
        <AiFillYoutube size={24} />
      </div>
      <div className="w-10 h-10 bg-white rounded-2xl flex justify-center items-center">
        <AiFillTikTok size={24} />
      </div>
    </div>
  )
}

export interface TimelineProps {
  title: string
  description: string
  timePeriod: string
}

export const Timeline = ({ title, description, timePeriod }: TimelineProps) => {
  return (
    <li className="ms-8 mb-8 last:mb-0">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-red-950 bg-red-600"></span>
      <h3 className="mb-1 font-inter tracking-tighter font-bold text-white ">
        {title}
      </h3>
      <p className="font-inter text-sm text-gray-400">{description}</p>
      <time className="font-inter text-xs text-gray-500">{timePeriod}</time>
    </li>
  )
}

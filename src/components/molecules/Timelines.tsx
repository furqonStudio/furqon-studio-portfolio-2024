export const Timelines = ({ timelines }) => {
  return (
    <div className="p-4">
      <ol className="relative border-s border-gray-700">
        {timelines.map((timeline, index) => (
          <li className="ms-8 mb-8 last:mb-0 group" key={index}>
            <span className="absolute flex items-center justify-center size-4 rounded-full -start-2 group-hover:bg-red-600 group-hover:ring-4 ring-red-600 bg-gray-700 transition ease-in-out duration-700"></span>
            <h3 className="mb-1 font-inter tracking-tight font-bold text-gray-200">
              {timeline.title}
            </h3>
            <p className="font-inter text-sm text-gray-400">
              {timeline.description}
            </p>
            <time className="font-inter text-xs text-gray-500">
              {timeline.timePeriod}
            </time>
          </li>
        ))}
      </ol>
    </div>
  )
}

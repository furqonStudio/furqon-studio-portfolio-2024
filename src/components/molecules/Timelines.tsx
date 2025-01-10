import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

type TimelineItem = {
  title: string
  description: string
  timePeriod: string
  icon?: React.ReactNode // Added icon property
  link?: string // Added link property
}

type TimelinesProps = {
  timelines: TimelineItem[]
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 1 + i * 0.5,
    },
  }),
}

export const Timelines: React.FC<TimelinesProps> = ({ timelines }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="p-4">
      <ol ref={ref} className="relative border-s border-gray-700">
        {timelines.map((timeline, index) => (
          <motion.li
            className="ms-8 mb-8 last:mb-0 group"
            key={index}
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'} // Animate based on inView
            custom={index}
          >
            <motion.span
              className="absolute flex items-center justify-center size-4 rounded-full -start-2 group-hover:bg-red-600 group-hover:ring-4 ring-red-600 bg-gray-700 transition ease-in-out duration-700"
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'} // Animate based on inView
              custom={index}
            >
              {timeline.icon}
            </motion.span>
            <h3 className="mb-1 font-inter tracking-tight font-bold text-gray-200">
              {timeline.link ? (
                <a href={timeline.link} className="hover:underline">
                  {timeline.title}
                </a>
              ) : (
                timeline.title
              )}
            </h3>
            <p className="font-inter text-sm text-gray-400">
              {timeline.description}
            </p>
            <time className="font-inter text-xs text-gray-500">
              {timeline.timePeriod}
            </time>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

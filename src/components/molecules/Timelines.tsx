import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

type TimelineItem = {
  title: string
  description: string
  timePeriod: string
  icon?: React.ReactNode
  link?: string
}

type TimelinesProps = {
  timelines: TimelineItem[]
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      delay: 1 + i * 0.5,
    },
  }),
}

export const Timelines: React.FC<TimelinesProps> = ({ timelines }) => {
  const ref = useRef<HTMLOListElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="p-4">
      <ol ref={ref} className="relative border-s border-gray-700">
        {timelines.map((timeline, index) => (
          <motion.li
            className="ms-8 mb-8 last:mb-0 group"
            key={index}
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={index}
          >
            <motion.span
              className="absolute flex items-center justify-center size-4 rounded-full -start-2 group-hover:bg-red-600 group-hover:ring-4 ring-red-600 bg-gray-700 transition ease-in-out duration-700"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                delay: 1.5 + index * 0.5,
              }}
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

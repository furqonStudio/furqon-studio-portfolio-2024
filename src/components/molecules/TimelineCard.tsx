import { Timeline, TimelineProps } from '../atomic/Timeline'

interface TimelineCardProps {
  timelines: TimelineProps[]
}

export const TimelineCard = ({ timelines }: TimelineCardProps) => {
  return (
    <div className="p-4">
      <ol className="relative border-s border-gray-700">
        {timelines.map((timeline, index) => (
          <Timeline
            key={index}
            title={timeline.title}
            description={timeline.description}
            timePeriod={timeline.timePeriod}
          />
        ))}
      </ol>
    </div>
  )
}

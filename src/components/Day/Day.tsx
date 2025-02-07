import { toFriendlyWeekDate } from '@utils/dates'

export const Day = ({ date }: { date: Date }) => {
  return (
    <>
      <h2>{toFriendlyWeekDate(date)}</h2>
    </>
  )
}

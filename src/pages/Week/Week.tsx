import { useParams } from 'react-router-dom'
import {
  getDatesOfWeek,
  toFriendlyShortWeekDate,
  toFriendlyWeekDate,
} from '@utils/dates'
import { useMemo } from 'react'

export const Week = () => {
  const { year = new Date().getFullYear(), weekNumber = '1' } = useParams()

  const datesOfWeek = useMemo(
    () => getDatesOfWeek(+year, +weekNumber),
    [year, weekNumber],
  )

  if (!year || !weekNumber) {
    return null
  }

  return (
    <>
      <h1>
        {toFriendlyShortWeekDate(datesOfWeek[0])} -{' '}
        {toFriendlyShortWeekDate(datesOfWeek[6])}
      </h1>
      <ul>
        {datesOfWeek.map((date) => (
          <li>
            <h2>{toFriendlyWeekDate(date)}</h2>
          </li>
        ))}
      </ul>
    </>
  )
}

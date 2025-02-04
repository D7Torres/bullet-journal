import { useParams, Link } from 'react-router-dom'
import { firstDayOfWeek, lastDayOfWeek } from '@utils/dates'

const weekNumbers = Array.from({ length: 53 }, (_, i) => i + 1)

export const Journal = () => {
  const { year } = useParams()

  if (!year) {
    return null
  }

  return (
    <>
      <h1>Journal {year}</h1>
      <ul>
        {weekNumbers.map((weekNumber) => (
          <li key={weekNumber}>
            <Link to={`/journal/${year}/week/${weekNumber}`}>
              {firstDayOfWeek(+year, weekNumber)} -{' '}
              {lastDayOfWeek(+year, weekNumber)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

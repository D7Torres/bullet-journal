import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()
const fromYear = currentYear - 5
const years = Array.from({ length: 10 }, (_, i) => fromYear + i)

export const Journals = () => (
  <>
    <h1>Journals</h1>
    <ul>
      {years.map((year) => (
        <li key={year}>
          <Link to={`/journal/${year}`}>{year}</Link>
        </li>
      ))}
    </ul>
  </>
)

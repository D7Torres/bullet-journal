import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Week } from './Week'

const year = 2025
const weekNumber = 7
const memoryRouter = createMemoryRouter(
  [
    {
      path: `/journal/:year/week/:weekNumber`,
      element: <Week />,
    },
  ],
  {
    initialEntries: [`/journal/${year}/week/${weekNumber}`],
  },
)

describe('Week page', () => {
  test('renders all the days of the week in the right order', () => {
    render(<RouterProvider router={memoryRouter} />)

    const headings = screen.getAllByRole('heading', { level: 2 })

    expect(headings).toHaveLength(7)
    expect(headings[0]).toHaveTextContent('Monday, 10')
    expect(headings[1]).toHaveTextContent('Tuesday, 11')
    expect(headings[2]).toHaveTextContent('Wednesday, 12')
    expect(headings[3]).toHaveTextContent('Thursday, 13')
    expect(headings[4]).toHaveTextContent('Friday, 14')
    expect(headings[5]).toHaveTextContent('Saturday, 15')
    expect(headings[6]).toHaveTextContent('Sunday, 16')
  })
})

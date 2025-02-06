import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Week } from './Week'
import { describe } from 'node:test'

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

describe('Journal page', () => {
  test('Journal page renders', () => {
    const { asFragment } = render(<RouterProvider router={memoryRouter} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

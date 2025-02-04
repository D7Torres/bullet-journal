import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Journal } from './Journal'
import { describe } from 'node:test'

const year = 2025
const memoryRouter = createMemoryRouter(
  [
    {
      path: `/journal/:year`,
      element: <Journal />,
    },
  ],
  {
    initialEntries: [`/journal/${year}`],
  },
)

describe('Journal page', () => {
  test('Journal page renders', () => {
    const { asFragment } = render(<RouterProvider router={memoryRouter} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

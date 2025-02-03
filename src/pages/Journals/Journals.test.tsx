import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Journals } from './Journals'
import { describe } from 'node:test'

const memoryRouter = createMemoryRouter(
  [
    {
      path: '/',
      element: <Journals />,
    },
  ],
  {
    initialEntries: ['/'],
  },
)

describe('Journals page', () => {
  test('Journals page renders', () => {
    const { asFragment } = render(<RouterProvider router={memoryRouter} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Journals } from './Journals'

test('Journals page renders', () => {
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

  const { asFragment } = render(<RouterProvider router={memoryRouter} />)
  expect(asFragment()).toMatchSnapshot()
})

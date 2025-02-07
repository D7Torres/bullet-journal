import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Day } from './Day'
import { describe } from 'node:test'

const date = new Date('2021-01-01')

describe('Journal page', () => {
  test('Journal page renders', () => {
    const { asFragment } = render(<Day date={date} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

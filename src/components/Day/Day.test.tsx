import { render } from '@testing-library/react'
import { vi } from 'vitest'
import { Day } from './Day'
import { describe } from 'node:test'
import type { Item } from '@api/items'
import '@testing-library/jest-dom'

const date = new Date('2021-01-01')
const otherDate = new Date('2021-01-02')
const mockItems: Record<string, Item[]> = {
  '2021-01-01': [
    { id: 1, date, text: 'Item 1', isSoftDeleted: false },
    { id: 2, date, text: 'Item 2', isSoftDeleted: false },
  ],
  '2021-01-02': [
    {
      id: 3,
      date: otherDate,
      text: 'Item belonging to a different date',
      isSoftDeleted: false,
    },
  ],
}

describe('Day component', () => {
  beforeAll(() => {
    vi.mock('@api/items', () => ({
      getItemsByDate: (date: Date) => {
        const dateString = date.toISOString().split('T')[0]

        return mockItems[dateString]
      },
    }))
  })

  test('renders', () => {
    const { asFragment } = render(<Day date={date} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('items on that day are visible', () => {
    const { getByText } = render(<Day date={date} />)

    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
  })

  test('items on other days are not visible', () => {
    const { queryByText } = render(<Day date={date} />)

    expect(
      queryByText('Item belonging to a different date'),
    ).not.toBeInTheDocument()
  })
})

import { getItemsByDate } from '@api/items'
import type { Item } from '@api/items'
import { toFriendlyWeekDate } from '@utils/dates'
import { useEffect, useState } from 'react'

export const Day = ({ date }: { date: Date }) => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const items = getItemsByDate(date)
    setItems(items)
  }, [date])

  return (
    <>
      <h2>{toFriendlyWeekDate(date)}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  )
}

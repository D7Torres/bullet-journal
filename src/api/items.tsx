interface SimpleItem {
  id: number
  date: Date
  text: string
  isSoftDeleted: boolean
}

interface CompletableItem extends SimpleItem {
  isDone: boolean
}

interface TimedItem extends SimpleItem {
  time: Date
}

type Item = SimpleItem | CompletableItem | TimedItem

// Returns a string like "2021-12-31"
const dateToString = (date: Date) => {
  return date.toISOString().split('T')[0]
}

export const getItemsByDate = (date: Date) => {
  const items = JSON.parse(
    localStorage.getItem(`items-${dateToString(date)}`) || '[]',
  ) as Item[]

  return items
}

export const addItemToDate = (item: Item, date: Date) => {
  const items = getItemsByDate(date)
  localStorage.setItem(
    `items-${dateToString(date)}`,
    JSON.stringify([...items, item]),
  )
}

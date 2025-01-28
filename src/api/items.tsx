import { getDatesOfWeek, dayOfTheWeekStartingInMonday } from './utils/dates'

type Item = {
  date: Date
  text: string
}

export const getItems = () => {
  const items = JSON.parse(localStorage.getItem('items') || '[]') as Item[]

  return items
}

export const getItemsWithinWeek = async (year: number, weekNumber: number) => {
  const datesOfTheWeek = getDatesOfWeek(year, weekNumber)
  const items = getItems()
  // TODO refactor to do the filtering inside of the reduce
  const weekItems = items.filter(
    (item) =>
      item.date >= datesOfTheWeek[0] &&
      item.date <= datesOfTheWeek[datesOfTheWeek.length - 1],
  )

  const itemsByWeekDay: Record<number, Item[]> = {}
  weekItems.reduce((acc, item) => {
    const dayOfTheWeek = dayOfTheWeekStartingInMonday(item.date)
    if (!acc[dayOfTheWeek]) {
      acc[dayOfTheWeek] = []
    }

    acc[dayOfTheWeek].push(item)

    return acc
  }, itemsByWeekDay)
}

export const addItem = (item: Item) => {
  const items = getItems()
  localStorage.setItem('items', JSON.stringify([...items, item]))
}

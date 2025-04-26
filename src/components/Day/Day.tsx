import { addItem, getItemsByDate } from '@api/items'
import type { Item } from '@api/items'
import { toFriendlyWeekDate } from '@utils/dates'
import { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

export const Day = ({ date }: { date: Date }) => {
  const [items, setItems] = useState<Item[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const items = getItemsByDate(date)
    console.log('>>>', { items })
    setItems(items)
  }, [date])

  const handleItemOnChange = (item: Item, newText: string) => {
    setIsSaving(true)
    saveItemDebounced({ ...item, text: newText })
  }

  const saveItemDebounced = useCallback((item: Item) => {
    debounce(() => {
      addItem(item)
      setIsSaving(false)
    }, 500)()
  }, [])

  return (
    <>
      <h2>{toFriendlyWeekDate(date)}</h2>
      {!isEditing ? (
        <>
          <button onClick={() => setIsEditing(true)}>Write</button>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <button disabled={isSaving} onClick={() => setIsEditing(false)}>
            I'm done
          </button>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <input
                  onChange={(e) => handleItemOnChange(item, e.target.value)}
                  type="text"
                  defaultValue={item.text}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

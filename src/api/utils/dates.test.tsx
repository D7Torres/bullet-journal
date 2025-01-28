import { expect, test } from 'vitest'
import { getDatesOfWeek } from './dates'

const datesToDaysOfTheWeek = (date: Date) => ({
  year: date.getUTCFullYear(),
  month: date.getUTCMonth() + 1,
  day: date.getUTCDate(),
})

test('getDatesOfWeek gets the correct days of the week passed for the specified year', () => {
  const datesOfTheWeek = getDatesOfWeek(2025, 5)
  const daysOfTheWeek = datesOfTheWeek.map(datesToDaysOfTheWeek)

  expect(daysOfTheWeek).toStrictEqual([
    { day: 27, month: 1, year: 2025 },
    { day: 28, month: 1, year: 2025 },
    { day: 29, month: 1, year: 2025 },
    { day: 30, month: 1, year: 2025 },
    { day: 31, month: 1, year: 2025 },
    { day: 1, month: 2, year: 2025 },
    { day: 2, month: 2, year: 2025 },
  ])
})

test('getDatesOfWeek can get days of the previous year', () => {
  const datesOfTheWeek = getDatesOfWeek(2025, 1)
  const daysOfTheWeek = datesOfTheWeek.map(datesToDaysOfTheWeek)

  expect(daysOfTheWeek).toStrictEqual([
    { day: 30, month: 12, year: 2024 },
    { day: 31, month: 12, year: 2024 },
    { day: 1, month: 1, year: 2025 },
    { day: 2, month: 1, year: 2025 },
    { day: 3, month: 1, year: 2025 },
    { day: 4, month: 1, year: 2025 },
    { day: 5, month: 1, year: 2025 },
  ])
})

test('getDatesOfWeek can get days of the next year', () => {
  const datesOfTheWeek = getDatesOfWeek(2025, 53)
  const daysOfTheWeek = datesOfTheWeek.map(datesToDaysOfTheWeek)

  expect(daysOfTheWeek).toStrictEqual([
    { day: 29, month: 12, year: 2025 },
    { day: 30, month: 12, year: 2025 },
    { day: 31, month: 12, year: 2025 },
    { day: 1, month: 1, year: 2026 },
    { day: 2, month: 1, year: 2026 },
    { day: 3, month: 1, year: 2026 },
    { day: 4, month: 1, year: 2026 },
  ])
})

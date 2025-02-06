const dayOfTheWeekStartingInMonday = (date: Date) => {
  // date.getDay() returns 0 for Sunday, 1 for Monday, etc.
  // We want to have Monday as 0, Tuesday as 1, etc.
  return (date.getDay() + 6) % 7
}

export const getDatesOfWeek = (year: number, weekNumber: number) => {
  const firstDayOfYear = new Date(year, 0, 1)
  const daysOffset = dayOfTheWeekStartingInMonday(firstDayOfYear)
  const firstDayOfWeek = new Date(
    Date.UTC(year, 0, 1 + (weekNumber - 1) * 7 - daysOffset),
  )
  const dates = []

  for (let i = 0; i < 7; i++) {
    dates.push(
      new Date(
        Date.UTC(
          firstDayOfWeek.getFullYear(),
          firstDayOfWeek.getMonth(),
          firstDayOfWeek.getDate() + i,
        ),
      ),
    )
  }

  return dates
}

// Given a date, it returns something like: "Monday, 1 Jan"
export const toFriendlyWeekDate = (date: Date) => {
  return `${date.toLocaleDateString('default', { weekday: 'long' })}, ${date.getDate()}`
}

// Given a date, it returns something like: "1 Jan"
export const toFriendlyShortWeekDate = (date: Date) => {
  return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`
}

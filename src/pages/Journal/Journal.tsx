import { useParams } from 'react-router-dom'

export const Journal = () => {
  const { year } = useParams()

  return (
    <>
      <h1>Journal {year}</h1>
    </>
  )
}

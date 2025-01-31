import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Journals } from './pages/Journals/Journals'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Journals />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

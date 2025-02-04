import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Journals } from '@pages/Journals/Journals'
import { Journal } from '@pages/Journal/Journal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Journals />} />
        <Route path="/journal/:year" element={<Journal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

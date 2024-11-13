import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Games from '@/pages/games'
import Contact from '@/pages/contact'
import GameReviewPage from './pages/game-review-page'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game/:gameName" element={<GameReviewPage />} />
      </Routes>
    </BrowserRouter>
  )
}

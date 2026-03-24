import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Practice from './pages/Practice'
import Words from './pages/Words'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/lesson/:id/practice" element={<Practice />} />
          <Route path="/words" element={<Words />} />
        </Routes>
      </main>
    </div>
  )
}

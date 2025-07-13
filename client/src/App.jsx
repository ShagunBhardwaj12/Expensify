import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import './styles/globals.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
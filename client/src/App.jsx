import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Inbox from './pages/Inbox'
import Reports from './pages/Reports'
// import Workspaces from './pages/Workspace'
import Account from './pages/Account'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/inbox" element={<Inbox/>}/>
          <Route path="/reports" element={<Reports/>}/>
          {/* <Route path="/workspaces" element={<Workspaces/>}/> */}
          <Route path="/account" element={<Account/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
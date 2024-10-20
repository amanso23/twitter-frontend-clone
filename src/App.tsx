import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages'
import Layout from './layout/Layout'
import Profile from './pages/Profile'
import Post from './pages/Post'
function App() {
  return (
      <Router>
        <Layout>
          <Routes >
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Navigate to="/home" replace />} />
            <Route path='/:name' element={< Profile />} />
            <Route path='/:name/status/:postId' element={< Post />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App

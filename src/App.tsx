import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home'
import Bookmark from './pages/bookmark'
import Navbar from './components/navbar'

function App() {

  if(window.location.pathname === '/') {
    window.location.pathname = '/home';
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </>
  )
}

export default App

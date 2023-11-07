import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Bookmark from './pages/Bookmark'
import Navbar from './components/Navbar'

function App() {

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

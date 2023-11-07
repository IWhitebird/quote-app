import { Route, Routes } from 'react-router'
import './App.css'
import Tags from './pages/tags'

function App() {

  return (
    <>
    <Routes>
      <Route path="/random" element={<Home />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
    </>
  )
}

export default App

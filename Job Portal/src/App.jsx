import { Routes, Route } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import Home from './components/Home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={ <Home/>} />
      </Route>
    </Routes>
  )
}

export default App

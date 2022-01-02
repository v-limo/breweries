import Homepage from './components/Homepage'
import Map from './components/Map'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import NoMatch from './components/NoMatch'
import BreweryDetails from './components/BreweryDetails'
import Pagination from './components/Pagination'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='map' element={<Map />} />
          <Route path='pagination' element={<Pagination />} />
          <Route path=':id' element={<BreweryDetails />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  )
}

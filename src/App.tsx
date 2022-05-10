import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import BreweryDetails from './pages/BreweryDetails'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import NoMatch from './pages/NoMatch'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path=':id' element={<BreweryDetails />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  )
}

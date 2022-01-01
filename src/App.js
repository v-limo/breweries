import Header from './components/Header'
import Homepage from './components/Homepage'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='text-md bg-gray-300 min-h-screen'>
      <Header></Header>
      <Homepage />
      <Footer />
    </div>
  )
}

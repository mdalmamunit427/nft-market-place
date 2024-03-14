
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import BestSellers from './pages/BestSellers/BestSellers'
import HotProducts from './pages/HotProducts/HotProducts'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <BestSellers />
      <HotProducts />
      <Footer />
    </>
  )
}

export default App

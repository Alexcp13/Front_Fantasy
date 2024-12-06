
import './App.css'
import Footer from './Components/FooterComponent.js/FooterComponents'
import Navbar from './Components/NavBar/Navbar'
import PointsDisplay from './Components/PointsComponents/PointsComponents'

import AppRoutes from './Routes/AppRoutes'

function App() {

  return (
    <>
      <div className='container' >
        <Navbar />
        <PointsDisplay />
        <AppRoutes />
        <Footer />
      </div >

    </>
  )
}

export default App

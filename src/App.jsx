import Rutas from './components/routes/Rutas'
import Navigate from './components/navbar/Navigate.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <>
      <div className='bg-black'>
        <Navigate />
        <Rutas />
        <Footer />
      </div>
    </>
  )
}

export default App

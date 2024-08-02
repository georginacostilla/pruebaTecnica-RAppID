import { Routes, Route } from 'react-router-dom'
import Home from '../../page/home/Home'
import Error404 from '../../page/error404/Error404'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default Rutas
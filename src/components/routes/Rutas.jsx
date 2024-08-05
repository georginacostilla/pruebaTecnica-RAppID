import { Routes, Route } from 'react-router-dom';
import Home from '../../page/home/Home';
import Error404 from '../../page/error404/Error404';
import DetailCard from '../../page/detailCard/DetailCard.jsx';
import Favoritos from '../../page/favoritos/Favoritos.jsx';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/detailCard/:name" element={<DetailCard />} />
        <Route path="/favoritos/:name" element={<Favoritos />} />
      </Routes>
    </>
  )
}

export default Rutas
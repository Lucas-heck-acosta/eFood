import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerfilHioki from './pages/Perfil/Hioki'
import PerfilLaDolce from './pages/Perfil/LaDolceVita'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/italiana" element={<PerfilLaDolce />} />
    <Route path="/perfil/japonesa" element={<PerfilHioki />} />
  </Routes>
)

export default Rotas

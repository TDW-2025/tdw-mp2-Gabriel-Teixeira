import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PokemonList from './pages/PokemonList'
import DigimonList from './pages/DigimonList'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/digimon" element={<DigimonList />} />
      </Routes>
    </Router>
  )
}

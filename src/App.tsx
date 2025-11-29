import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import DigimonList from "./pages/DigimonList";
import DigimonDetail from "./pages/DigimonDetail";
import About from "./pages/About";

import FavoritosPage from "./pages/FavoritosPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pokemon" element={<PokemonList />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="/about" element={<About />} />

      <Route path="/digimon" element={<DigimonList />} />
      <Route path="/digimon/:name" element={<DigimonDetail />} />

      <Route path="/favoritos" element={<FavoritosPage />} />
    </Routes>
  );
}

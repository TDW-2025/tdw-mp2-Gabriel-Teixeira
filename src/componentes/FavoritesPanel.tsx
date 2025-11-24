import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { addFavorito, removeFavorito } from "../slices/favoritosSlice";
import FavoriteCard from "./FavoriteCard";
import styles from "../styles/Home.module.css";

interface FavoritoItem {
  nome: string;
  imagem: string;
  tipo: "pokemon" | "digimon";
}

interface Props {
  favoritos: FavoritoItem[];
}

export default function FavoritesPanel({ favoritos }: Props) {
  const dispatch = useDispatch();

  const favoritosRedux = useSelector((state: RootState) => state.favoritos.items);

  const [showPokemon, setShowPokemon] = useState(true);
  const [showDigimon, setShowDigimon] = useState(true);

  const filtered = favoritos.filter((fav) => {
    if (fav.tipo === "pokemon" && showPokemon) return true;
    if (fav.tipo === "digimon" && showDigimon) return true;
    return false;
  });

  const toggleFavorito = (nome: string) => {
    if (favoritosRedux.includes(nome)) dispatch(removeFavorito(nome));
    else dispatch(addFavorito(nome));
  };

  return (
    <div className={styles.panelContent}>
      <span className={styles.textoGradiente}>DIGIMON OU POKEMON</span>

      <div className={styles.favoritesRow}>
        <h4>TEUS FAVORITOS</h4>

        <label className={styles.favOption}>
          <input
            type="checkbox"
            checked={showPokemon}
            onChange={() => setShowPokemon(!showPokemon)}
          />
          Pokémon
        </label>

        <label className={styles.favOption}>
          <input
            type="checkbox"
            checked={showDigimon}
            onChange={() => setShowDigimon(!showDigimon)}
          />
          Digimon
        </label>
      </div>

      <div className={styles.favoritesCards}>
        {filtered.length ? (
          filtered.map((fav) => (
            <FavoriteCard
              key={fav.nome}
              nome={fav.nome}
              imagem={fav.imagem}
              isFavorito={favoritosRedux.includes(fav.nome)}
              onToggle={() => toggleFavorito(fav.nome)}
            />
          ))
        ) : (
          <p style={{ marginTop: "20px", color: "gray" }}>
            Nenhum favorito selecionado
          </p>
        )}
      </div>

      <div className={styles.aboutPage}>About page</div>
    </div>
  );
}

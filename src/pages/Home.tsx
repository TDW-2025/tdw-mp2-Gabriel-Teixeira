import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { HeartStraight } from "phosphor-react";

export default function Home() {
  const [showPokemon, setShowPokemon] = useState(true);
  const [showDigimon, setShowDigimon] = useState(true);

  const favoritos = [
    { nome: "WarGreymon", imagem: "./src/assets/hasetai.avif", tipo: "digimon" },
    { nome: "Pikachu", imagem: "./src/assets/pikachu.avif", tipo: "pokemon" },
    { nome: "Agumon", imagem: "./src/assets/agumon.avif", tipo: "digimon" },
    { nome: "Charizard", imagem: "./src/assets/charizard.avif", tipo: "pokemon" },
    { nome: "Gabumon", imagem: "./src/assets/gabumon.avif", tipo: "digimon" },
    { nome: "Charizard", imagem: "./src/assets/charizard.avif", tipo: "pokemon" },
    { nome: "Gabumon", imagem: "./src/assets/gabumon.avif", tipo: "digimon" },
  ];

  const filteredFavoritos = favoritos.filter((fav) => {
    if (fav.tipo === "pokemon" && showPokemon) return true;
    if (fav.tipo === "digimon" && showDigimon) return true;
    return false;
  });

  return (
    <div className={styles.fullpageRoot}>
      <Link to="/digimon" className={`${styles.fullpageStrip} ${styles.left}`}>
        <img src="./src/assets/digimon.gif" className={styles.hoverGif} />
        <div className={styles.panelContent}>
          <h2>Digimon</h2>
          <button>Escolhe o teu digimon</button>
        </div>
      </Link>

      <div className={`${styles.fullpageStrip} ${styles.center}`}>
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
            {filteredFavoritos.length > 0 ? (
              filteredFavoritos.map((fav, index) => (
                <div key={index} className={styles.staticDigimon}>
                  <img
                    src={fav.imagem}
                    alt={fav.nome}
                    style={{ width: "180px", borderRadius: "12px" }}
                  />
                  <h3>{fav.nome}</h3>
                  <HeartStraight size={32} color="#c62a2a" weight="duotone" />
                  coracao favorito
                </div>
              ))
            ) : (
              <p style={{ marginTop: "20px", color: "gray" }}>
                Nenhum favorito selecionado
              </p>
            )}
          </div>

          <div className={styles.aboutPage}>
            About page  
          </div>
        </div>
      </div>

      <Link to="/pokemon" className={`${styles.fullpageStrip} ${styles.right}`}>
        <img src="./src/assets/pokemon.gif" className={styles.hoverGif} />
        <div className={styles.panelContent}>
          <h2>Pokémon</h2>
          <button>Escolhe o teu pokemon</button>
        </div>
      </Link>
    </div>
  );
}

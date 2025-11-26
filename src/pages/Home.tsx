// import { Link } from "react-router-dom";
// import { useGetDigimonListQuery } from "../services/digimonApi";
// import FavoritesPanel from "../componentes/FavoritesPanel";
// import { useSelector } from "react-redux";
// import type { RootState } from "../store";
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   const favoritos = useSelector((state: RootState) => state.favoritos.items);

//   const { data: digimons } = useGetDigimonListQuery();
//   const favoritosDigimon = digimons
//     ?.filter((d) => favoritos.includes(d.name))
//     .map((d) => ({
//       nome: d.name,
//       imagem: d.img,
//       tipo: "digimon" as const,
//     })) ?? [];

//   return (
//     <div className={styles.fullpageRoot}>
      
//       <Link to="/digimon" className={`${styles.fullpageStrip} ${styles.left}`}>
//         <img src="./src/assets/digimon.gif" className={styles.hoverGif} />
//         <div className={styles.panelContent}>
//           <h2>Digimon</h2>
//           <button>Escolhe o teu digimon</button>
//         </div>
//       </Link>

//       <div className={`${styles.fullpageStrip} ${styles.center}`}>
//         <FavoritesPanel favoritos={favoritosDigimon} />
//       </div>

//       <Link to="/pokemon" className={`${styles.fullpageStrip} ${styles.right}`}>
//         <img src="./src/assets/pokemon.gif" className={styles.hoverGif} />
//         <div className={styles.panelContent}>
//           <h2>Pokémon</h2>
//           <button>Escolhe o teu pokemon</button>
//         </div>
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useGetDigimonListQuery } from "../services/digimonApi";
import FavoritesPanel from "../componentes/FavoritesPanel";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import styles from "../styles/Home.module.css";

export default function Home() {
  const favoritos = useSelector((state: RootState) => state.favoritos.items);

  const { data: digimons } = useGetDigimonListQuery();
  const favoritosDigimon = digimons
    ?.filter((d) => favoritos.includes(d.name))
    .map((d) => ({
      nome: d.name,
      imagem: d.img,
      tipo: "digimon" as const,
    })) ?? [];

  return (
    <div className={styles.fullpageRoot}>
      <Link to="/digimon" className={`${styles.fullpageStrip} ${styles.left}`}>
        <img src="./src/assets/digimon.gif" className={styles.hoverGif} alt="Digimon GIF"/>
        <div className={styles.panelContent}>
          <h2>Digimon</h2>
          <button>Escolhe o teu digimon</button>
        </div>
      </Link>

      <div className={`${styles.fullpageStrip} ${styles.center}`}>
        <FavoritesPanel favoritos={favoritosDigimon} />
      </div>

      <Link to="/pokemon" className={`${styles.fullpageStrip} ${styles.right}`}>
        <img src="./src/assets/pokemon.gif" className={styles.hoverGif} alt="Pokémon GIF"/>
        <div className={styles.panelContent}>
          <h2>Pokémon</h2>
          <button>Escolhe o teu pokemon</button>
        </div>
      </Link>
    </div>
  );
}
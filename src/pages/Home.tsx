import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import styles from "../styles/Home.module.css";
import { voteForDigimon, voteForPokemon } from "../slices/votingSlice";
import digimonGif from "../assets/digimon.gif";
import pokemonGif from "../assets/pokemon.gif";
export default function Home() {
  const dispatch = useDispatch();

  const digimonVotes = useSelector(
    (state: RootState) => state.voting.digimonVotes,
  );
  const pokemonVotes = useSelector(
    (state: RootState) => state.voting.pokemonVotes,
  );

  const totalVotes = digimonVotes + pokemonVotes;
  const digimonPercentage =
    totalVotes > 0 ? (digimonVotes / totalVotes) * 100 : 50;

  const handleVote = (team: "digimon" | "pokemon") => {
    if (team === "digimon") {
      dispatch(voteForDigimon());
    } else {
      dispatch(voteForPokemon());
    }
  };

  return (
    <div className={styles.fullpageRoot}>
      <Link to="/digimon" className={`${styles.fullpageStrip} ${styles.left}`}>
        <img src={digimonGif} className={styles.hoverGif} alt="Digimon GIF" />
        <div className={styles.panelContent}>
          <h2>Digimon</h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleVote("digimon");
            }}
          >
            VOTAR EM DIGIMON
          </button>
        </div>
      </Link>

      <div className={`${styles.fullpageStrip} ${styles.center}`}>
        <h2 className={styles.textoGradiente}>PLACAR DA GUERRA</h2>

        <div className={styles.votePanel}>
          <div className={styles.scoreRow}>
            <span className={`${styles.scoreCount} ${styles.digimonScore}`}>
              {digimonVotes}
            </span>
            <span className={`${styles.scoreCount} ${styles.pokemonScore}`}>
              {pokemonVotes}
            </span>
          </div>

          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${digimonPercentage}%` }}
            ></div>
          </div>

          <p className={styles.voteMessage}>
            Clique no botão de voto ou no painel para ver a lista!
          </p>

          <div className={styles.voteLinkContainer}>
            <Link to="/digimon" className={styles.voteLink}>
              Lista Digimon
            </Link>
            <Link to="/pokemon" className={styles.voteLink}>
              Lista Pokémon
            </Link>
          </div>
        </div>
        <p className={styles.aboutProject}>
          <Link to="/about" className={styles.aboutLink}>
            Detalhes do Projeto e Tecnologias
          </Link>
        </p>
      </div>

      <Link to="/pokemon" className={`${styles.fullpageStrip} ${styles.right}`}>
        <img src={pokemonGif} className={styles.hoverGif} alt="Pokémon GIF" />
        <div className={styles.panelContent}>
          <h2>Pokémon</h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleVote("pokemon");
            }}
          >
            VOTAR EM POKÉMON
          </button>
        </div>
      </Link>
    </div>
  );
}

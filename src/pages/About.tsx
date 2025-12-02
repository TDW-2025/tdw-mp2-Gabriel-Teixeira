import { useNavigate } from "react-router-dom";
import styles from "../styles/About.module.css";
import FundoPokemon from "../assets/FundoPokemon.png";
import DigimonGif from "../assets/digimon.gif";
import PokeballSpin from "../assets/pokemon.gif";

interface CSSProps extends React.CSSProperties {
  "--background-image": string;
}

export default function About() {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      style={{ "--background-image": `url(${FundoPokemon})` } as CSSProps}
    >
      <img
        src={PokeballSpin}
        alt="Pokebola Girando"
        className={styles.floatingPokeball1}
      />
      <img
        src={DigimonGif}
        alt="Digimon Flutuando"
        className={styles.floatingPikachu}
      />

      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className={`${styles.contentBox} ${styles.fadeIn}`}>
        <h1 className={`${styles.mainTitle} ${styles.slideDown}`}>
          Duelo Digital: Plataforma Pokémon vs Digimon
        </h1>

        <p className={`${styles.paragraph} ${styles.fadeInDelay}`}>
          Este projeto foi desenvolvido como parte do curso de
          <strong> Desenvolvimento Web </strong> (MP2), utilizando o ecossistema
          moderno de React, Redux e TypeScript.
          <br />
          <br />O objetivo é proporcionar uma experiência interativa onde os fãs
          podem explorar criaturas e participar da{" "}
          <strong>votação interativa</strong> para decidir qual franquia domina!
        </p>

        <div className={`${styles.highlightBox} ${styles.popIn}`}>
          <h3 className={styles.highlightTitle}>
            🔥 Sistema de Votação (Core do Projeto)
          </h3>
          <p className={styles.highlightText}>
            A votação em tempo real é o coração da aplicação. As escolhas são
            persistidas, permitindo que os usuários vejam o placar dinâmico
            evoluir ao longo do tempo.
          </p>
        </div>

        <h2 className={styles.sectionTitle}>🛠 Tecnologias Utilizadas</h2>
        <ul className={styles.techList}>
          <li className={styles.techItem}>React</li>
          <li className={styles.techItem}>Redux Toolkit</li>
          <li className={styles.techItem}>TypeScript</li>
          <li className={styles.techItem}>React Router</li>
          <li className={styles.techItem}>Phosphor Icons</li>
          <li className={styles.techItem}>CSS Modules</li>
        </ul>

        <h2 className={styles.sectionTitle}>✨ Funcionalidades Chave</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureFocus}>Votação Interativa</span>:
            Votos persistentes com placar em tempo real.
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureFocus}>Duas APIs</span>: Consumo e
            harmonização de dados de Digimon e Pokémon.
          </li>
          <li className={styles.featureItem}>
            Listagem com Paginação e Filtros Avançados (por Tipo e Pesquisa).
          </li>
          <li className={styles.featureItem}>
            Páginas de Detalhe ricas em informações (Estatísticas, Nível/Tipo).
          </li>
          <li className={styles.featureItem}>Sistema de Marcar favoritos ⭐</li>
        </ul>

        <p className={styles.footerText}>
          Sinta-se à vontade para explorar o código-fonte no repositório do
          GitHub e contribuir com melhorias!
        </p>
      </div>
    </div>
  );
}

// src/pages/About/About.tsx
import { useNavigate } from "react-router-dom";
import styles from "../styles/About.module.css"; 
import FundoPokemon from '../assets/FundoPokemon.png'; 

interface CSSProps extends React.CSSProperties {
    '--background-image': string;
}

export default function About() {
  const navigate = useNavigate();

  return (
    <div 
        className={styles.container} 
        style={{ '--background-image': `url(${FundoPokemon})` } as CSSProps}
    >
      <div className={styles.contentBox}>
        
        <button 
          className={styles.backButton} 
          onClick={() => navigate(-1)}
        >
          ← Voltar
        </button>

        <h1 className={styles.mainTitle}>Duelo Digital: Plataforma de Votação Interativa Pokémon vs. Digimon</h1>
        
        <p className={styles.paragraph}>
          Este projeto foi desenvolvido como parte do curso de **Desenvolvimento Web** (MP2), utilizando o 
          ecossistema moderno do React, Redux e TypeScript. 
          <br/><br/>
          O objetivo central é criar uma experiência de alto desempenho onde os fãs podem explorar informações 
          sobre as duas maiores franquias de monstros de bolso e, mais importante, participar da **Votação Interativa** para decidir qual criatura ou franquia se destaca!
        </p>

        <div className={styles.highlightBox}>
            <h3 className={styles.highlightTitle}>A Funcionalidade Principal: O Sistema de Votos</h3>
            <p className={styles.highlightText}>
                O **sistema de votação em tempo real** é o coração da nossa aplicação. Os usuários podem votar em seus 
                Pokémon e Digimon favoritos, criando um placar dinâmico para alimentar a rivalidade 
                amigável entre as comunidades. Esta característica é o foco principal da interatividade do projeto.
            </p>
        </div>

        <h2 className={styles.sectionTitle}>Tecnologias Utilizadas</h2>
        <ul className={styles.techList}>
          <li className={styles.techItem}>React</li>
          <li className={styles.techItem}>Redux Toolkit</li>
          <li className={styles.techItem}>TypeScript</li>
          <li className={styles.techItem}>React Router</li>
          <li className={styles.techItem}>Phosphor Icons</li>
          <li className={styles.techItem}>CSS Modules</li>
        </ul>

        <h2 className={styles.sectionTitle}>Outras Funcionalidades</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}><span className={styles.featureFocus}>Votação Interativa:</span> O core do projeto, permitindo o engajamento direto dos fãs.</li> 
          <li className={styles.featureItem}>Listagem de Pokémon e Digimon com paginação eficiente.</li>
          <li className={styles.featureItem}>Detalhes individuais para cada criatura.</li>
          <li className={styles.featureItem}>Sistema de favoritos para marcar suas criaturas preferidas.</li>
        </ul>
        
        <p className={styles.footerText}>
          Sinta-se à vontade para explorar o código-fonte no repositório do GitHub
          e contribuir com melhorias!
        </p>
      </div>
    </div>
  );
}
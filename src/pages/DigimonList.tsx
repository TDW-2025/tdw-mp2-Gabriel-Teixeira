import styles from "../styles/ListPage.module.css";

export default function DigimonList() {
  return (
    <div className={styles.container}>
      <h1>Lista de Digimon</h1>
      <p>Página de listagem de Digimon (placeholder)</p>
      <ul>
        <li>Agumon</li>
        <li>Gabumon</li>
        <li>Patamon</li>
        <li>Gomamon</li>
      </ul>
    </div>
  )
}

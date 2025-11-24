import styles from "../styles/ListPage.module.css";

export default function PokemonList() {
  return (
    <div className={styles.container}>
      <h1>Lista de Pokémon</h1>
      <p>Página de listagem de Pokémon (placeholder)</p>
      <ul>
        <li>Pikachu</li>
        <li>Charmander</li>
        <li>Bulbasaur</li>
        <li>Squirtle</li>
      </ul>
    </div>
  )
}

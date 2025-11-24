import { useParams } from 'react-router-dom'
import { useGetPokemonByNameQuery } from '../services/pokemonApi'
import styles from '../styles/PokemonDetail.module.css'
import stylesGlobal from '../styles/Global.module.css'
import type { Pokemon } from '../types/pokemon'

export default function PokemonDetail() {
  const { name } = useParams<{ name: string }>()
  const { data, isLoading, isError } = useGetPokemonByNameQuery(name!)

  if (isLoading) return <p style={{ textAlign: 'center' }}>Carregando...</p>
  if (isError || !data) return <p style={{ textAlign: 'center' }}>Erro ao carregar Pokémon</p>

  const pokemon: Pokemon = data 

  return (
    <div className={stylesGlobal.containerPokemom}>
      <h1 className={styles.title}>{pokemon.name}</h1>

      <div className={styles.card}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.img} />
        <img src={pokemon.sprites.back_default} alt={pokemon.name} className={styles.img} />

        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>

        <div className={styles.types}>
          {pokemon.types.map((t) => (
            <span key={t.type.name} className={styles.type}>{t.type.name}</span>
          ))}
        </div>

        <div className={styles.stats}>
          <h3>Estatísticas</h3>
          {pokemon.stats.map((s) => (
            <p key={s.stat.name} className={styles.stat}>
              {s.stat.name}: {s.base_stat}
            </p>
          ))}
        </div>

        <div className={styles.abilities}>
          <h3>Habilidades</h3>
          {pokemon.abilities.map((a) => (
            <span key={a.ability.name} className={styles.ability}>
              {a.ability.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

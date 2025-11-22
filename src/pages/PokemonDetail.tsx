import { useParams } from 'react-router-dom'

export default function PokemonDetail() {
  const { name } = useParams()
  return (
    <div style={{ padding: '20px' }}>
      <h1>Detalhes do Pokémon</h1>
      <p>Mostrando detalhes para: {name}</p>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Digidex</h1>
      <p>Explora Digimon e Pokémon usando APIs públicas.</p>

      <div>
        <Link to="/digimon">
          <button>Ir para Digimon</button>
        </Link>

        <Link to="/pokemon" style={{ marginLeft: '10px' }}>
          <button>Ir para Pokémon</button>
        </Link>
      </div>
    </div>
  )
}

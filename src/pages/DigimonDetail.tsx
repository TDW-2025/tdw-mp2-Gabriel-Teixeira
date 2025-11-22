import { useParams } from 'react-router-dom'

export default function DigimonDetail() {
  const { name } = useParams()
  return (
    <div style={{ padding: '20px' }}>
      <h1>Detalhes do Digimon</h1>
      <p>Mostrando detalhes para: {name}</p>
    </div>
  )
}

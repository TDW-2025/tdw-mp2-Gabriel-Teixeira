import { Link } from "react-router-dom";
import styles from "../styles/PokemonList.module.css";

interface Props {
  name: string;
  image: string | null;
  isFavorite: boolean;
  isCaught: boolean;
  onToggleFavorite: (name: string) => void;
  onToggleCaught: (name: string) => void;
  showDetailsButton?: boolean;
}

export default function PokemonCard({
  name,
  image,
  isFavorite,
  isCaught,
  onToggleFavorite,
  onToggleCaught,
  showDetailsButton = true,
}: Props) {
  return (
    <li className={styles.listItem}>
      <img src={image ?? ""} alt={name} className={styles.img} />
      <p className={styles.name}>{name}</p>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        <button className={styles.detailsButton} onClick={() => onToggleFavorite(name)}>
          {isFavorite ? "★ Favorito" : "☆ Favorito"}
        </button>
        <button className={styles.detailsButton} onClick={() => onToggleCaught(name)}>
          {isCaught ? "✔ Apanhado" : "➕ Apanhar"}
        </button>
      </div>
      {showDetailsButton && (
        <Link to={`/pokemon/${name}`}>
          <button className={styles.detailsButton}>Ver Detalhes</button>
        </Link>
      )}
    </li>
  );
}

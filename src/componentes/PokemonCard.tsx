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
      <div className={styles.cardButtonsContainer}>
        <button
          className={`${styles.cardButton} ${isFavorite ? styles.favoriteActive : styles.favoriteInactive}`}
          onClick={() => onToggleFavorite(name)}
        >
          {isFavorite ? "★ Favorito" : "☆ Favorito"}
        </button>
        <button
          className={`${styles.cardButton} ${isCaught ? styles.caughtActive : styles.caughtInactive}`}
          onClick={() => onToggleCaught(name)}
        >
          {isCaught ? "✔ Apanhado" : "➕ Apanhar"}
        </button>
      </div>
      {showDetailsButton && (
        <Link to={`/pokemon/${name}`} className={styles.detailsLinkButton}>
          Ver Detalhes
        </Link>
      )}
    </li>
  );
}
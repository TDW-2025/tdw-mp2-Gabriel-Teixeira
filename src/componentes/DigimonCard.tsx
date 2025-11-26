import { HeartStraight } from "phosphor-react";
import styles from "../styles/ListPage.module.css";
import stylesGolbal from "../styles/Global.module.css";

interface DigimonCardProps {
  name: string;
  img: string;
  isFavorito: boolean;
  onToggleFavorito: () => void;
  onClick?: () => void;
}

export default function DigimonCard({
  name,
  img,
  isFavorito,
  onToggleFavorito,
  onClick,
}: DigimonCardProps) {
  return (
    <li className={stylesGolbal.listItem}>
      <div className={styles.cardContent} onClick={onClick}>
        <img src={img} alt={name} className={styles.digimonImg} />
        <p>{name}</p>
      </div>

      <button
        className={styles.favButton}
        onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito();
        }}
        >
        <HeartStraight
            size={28}
            weight="duotone"
            color={isFavorito ? "red" : "#666"}
        />
        </button>

    </li>
  );
}

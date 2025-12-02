import { HeartStraight } from "phosphor-react";
import styles from "../styles/Home.module.css";

interface Props {
  nome: string;
  imagem: string;
  isFavorito: boolean;
  onToggle: () => void;
}

export default function FavoriteCard({
  nome,
  imagem,
  isFavorito,
  onToggle,
}: Props) {
  return (
    <div className={styles.staticDigimon}>
      <img
        src={imagem}
        alt={nome}
        style={{ width: "180px", borderRadius: "12px" }}
      />

      <h3>{nome}</h3>

      <button onClick={onToggle}>
        <HeartStraight
          size={32}
          color={isFavorito ? "red" : "#666"}
          weight="duotone"
        />
      </button>
    </div>
  );
}

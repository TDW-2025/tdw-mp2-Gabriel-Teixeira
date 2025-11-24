import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorito, removeFavorito } from "../slices/favoritosSlice";
import type { RootState } from "../store";
import { HeartStraight } from "phosphor-react";
import { useGetDigimonByNameQuery } from "../services/digimonApi";
import styles from "../styles/DigimonDetail.module.css";
import stylesGolbal from "../styles/Global.module.css";

export default function DigimonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = name ? decodeURIComponent(name) : "";

  const favoritos = useSelector((state: RootState) => state.favoritos.items);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetDigimonByNameQuery(decodedName);

  if (isLoading) return <p className={styles.message}>Carregando detalhes...</p>;
  if (isError) return <p className={styles.message}>Erro ao carregar detalhes.</p>;
  if (!data || data.length === 0) return <p className={styles.message}>Digimon não encontrado.</p>;

  const digimon = data[0];

  const toggleFavorito = () => {
    if (favoritos.includes(digimon.name)) dispatch(removeFavorito(digimon.name));
    else dispatch(addFavorito(digimon.name));
  };

  return (
    <div className={stylesGolbal.container}>
      <button className={stylesGolbal.backButton} onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className={stylesGolbal.card}>
        <h1 className={styles.name}>{digimon.name}</h1>

        <img src={digimon.img} alt={digimon.name} className={styles.image} />

        <button className={styles.favButton} onClick={toggleFavorito}>
          <HeartStraight
            size={34}
            color={favoritos.includes(digimon.name) ? "red" : "#c62a2a"}
            weight="duotone"
          />
        </button>

        <p className={styles.level}>Nível: {digimon.level}</p>
      </div>
    </div>
  );
}

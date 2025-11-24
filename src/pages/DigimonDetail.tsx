import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorito, removeFavorito } from "../slices/favoritosSlice";
import type { RootState } from "../store";
import { HeartStraight } from "phosphor-react";
import { useGetDigimonByNameQuery } from "../services/digimonApi";
import styles from "../styles/DigimonDetail.module.css";
import stylesGlobal from "../styles/Global.module.css";


export default function DigimonDetail() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const decodedName = name ? decodeURIComponent(name) : "";

  const favoritos = useSelector((state: RootState) => state.favoritos.items);
  const dispatch = useDispatch();

  // data: Digimon | undefined
  const { data: digimon, isLoading, isError } = useGetDigimonByNameQuery(decodedName);

  if (isLoading) return <p className={styles.message}>Carregando detalhes...</p>;
  if (isError) return <p className={styles.message}>Erro ao carregar detalhes.</p>;
  if (!digimon) return <p className={styles.message}>Digimon não encontrado.</p>;

  const toggleFavorito = () => {
    if (favoritos.includes(digimon.name)) dispatch(removeFavorito(digimon.name));
    else dispatch(addFavorito(digimon.name));
  };

  return (
    <div className={stylesGlobal.container}>
      <button className={stylesGlobal.backButton} onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className={stylesGlobal.card}>
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

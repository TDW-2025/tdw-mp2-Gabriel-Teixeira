import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import type { RootState } from "../store";
import { useGetDigimonListQuery } from "../services/digimonApi";
import DigimonCard from "../componentes/DigimonCard"; 
import styles from "../styles/ListPage.module.css"; 
import stylesGlobal from "../styles/Global.module.css";

export default function FavoritosPage() {
  const navigate = useNavigate();
  const favoritos = useSelector((state: RootState) => state.favoritos.items);
  
  const { data: allDigimon, isLoading, isError } = useGetDigimonListQuery();

  if (isLoading) return <p className={stylesGlobal.containerDigimon}>Carregando dados...</p>;
  if (isError) return <p className={stylesGlobal.containerDigimon}>Erro ao carregar lista de Digimons.</p>;

  const favoritosData = allDigimon?.filter(digimon => 
    favoritos.includes(digimon.name)
  );

  return (
    <div className={stylesGlobal.containerDigimon}>
      <h1 className={styles.title}>💖 Meus Digimons Favoritos</h1>
      
      <button className={stylesGlobal.backButton} onClick={() => navigate(-1)}>
        ← Voltar
      </button>
      
      {favoritosData && favoritosData.length === 0 ? (
        <p className={styles.noResults}>
          Você ainda não adicionou nenhum Digimon aos favoritos.
        </p>
      ) : (
        <ul className={styles.list}>
          {favoritosData?.map((digimon) => (
            <Link
              to={`/digimon/${encodeURIComponent(digimon.name)}`}
              key={digimon.name}
              className={styles.itemLink}
            >
              <DigimonCard
                name={digimon.name}
                img={digimon.img}
                isFavorito={favoritos.includes(digimon.name)} 
                onToggleFavorito={() => {}}
              />
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
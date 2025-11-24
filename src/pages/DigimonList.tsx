import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorito, removeFavorito } from "../slices/favoritosSlice";
import type { RootState } from "../store";
import { useGetDigimonListQuery } from "../services/digimonApi";
import DigimonCard from "../componentes/DigimonCard";
import styles from "../styles/ListPage.module.css";
import stylesGolbal from "../styles/Global.module.css";


export default function DigimonList() {
  const { data, isLoading, isError } = useGetDigimonListQuery();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const favoritos = useSelector((state: RootState) => state.favoritos.items);
  const dispatch = useDispatch();

  const toggleFavorito = (name: string) => {
    if (favoritos.includes(name)) dispatch(removeFavorito(name));
    else dispatch(addFavorito(name));
  };

  if (isLoading) return <p>Carregando digimons...</p>;
  if (isError) return <p>Erro ao carregar digimons.</p>;

  const filteredData = data
    ?.filter((digimon) =>
      digimon.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 8);

  return (
    <div className={stylesGolbal.container}>
      <h1 className={styles.title}>Lista de Digimon</h1>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Pesquisar Digimon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <button className={stylesGolbal.backButton} onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <ul className={styles.list}>
        {filteredData?.map((digimon) => (
          <Link
            to={`/digimon/${encodeURIComponent(digimon.name)}`}
            key={digimon.name}
            className={styles.itemLink}
          >
            <DigimonCard
              name={digimon.name}
              img={digimon.img}
              isFavorito={favoritos.includes(digimon.name)}
              onToggleFavorito={() => toggleFavorito(digimon.name)}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

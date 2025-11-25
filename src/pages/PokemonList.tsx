import styles from "../styles/PokemonList.module.css";
import stylesGlobal from "../styles/Global.module.css";
import { useGetPokemonListQuery } from "../services/pokemonApi";

import PokemonCard from "../componentes/PokemonCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite, toggleCaught } from "../slices/pokemonSlice";
import type { RootState } from "../store/index";

interface PokemonListResult {
  name: string;
  url: string;
}

interface PokemonWithImage {
  name: string;
  image: string | null;
}

export default function PokemonList() {
  const { data: listData, isLoading, isError } = useGetPokemonListQuery(200);
  const [pokemonList, setPokemonList] = useState<PokemonWithImage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] =
    useState<"list" | "favorites" | "caught">("list");

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const favorites: string[] = useSelector(
    (state: RootState) => state.pokemonStatus.favorites ?? []
  );
  const caught: string[] = useSelector(
    (state: RootState) => state.pokemonStatus.caught ?? []
  );

  const itemsPerPage = 25;

  useEffect(() => {
    if (!listData) return;

    Promise.all(
      listData.results.map(async (pokemon: PokemonListResult) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return {
          name: data.name,
          image: data.sprites.front_default,
        } as PokemonWithImage;
      })
    ).then(setPokemonList);
  }, [listData]);

  const handleToggleFavorite = (name: string) => {
    dispatch(toggleFavorite(name));
  };

  const handleToggleCaught = (name: string) => {
    dispatch(toggleCaught(name));
  };

  if (isLoading)
    return <p className={styles.loadingFallback}>Carregando Pokémon...</p>;
  if (isError)
    return <p className={styles.loadingFallback}>Erro ao carregar Pokémon.</p>;

  const totalPages = Math.ceil(pokemonList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPokemons = pokemonList.slice(startIndex, startIndex + itemsPerPage);

  const displayedPokemons =
    (activeTab === "list"
      ? currentPokemons
      : activeTab === "favorites"
      ? pokemonList.filter((p) => favorites.includes(p.name))
      : pokemonList.filter((p) => caught.includes(p.name))
    ).filter((p) => p.name.includes(searchTerm.toLowerCase()));

  return (
    <div className={stylesGlobal.containerPokemom}>
      <div className={styles.pokedex}>
        <div className={styles.pokedexTop}>
          <div className={styles.blueLight} />
          <div className={styles.topRightGadgets} />
        </div>

        <div className={styles.pokedexBody}>
          <div className={styles.sideLeft} />

          <div className={styles.screen}>
            <div className={styles.screenHeader}>
              <h1 className={styles.title}>Pokédex</h1>
            </div>

            <div className={styles.tabs}>
              <button
                className={styles.detailsButton}
                style={{ background: activeTab === "list" ? "#d50000" : "#ff0000" }}
                onClick={() => setActiveTab("list")}
              >
                Lista
              </button>

              <button
                className={styles.detailsButton}
                style={{ background: activeTab === "favorites" ? "#d50000" : "#ff0000" }}
                onClick={() => setActiveTab("favorites")}
              >
                Favoritos
              </button>

              <button
                className={styles.detailsButton}
                style={{ background: activeTab === "caught" ? "#d50000" : "#ff0000" }}
                onClick={() => setActiveTab("caught")}
              >
                Apanhados
              </button>
              
              <input
                type="text"
                placeholder="Pesquisar Pokémon..."
                className={styles.searchBar}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
            </div>

            <div className={styles.screenContent}>
              <ul className={styles.list}>
                {displayedPokemons.map((p) => (
                  <PokemonCard
                    key={p.name}
                    name={p.name}
                    image={p.image}
                    isFavorite={favorites.includes(p.name)}
                    isCaught={caught.includes(p.name)}
                    onToggleFavorite={handleToggleFavorite}
                    onToggleCaught={handleToggleCaught}
                    showDetailsButton={activeTab === "list"}
                  />
                ))}
              </ul>

              {displayedPokemons.length === 0 && (
                <p className={styles.loadingText}>Nenhum Pokémon encontrado.</p>
              )}

              {activeTab === "list" && pokemonList.length > itemsPerPage && (
                <div className={styles.pagination}>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={styles.detailsButton}
                  >
                    Anterior
                  </button>
                  <span>
                    Página {currentPage} de {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={styles.detailsButton}
                  >
                    Próxima
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className={styles.sideRight} />
        </div>

        <div className={styles.pokedexBottom}>
          <div className={styles.bottomButton} />
          <div className={styles.bottomGrille} />
        </div>
      </div>
    </div>
  );
}

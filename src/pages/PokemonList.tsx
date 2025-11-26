import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../componentes/PokemonCard";
import BackButton from "../componentes/BackButton";
import Pagination from "../componentes/Pagination";
import { useGetPokemonListQuery } from "../services/pokemonApi";
import { toggleFavorite, toggleCaught } from "../slices/pokemonSlice";
import type { RootState } from "../store/index";
import styles from "../styles/PokemonList.module.css";
import stylesGlobal from "../styles/Global.module.css";

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
  const favorites = useSelector((state: RootState) => state.pokemonStatus.favorites ?? []);
  const caught = useSelector((state: RootState) => state.pokemonStatus.caught ?? []);

  const itemsPerPage = 25;

  useEffect(() => {
    if (!listData) return;

    const fetchPokemonImages = async () => {
      const result = await Promise.all(
        listData.results.map(async (pokemon: PokemonListResult) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return {
            name: data.name,
            image: data.sprites.front_default,
          };
        })
      );
      setPokemonList(result);
    };

    fetchPokemonImages();
  }, [listData]);

  const handleToggleFavorite = (name: string) => dispatch(toggleFavorite(name));
  const handleToggleCaught = (name: string) => dispatch(toggleCaught(name));

  // Corrigido: atualiza a página ao mudar tab ou searchTerm
  useEffect(() => {
    const resetPage = () => {
      setCurrentPage(1);
    };
    resetPage();
  }, [activeTab, searchTerm]);

  let filteredList =
    activeTab === "list"
      ? pokemonList
      : activeTab === "favorites"
      ? pokemonList.filter((p) => favorites.includes(p.name))
      : pokemonList.filter((p) => caught.includes(p.name));

  filteredList = filteredList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedPokemons = filteredList.slice(startIndex, startIndex + itemsPerPage);

  if (isLoading) return <p className={styles.loadingFallback}>Carregando Pokémon...</p>;
  if (isError) return <p className={styles.loadingFallback}>Erro ao carregar Pokémon.</p>;

  return (
    <div className={stylesGlobal.containerPokemom}>
      <BackButton type="normal" label="Voltar" />

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

              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
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

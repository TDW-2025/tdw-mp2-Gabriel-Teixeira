import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import type { Pokemon } from "../types/pokemon";
import BackButton from "../componentes/BackButton";
import styles from "../styles/PokemonDetail.module.css";
import stylesGlobal from "../styles/Global.module.css";

const statNameMap: { [key: string]: string } = {
  hp: "HP",
  attack: "Ataque",
  defense: "Defesa",
  "special-attack": "Atq. Especial",
  "special-defense": "Def. Especial",
  speed: "Velocidade",
};

export default function PokemonDetail() {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, isError } = useGetPokemonByNameQuery(name!);

  if (isLoading) return <p style={{ textAlign: "center" }}>Carregando...</p>;
  if (isError || !data)
    return <p style={{ textAlign: "center" }}>Erro ao carregar Pokémon</p>;

  const pokemon: Pokemon = data;

  const animatedSprite =
    pokemon.sprites.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default || pokemon.sprites.front_default;

  return (
    <div className={stylesGlobal.containerPokemom}>
      <BackButton type={pokemon.types[0].type.name} label="Voltar" />
      <h1 className={styles.title}>{pokemon.name}</h1>

      <div className={styles.card}>
        <div className={styles.mainContent}>
          <div className={styles.imageInfo}>
            <div className={styles.images}>
              <img
                src={animatedSprite ?? undefined}
                alt={`${pokemon.name} frente`}
                className={`${styles.img} ${styles.animatedImg}`}
              />

              <img
                src={pokemon.sprites.back_default ?? undefined}
                alt={`${pokemon.name} trás`}
                className={styles.img}
              />
            </div>

            <p>
              <strong>Número:</strong> #{pokemon.id}
            </p>
            <p>
              <strong>Altura:</strong> {pokemon.height / 10} m
            </p>
            <p>
              <strong>Peso:</strong> {pokemon.weight / 10} kg
            </p>

            <div className={styles.types}>
              {pokemon.types.map((t) => (
                <span key={t.type.name} className={styles.type}>
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.statsAbilities}>
            <div className={styles.stats}>
              <h3>Estatísticas Base</h3>
              {pokemon.stats.map((s) => (
                <div key={s.stat.name} className={styles.stat}>
                  <p>{statNameMap[s.stat.name] || s.stat.name}:</p>
                  <p>
                    <strong>{s.base_stat}</strong>
                    <span
                      className={styles.statBar}
                      style={
                        {
                          "--stat-width": `${(s.base_stat / 255) * 100}%`,
                        } as React.CSSProperties
                      }
                    ></span>
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.abilities}>
              <h3>Habilidades</h3>
              <div className={styles.abilityList}>
                {pokemon.abilities.map((a) => (
                  <span key={a.ability.name} className={styles.ability}>
                    {a.ability.name} {a.is_hidden && "(Secreta)"}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

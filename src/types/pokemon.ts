export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}

interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  is_hidden: boolean; 
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonStat {
  base_stat: number;
  stat: NamedAPIResource;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}


interface BlackWhiteSprites {
  front_default: string | null;
  back_default: string | null;
  animated: {
    front_default: string | null;
    back_default: string | null;
  };
}

interface VersionSprites {
  'generation-v': {
    'black-white': BlackWhiteSprites;
  };
}

export interface PokemonSprites {
  front_default: string | null;
  back_default: string | null;
  versions?: VersionSprites;
}

export interface Pokemon {
  id: number; 
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[]; 
}
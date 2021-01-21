export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonStat {
  name: string;
  value: number;
}
export interface IPokemonAbility {
  name: string;
  info: string;
}

export interface IPokemonDetails {
  name: string;
  imageUrl: string;
  height: number;
  weight: number;
  types: string[];
  stats: [IPokemonStat];
  //abiliteis: [IPokemonAbility];
  //evolutions: [IPokemon];
}

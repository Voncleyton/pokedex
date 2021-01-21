export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetails {
  name: string;
  image_url: string;
  height: number;
  weight: number;
  types: string[];
  stats: [
    {
      name: string;
      value: number;
    },
  ];
  evolutions: [
    {
      name: string;
      image_url: string;
    },
  ];
  // abiliteis: [
  //   {
  //     name: string;
  //     info: string;
  //   },
  // ];
}

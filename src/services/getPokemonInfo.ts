import axios from 'axios';

export const getBasicInfo = async (pokemon_url: string) => {
  const response = await axios.get(pokemon_url);

  const imageUrl =
    response.data.sprites.other['official-artwork'].front_default;

  const {height: height, weight: weight} = response.data;

  const stats = response.data.stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));

  const types = response.data.types.map((t) => t.type.name);

  return {imageUrl, height, weight, stats, types};
};

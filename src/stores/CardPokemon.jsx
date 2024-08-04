import axios from 'axios';
import { create } from 'zustand';

const useCardPokemon = create((set) => ({
  cardsPoke: [],
  cardPoke: null,
  loading: false,
  error: null,

  getCardsPokemon: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      const cards = await Promise.all(data.results.map(async ({ url }) => {
        const { data } = await axios.get(url);
        return {
          name: data.name,
          url: data.sprites.front_default,
          index: data.id,
        };
      }));
      set({ cardsPoke: cards, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getCardsPokemonByID: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      set({ cardPoke: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useCardPokemon;
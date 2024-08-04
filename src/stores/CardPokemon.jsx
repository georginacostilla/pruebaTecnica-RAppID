import axios from 'axios';
import { create } from 'zustand';

const useCardPokemon = create((set) => ({
  cardsPoke: [],
  favoritos: [],
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

  getCardsPokemonByName: async (name) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.name}`);
      set({ cardPoke: data, loading: false });
      console.log(cardPoke)
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addFavorito: (name) => set((state) => {

    if (state.favoritos.includes(name)) {
      return state;
    }
    return { favoritos: [...state.favoritos, name] };
  }),
}));

export default useCardPokemon;
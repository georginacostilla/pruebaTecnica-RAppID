import axios from 'axios';
import { create } from 'zustand';

const useCardPokemon = create((set) => ({
  cardsPokemon: [],
  cardPokemon: null,
  loading: false,
  error: null,

  getCardPokemon: async () => {
    set({ loading: true, error: null });
    try {
      const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      console.log(resp.data);
      set({ cardsPokemon: resp.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useCardPokemon;
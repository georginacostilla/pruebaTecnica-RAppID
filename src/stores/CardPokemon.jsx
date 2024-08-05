import axios from 'axios';
import { create } from 'zustand';
import { db, doc, setDoc, getDoc } from '../firebaseConfig.js';

const useCardPokemon = create((set) => ({
  cardsPoke: [],
  favoritos: [],
  cardPoke: null,
  loading: false,
  error: null,
  typeFilter: '',

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
          types: data.types.map(typeInfo => typeInfo.type.name),
        };
      }));
      set({ cardsPoke: cards, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  setTypeFilter: (type) => set({ typeFilter: type }),

  getCardsPokemonByName: async (name) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.name}`);
      set({ cardPoke: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  loadFavoritos: async () => {
    try {
      const docRef = doc(db, 'favoritos', 'user');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        set({ favoritos: docSnap.data().favoritos || [] });
      } else {
        set({ favoritos: [] });
      }
    } catch (error) {
      console.error('Error al recuperar favoritos: ', error);
      set({ favoritos: [] });
    }
  },

  saveFavoritos: async (favoritos) => {
    try {
      const docRef = doc(db, 'favoritos', 'user');
      await setDoc(docRef, { favoritos });
      set({ favoritos });
      console.log('Favoritos guardados con éxito en firebase.');
    } catch (error) {
      console.error('Error al guardar favoritos: ', error);
    }
  },

  addFavorito: async (name) => {
    set((state) => {
      if (state.favoritos.includes(name)) {
        return state;
      }
      const newFavoritos = [...state.favoritos, name];
      useCardPokemon.getState().saveFavoritos(newFavoritos);
      return { favoritos: newFavoritos };
    });
  },
}));

export default useCardPokemon;
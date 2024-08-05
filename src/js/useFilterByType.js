import { useState } from 'react';

const useFilterByType = (pokemonList) => {
  const [typeFilter, setTypeFilter] = useState('');

  const filteredPokemons = typeFilter
    ? pokemonList.filter(pokemon => pokemon.types.includes(typeFilter))
    : pokemonList;

  return { filteredPokemons, setTypeFilter };
};

export default useFilterByType;
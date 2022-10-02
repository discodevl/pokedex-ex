import { createContext, useState } from "react";

export const pokeContext = createContext();

function Provider({ children }) {
  const [addedPokemons, setAddedPokemons] = useState([]);

  function addPokemon(pokemon) {
    setAddedPokemons((pokemons) => [pokemon, ...pokemons]);
  }

  function removePokemon(pokemon) {
    setAddedPokemons((pokemons) =>
      pokemons.filter((poke) => poke.id !== pokemon.id)
    );
  }

  const value = {
    addedPokemons,
    addPokemon,
    removePokemon,
  };
  return <pokeContext.Provider value={value}>{children}</pokeContext.Provider>;
}

export default Provider;
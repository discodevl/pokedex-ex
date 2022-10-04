import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const pokeContext = createContext();

function Provider({ children }) {
  const [addedPokemons, setAddedPokemons] = useState([]);

  function addPokemon(pokemon) {
    const hasAlready = addedPokemons.find(poke => poke.id === pokemon.id);
    if(hasAlready) {
      toast.success('Pokemon already added');
      return;
    }
    toast.success('Pokemon added to your list');
    setAddedPokemons((pokemons) => [pokemon, ...pokemons]);
  }

  function removePokemon(id) {
    setAddedPokemons((pokemons) =>
      pokemons.filter((poke) => id !== poke.id)
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

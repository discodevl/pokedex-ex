import { useEffect, useState } from "react";
import { fetcher } from "./utility/fetchData";
import ListItem from "./components/ListItem";
import ListContainer from "./components/ListContainer";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

function App() {
  const [offset, setOffset] = useState(0);
  const [pokemonArr, setPokemonArr] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      try {
        const data = await fetcher(
          `https://pokeapi.co/api/v2/pokemon/?offset=${offset}`
        );
        setPokemonArr(data.results);
        // console.log(data.results);
      } catch (err) {}
    }
    getPokemons();
  }, [offset]);

  async function fetchByName(name) {
    if (!name) setSearchedPokemon(null);
    try {
      const data = await fetcher(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (data.id) {
        setSearchedPokemon(data);
      } else {
        setSearchedPokemon(null);
      }
    } catch (err) {}
  }

  function handlePage(page) {
    const offset = page * 20;
    setOffset(offset);
  }

  return (
    <div className="appContainer">
      <Header filterhandler={fetchByName} />
      <ListContainer title="Pokemons" main>
        {searchedPokemon && (
          <ListItem data={searchedPokemon}>{searchedPokemon.name}</ListItem>
        )}
        {pokemonArr.map((poke, i) => (
          <ListItem key={i} url={poke.url}>
            {poke.name}
          </ListItem>
        ))}
      </ListContainer>
      <Pagination pagehandler={handlePage} />
    </div>
  );
}

export default App;

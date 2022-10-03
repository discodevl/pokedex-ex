import { useEffect, useState } from "react";
import { fetcher } from "./utility/fetchData";
import ListItem from "./components/ListItem";
import ListContainer from "./components/ListContainer";
import ModalFavs from "./components/UI/ModalFavs";
import Header from "./components/UI/Header";
import Pagination from "./components/Pagination";
import Backdrop from "./components/UI/BackDrop";

function App() {
  const [offset, setOffset] = useState(0);
  const [pokemonArr, setPokemonArr] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [isOpenModalFavorites, setIsOpenModalFavorites] = useState(false);

  function toggleModalFavorites() {
    setIsOpenModalFavorites((modal) => !modal);
  }

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
    setOffset((page - 1) * 20);
  }

  function toggleModalMyPokemons() {
    setIsOpenModalFavorites((modal) => !modal);
  }

  return (
    <>
    {isOpenModalFavorites && <Backdrop onCancel={toggleModalMyPokemons}/>}
    {isOpenModalFavorites && <ModalFavs />}
      <div className="appContainer">
        <Header
          filterhandler={fetchByName}
          onClickButton={toggleModalMyPokemons}
        />
        <ListContainer title="Pokemons">
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
    </>
  );
}

export default App;

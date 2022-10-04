import { useContext, useState } from "react";
import ReactDom from "react-dom";
import { pokeContext } from "../../store/pokemons-context";
import PokeballIco from "./PokeballIco";
import styles from "./Modal.module.css";

function Modal({ pokemon }) {
  const context = useContext(pokeContext);
  const [types, setTypes] = useState(pokemon.types);

  function addPokemonToFavs() {
    context.addPokemon(pokemon);
  }

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.body}>
        <div className={styles.nameSection}>
          <h1>#{pokemon.id}</h1>
          <h1>{pokemon.name}</h1>
          <div onClick={addPokemonToFavs}>
            <PokeballIco />
          </div>
        </div>
        <div className={styles.containerImg}>
          <img
            className={styles.img}
            alt={pokemon.name}
            src={
              pokemon.sprites.front_default ||
              require("../../assets/McLMqoqki-2225151428.png")
            }
          />
          <span>HP: {pokemon.stats[0].base_stat}</span>
        </div>
        <div className={styles.stats}>
          <span>ability: {pokemon.abilities[0].ability.name}</span>
          <span>Attack: {pokemon.stats[1].base_stat}</span>
          <span>Defense: {pokemon.stats[2].base_stat}</span>
          <span>Height: {pokemon.height}</span>
          <span>Weight: {pokemon.weight}</span>
          <span>Types:</span>
          <span>
            {types.map((type, i) => {
              return <span key={i}>{type.type.name}</span>;
            })}
          </span>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;

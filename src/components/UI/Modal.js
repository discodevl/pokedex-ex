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
          <div className={styles.wrapperImg}>
            <img
              className={styles.img}
              alt={`${pokemon.name}-front`}
              src={
                pokemon.sprites.front_default ||
                require("../../assets/McLMqoqki-2225151428.png")
              }
            />
            <span className={styles.imgDescription}>front</span>
          </div>
          <div className={styles.wrapperImg}>
            <img
              className={styles.img}
              alt={`${pokemon.name}-back`}
              src={
                pokemon.sprites.back_default ||
                require("../../assets/McLMqoqki-2225151428.png")
              }
            />
            <span className={styles.imgDescription}>back</span>
          </div>
          <div className={styles.wrapperImg}>
            <img
              className={styles.img}
              alt={`${pokemon.name}-frontshiny`}
              src={
                pokemon.sprites.front_shiny ||
                require("../../assets/McLMqoqki-2225151428.png")
              }
            />
            <span className={styles.imgDescription}>front shiny</span>
          </div>
          <div className={styles.wrapperImg}>
            <img
              className={styles.img}
              alt={`${pokemon.name}-backshiny`}
              src={
                pokemon.sprites.back_shiny ||
                require("../../assets/McLMqoqki-2225151428.png")
              }
            />
            <span className={styles.imgDescription}>back shiny</span>
          </div>
        </div>
        <div className={styles.stats}>
          <span className={styles.line}>
            <b>Height</b>: {pokemon.height * 10} cm
          </span>
          <span className={styles.line}>
            <b>Weight</b>: {(pokemon.weight * 0.1).toFixed(2)} kg
          </span>
          <span className={styles.line}>
            <b>Attack</b>: {pokemon.stats[1].base_stat}
          </span>
          <span className={styles.line}>
            <b>Defense</b>: {pokemon.stats[2].base_stat}
          </span>
          <div className={styles.line}>
            <span>
              <b>abilities</b>:
            </span>
            {pokemon.abilities.map((ab, i) => (
              <li key={i}>{ab.ability.name}</li>
            ))}
          </div>
          <span>
            <b>Types</b>:
          </span>
          <span>
            {types.map((type, i) => (
              <li key={i}>{type.type.name}</li>
            ))}
          </span>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;

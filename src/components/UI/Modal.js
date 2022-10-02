import { useState } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";

function Modal({ pokemon }) {
  const [types, setTypes] = useState(pokemon.types);
  console.log(types);

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <h2 style={{ textAlign: "center" }}>Detailed View</h2>
      <div className={styles.body}>
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
          <span>{pokemon.name}</span>
          <span>ability: {pokemon.abilities[0].ability.name}</span>
          <span>Attack: {pokemon.stats[1].base_stat}</span>
          <span>Defense: {pokemon.stats[2].base_stat}</span>
          <span>Height: {pokemon.height}</span>
          <span>Weight: {pokemon.weight}</span>
          <span>Types:</span>
          <ul>
            {types.map((type, i) => {
              return <li key={i}>{type.type.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;

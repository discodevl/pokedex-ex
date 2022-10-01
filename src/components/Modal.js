import ReactDom from "react-dom";
import styles from "./Modal.module.css";

function Modal({ pokemon }) {
  console.log(pokemon);

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <h2 style={{ textAlign: "center" }}>Detailed View</h2>
      <div className={styles.body}>
        <img
          className={styles.img}
          alt={pokemon.name}
          src={
            pokemon.sprites.front_default ||
            require("../assets/McLMqoqki-2225151428.png")
          }
        />
        <div className={styles.stats}>
          <h1>{pokemon.name}</h1>
          <h2>HP: {pokemon.stats[0].base_stat}</h2>
          <h3>ability: {pokemon.abilities[0].ability.name}</h3>
          <span>Attack: {pokemon.stats[1].base_stat}</span>
          <span>Defense: {pokemon.stats[2].base_stat}</span>
          <span>Height: {pokemon.height}</span>
          <span>Weight: {pokemon.weight}</span>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;

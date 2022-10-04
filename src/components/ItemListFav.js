import React, { useContext } from "react";
import { pokeContext } from "../store/pokemons-context";
import { getTypeColor } from "../utility/typeColor";
import TrashSvg from "./UI/TrashSvg";
import styles from "./ItemListFav.module.css";

function ListItemFav({ children, pokemon }) {
  const context = useContext(pokeContext);

  function removeHandler() {
    context.removePokemon(pokemon.id);
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: getTypeColor(pokemon.types[0].type.name) }}
    >
      <div className={styles.itemContainer}>
        <div className={styles.imgWrapper}>
          <img
            alt={children}
            src={
              pokemon.sprites?.front_default ||
              require("../assets/McLMqoqki-2225151428.png")
            }
          />
          <span>HP:{pokemon.stats[0].base_stat}</span>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>{children}</span>
        </div>
        <div className={styles.ico} onClick={removeHandler}>
          <TrashSvg />
        </div>
      </div>
    </div>
  );
}

export default ListItemFav;

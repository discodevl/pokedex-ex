import { useContext } from "react";
import ReactDom from "react-dom";
import { pokeContext } from "../../store/pokemons-context";
import ListItemFav from "../ItemListFav";
import styles from "./Modal.module.css";

function ModalFavs() {
  const context = useContext(pokeContext);

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <h1 style={{ textAlign: "center" }}>My pokemons</h1>
      <div className={styles.body}>
        {context.addedPokemons.length > 0 ? (
          context.addedPokemons.map((poke, i) => (
            <ListItemFav key={i} pokemon={poke}>
              {poke.name.toUpperCase()}
            </ListItemFav>
          ))
        ) : (
          <div>
            <span>Your list is empty...</span>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default ModalFavs;

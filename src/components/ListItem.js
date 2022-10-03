import { useContext, useEffect, useState } from "react";
import { fetcher } from "../utility/fetchData";
import { getTypeColor } from "../utility/typeColor";
import { pokeContext } from "../store/pokemons-context";
import Backdrop from "./UI/BackDrop";
import Modal from "./UI/Modal";
import PokeballSvg from "./UI/PokeballSvg";

import styles from "./ListItem.module.css";

function ListItem({ url, data, children }) {
  const context = useContext(pokeContext);

  const [pokemon, setPokemon] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [type, setType] = useState("");

  useEffect(() => {
    async function getPokemon() {
      if (data) setPokemon(data);
      try {
        const pokemon = await fetcher(url);
        setPokemon(pokemon);
        setType(pokemon.types[0].type.name);
      } catch (err) {}
    }
    getPokemon();
  }, [url, data]);

  function toggleModal() {
    setIsOpenModal((modal) => !modal);
  }

  return (
    <>
      {isOpenModal && <Backdrop onCancel={toggleModal} />}
      {isOpenModal && <Modal pokemon={pokemon} />}

      <div
        className={styles.container}
        onClick={toggleModal}
        style={{ backgroundColor: getTypeColor(type) }}
      >
        <div className={styles.containerTitle}>
          <span> #{pokemon.id}</span>
          <span className={styles.bold}>{children}</span>
          <div style={{width: '20px'}}></div>
        </div>
        <img
          className={styles.img}
          alt={children}
          src={
            pokemon?.sprites?.front_default ||
            require("../assets/McLMqoqki-2225151428.png")
          }
        />
      </div>
    </>
  );
}

export default ListItem;

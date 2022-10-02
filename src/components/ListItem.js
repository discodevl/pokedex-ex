import { useEffect, useState } from "react";
import { fetcher } from "../utility/fetchData";
import Backdrop from "./BackDrop";

import styles from "./ListItem.module.css";
import Modal from "./Modal";

function ListItem({ url, data, children }) {
  const [pokemon, setPokemon] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    async function getPokemon() {
      if (data) setPokemon(data);
      try {
        const pokemon = await fetcher(url);
        setPokemon(pokemon);
      } catch (err) {}
    }
    getPokemon();
  }, [url, data]);

  function toggleModal() {
    setIsOpenModal((modal) => !modal);
  }
  console.log(pokemon.types[0].type.name)
  return (
    <>
      {isOpenModal && <Backdrop onCancel={toggleModal} />}
      {isOpenModal && <Modal pokemon={pokemon} />}
      <div
        className={`${styles.container} ${pokemon?.types[0]?.type?.name}`}
        onClick={toggleModal}
      >
        <p>
          <b>{children}</b>
        </p>
        <img
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

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

  // function getTypeColor() {
  //   switch (pokemon.types[0].type.name) {
  //     case "bug":
  //       return "rgba(28, 75, 39, 0.5)";
  //     case "dark":
  //       return "rgba(0, 0, 0, 0.5)";
  //     case "electric":
  //       return "rgba(226,227,43 0.5)";
  //     case "fighting":
  //       return "rgba(153,64,37 ,0.5)";
  //     case "fire":
  //       return "rgba(171,31,36 ,0.5)";
  //     case "ghost":
  //       return "rgba( 51,51,107,0.5)";
  //     case "grass":
  //       return "rgba( 20,123,61, 0.5)";
  //     case "ground":
  //       return "rgba(168,112,45, 0.5)";
  //     case "normal":
  //       return "rgba(117,82,92, 0.5)";
  //     case "poison":
  //       return "rgba(94,45,137, 0.5)";
  //     case "psychic":
  //       return "rgba(165,42,108, 0.5)";
  //     case "rock":
  //       return "rgba(72,25,11, 0.5)";
  //     case "water":
  //       return "rgba(21,82,225, 0.5)";
  //     default:
  //       return "";
  //   }
  // }

  return (
    <>
      {isOpenModal && <Backdrop onCancel={toggleModal} />}
      {isOpenModal && <Modal pokemon={pokemon} />}
      <div
        className={styles.container}
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

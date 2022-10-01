import { useEffect, useState } from "react";
import { fetcher } from "../utility/fetchData";

import styles from "./ListItem.module.css";

function ListItem({ url, data, children }) {
  const [pokemon, setPokemon] = useState(data ? data : {});

  useEffect(() => {
    async function getPokemon() {
      if(data) setPokemon(data);
      try {
        const pokemon = await fetcher(url);
        setPokemon(pokemon);
      } catch (err) {}
    }
    getPokemon();
  }, [url, data]);

  return (
    <div className={styles.container}>
      <p>{children}</p>
      <img alt={`${children}`} src={pokemon?.sprites?.front_default} />
    </div>
  );
}

export default ListItem;

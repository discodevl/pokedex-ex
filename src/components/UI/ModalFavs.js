import {useContext} from 'react';
import ReactDom from "react-dom";
import {pokeContext} from '../../store/pokemons-context';
import CardList from '../ListContainer';
import ListItem from '../ListItem';
import styles from "./Modal.module.css";

function ModalFavs() {
  const context = useContext(pokeContext);

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.body}>
        <CardList>
          {context.addedPokemons.map((poke, i) => <ListItem key={i} data={poke}>{poke.name}</ListItem>)}
        </CardList>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default ModalFavs;

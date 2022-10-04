import styles from "./PokeballIco.module.css";

function PokeballSvg() {
  return (
    <div className={styles.ico}>
      <img
        className={styles.svg}
        style={{ width: "58px", height: "58px" }}
        alt="pokeball"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Fmedium%2Fpurepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278258617dhmi.png&f=1&nofb=1&ipt=95e60a6f05a1e353ea00c1148c6972ac1a7512b8aff9006293ee8319b931641d&ipo=images"
      />
    </div>
  );
}

export default PokeballSvg;

import styles from "./Header.module.css";

function Header({ filterhandler }) {
  function searchHandler(event) {
    const search = event.target.value.trim();
    filterhandler(search);
  }

  return (
    <div className={styles.header}>
      <img
        className={styles.img}
        alt="logo-pokemon"
        src={require("../assets/Logo-Pokemon-1090085982.png")}
      />
      <div className={styles.searchContainer}>
        <div className={styles.ico}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <input
          id="input-character"
          className={styles.search}
          type="text"
          placeholder=" search for a pokemon..."
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}

export default Header;

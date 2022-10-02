import styles from "./PokeballSvg.module.css";

function PokeballSvg() {
  return (
    <div className={styles.ico}>
      <svg
        className={styles.svg}
        width="36px"
        height="36px"
        viewBox="0 0 76 76"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        baseProfile="full"
        enableBackground="new 0 0 76.00 76.00"
      >
        <path
          fill="#000000"
          fillOpacity="1"
          strokeWidth="0.2"
          strokeLinejoin="round"
          d="M 38,19C 48.4934,19 57,27.5066 57,38C 57,48.4934 48.4934,57 38,57C 27.5066,57 19,48.4934 19,38C 19,27.5066 27.5066,19 38,19 Z M 38,22.9583C 30.2275,22.9583 23.8319,28.8536 23.0407,36.4167L 30.2417,36.4167C 30.9752,32.8031 34.17,30.0833 38,30.0833C 41.83,30.0833 45.0248,32.8031 45.7583,36.4167L 52.9593,36.4167C 52.1681,28.8536 45.7725,22.9583 38,22.9583 Z M 23.0407,39.5833C 23.8319,47.1464 30.2275,53.0417 38,53.0417C 45.7725,53.0417 52.1681,47.1464 52.9593,39.5833L 45.7583,39.5834C 45.0248,43.1969 41.83,45.9167 38,45.9167C 34.17,45.9167 30.9752,43.1969 30.2417,39.5834L 23.0407,39.5833 Z M 38,33.25C 35.3766,33.25 33.25,35.3767 33.25,38C 33.25,40.6234 35.3766,42.75 38,42.75C 40.6233,42.75 42.75,40.6234 42.75,38C 42.75,35.3767 40.6233,33.25 38,33.25 Z M 38,35.625C 39.3117,35.625 40.375,36.6883 40.375,38C 40.375,39.3117 39.3117,40.375 38,40.375C 36.6883,40.375 35.625,39.3117 35.625,38C 35.625,36.6883 36.6883,35.625 38,35.625 Z "
        />
      </svg>
    </div>
  );
}

export default PokeballSvg;

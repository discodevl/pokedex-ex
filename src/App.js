import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20')//40//60...
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="App"></div>;
}

export default App;

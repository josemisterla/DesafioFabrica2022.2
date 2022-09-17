import { useEffect, useState } from "react";
import './style.css'

function Galeria() {
  const [galeria, setGaleria] = useState("Galeria here");

  // useEffect(() => {
  //   getGaleria();
  // }, []);

  const getGaleria = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/{number}", {
        method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setGaleria(data.galeria);
  };

  return (
    <div className="container">
      <h1>Almanaqui</h1>
      <p className="galeria">{galeria}</p>
    </div>
  );
}

export default Galeria;
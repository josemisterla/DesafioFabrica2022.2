import React, { useEffect, useState } from "react";
import './style.css'

function Galeria() {
  const [galeria, setGaleria] = useState("null");
  
  useEffect(() => {
    getGaleria();
  }, []);

  const getGaleria = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/{number}", {
        method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();

    setGaleria({
      nome: data.name,
      link: data.image_link,
      latin: data.latin_name,
      habitat: data.habitat, 
      diet: data.diet,
      geo_range: data.geo_range 
 

    });
  };

  return (
    <div className="container">
      <h1>Animal Random </h1>
      <p className="Animal">Nome: {galeria?.nome ?? ""}</p>
      <p className="latin">Nome Latin: {galeria?.latin_name??" "}</p>
      <p className="habitat">Habitate: {galeria?.habitat??""}</p>
      <p className="diet">Dieta: {galeria?.diet??""}</p>
      <p className="geo_range">Localização: {galeria?.geo_range??""} </p>
      <img src={galeria?.link ?? ""} alt="" />

      <button type="button" className="btn" onClick={getGaleria}>
        Pegar animal
      </button>
    </div>
  );
};

export default Galeria;
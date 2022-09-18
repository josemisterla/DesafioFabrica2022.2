import React, { useEffect,useState } from "react";
import './style.css'

const AnimalRandom = () => {
  const [animal, setAnimal] = useState(null);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    
    setAnimal({
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
      <p className="Animal">Nome: {animal?.nome ?? ""}</p>
      <p className="latin">Nome Latin: {animal?.latin_name??" "}</p>
      <p className="habitat">Habitate: {animal?.habitat??""}</p>
      <p className="diet">Dieta: {animal?.diet??""}</p>
      <p className="geo_range">Localização: {animal?.geo_range??""} </p>
      <img src={animal?.link ?? ""} alt="" />
      
      <button type="button" className="btn" onClick={getAnimal}>
        Animal
      </button>
    </div>
  );
};

export default AnimalRandom;
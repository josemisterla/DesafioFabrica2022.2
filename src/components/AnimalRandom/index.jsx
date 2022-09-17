import React, { useEffect, useState } from "react";
import './style.css'

const AnimalRandom = () => {
  const [animal, setAnimal] = useState(null);

  // useEffect(() => {
  //   getAnimal();
  // }, []);

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
      link: data.image_link
      : data.latin_name 
      habitat: date.habitat 
      diet: date.diet
      location: date.geo_range 

    });
  };

  return (
    <div className="container">
      <h1>Animal Random </h1>
      <p className="Animal">{animal?.nome ?? "Benune"}</p>
      <p className="latin">{animal?.latin_name??"Abigobivel "}</p>
      <p className="habitat">{animal?.habitat??"Na Tua Casa"}</p>
      <p className="diet">{animal?.diet??"Bosta"}</p>
      <p className="geo_range">{animal?.geo_range??"Casa do Bill"} </p>
      <img src={animal?.link ?? "alo"} alt="" />
      
      <button type="button" className="btn" onClick={getAnimal}>
        Pegar animal
      </button>
    </div>
  );
};

export default AnimalRandom;
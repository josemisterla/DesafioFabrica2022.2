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
    });
  };

  return (
    <div className="container">
      <h1>Animal Random </h1>
      <p className="Animal">{animal?.nome ?? "Fact Animal"}</p>
      <img src={animal?.link ?? "alo"} alt="" />
      <button type="button" className="btn" onClick={getAnimal}>
        ´Pegar animal
      </button>
    </div>
  );
};

export default AnimalRandom;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCharacter = changeID => {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [birth, setBirth] = useState();
  const [eye, setEye] = useState();
  const [hair, setHair] = useState();
  const [skin, setSkin] = useState();
  const [mass, setMass] = useState();

  useEffect(() => {
    const fetchCharacter = () => {
      axios
        .get(`https://swapi.co/api/people/${changeID}/`)
        .then(res => {
          console.log(res);
          const charName = res.data.name;
          const charGender = res.data.gender;
          const charBirth = res.data.birth_year;
          const charEye = res.data.eye_color;
          const charHair = res.data.hair_color;
          const charSkin = res.data.skin_color;
          const charMass = res.data.mass;

          setName(charName);
          setGender(charGender);
          setBirth(charBirth);
          setEye(charEye);
          setHair(charHair);
          setSkin(charSkin);
          setMass(charMass);
        })
        .catch(err => {
          console.log(err);
        });
    };

    fetchCharacter();
  }, [changeID]);

  return { name, gender, birth, eye, hair, skin, mass };
};

const CharacterDisplay = ({ id }) => {
  const retrieved = useFetchCharacter(id);

  return (
    <div>
      <h2>Star Wars Character</h2>
      <h3>Name: {retrieved.name}</h3>
      <h3>Gender: {retrieved.gender}</h3>
      <h3>Birth Year: {retrieved.birth}</h3>
      <h3>Eye Color: {retrieved.eye}</h3>
      <h3>Hair Color: {retrieved.hair}</h3>
      <h3>Skin Color: {retrieved.skin}</h3>
      <h3>Weight: {retrieved.mass}</h3>
    </div>
  );
};

export default CharacterDisplay;

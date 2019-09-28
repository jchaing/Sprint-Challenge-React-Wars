import React, { useState } from 'react';
import CharacterDisplay from './components/CharacterDisplay';
import PaginateButton from './components/PaginateButton';
import './App.css';
import { Container } from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [id, setID] = useState(1);

  const prev = () => {
    return id >= 2 ? setID(id - 1) : null;
  };

  const next = () => {
    return id <= 87 ? setID(id + 1) : null;
  };

  const random = () => {
    return setID(Math.floor(Math.random() * 88) + 1);
  };

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        <div className="mt-5">
          <PaginateButton paginateFunction={prev} buttonLabel="prev" />
          <PaginateButton paginateFunction={random} buttonLabel="random" />
          <PaginateButton paginateFunction={next} buttonLabel="next" />
        </div>
        <CharacterDisplay id={id} />
      </Container>
    </div>
  );
};

export default App;

import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameHasEnded, setGameHasEnded] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  React.useEffect(() => {
    if (guesses.length >= 6 || guesses.includes(answer)) {
      setGameHasEnded(true);
    }  
  }, [guesses]);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput disabled={gameHasEnded} handleSubmitGuess={handleSubmitGuess} />
      {gameHasEnded && <Banner guesses={guesses} answer={answer} />}
    </>
  );
}

export default Game;

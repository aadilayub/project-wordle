import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    if (tentativeGuess === answer) {
      setGameStatus('won')
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <GuessResults 
        guesses={guesses} 
        answer={answer} 
      />
      <GuessInput 
        disabled={gameStatus !== 'running'} 
        handleSubmitGuess={handleSubmitGuess} 
      />
      {
        gameStatus !== 'running' && 
        <GameOverBanner 
          status={gameStatus} 
          numOfGuesses={guesses.length} 
          answer={answer} 
        /> 
      }
    </>
  );
}

export default Game;

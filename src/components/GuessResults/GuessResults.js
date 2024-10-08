import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess.split('').map((letter, position) => (
            <span key={position} className="cell">{letter}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

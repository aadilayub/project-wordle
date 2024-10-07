import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  return (
    <form 
    onSubmit={e => {
      e.preventDefault();
      console.log(guess);
      setGuess('');
    }}
    className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())} 
        id="guess-input" 
        type="text"
        pattern="[A-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;

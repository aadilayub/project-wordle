import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess('');
      }}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        value={tentativeGuess}
        onChange={e => setTentativeGuess(e.target.value.toUpperCase())}
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;

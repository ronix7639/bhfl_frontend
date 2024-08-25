import React from 'react';

function ResponseDisplay({ response, selectedOptions }) {
  const { alphabets, numbers, highest_lowercase_alphabet } = response;

  return (
    <div>
      {selectedOptions.includes('Alphabets') && (
        <div>
          <h3>Alphabets:</h3>
          <p>{alphabets.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('Numbers') && (
        <div>
          <h3>Numbers:</h3>
          <p>{numbers.join(', ')}</p>
        </div>
      )}
      {selectedOptions.includes('Highest lowercase alphabet') && (
        <div>
          <h3>Highest Lowercase Alphabet:</h3>
          <p>{highest_lowercase_alphabet}</p>
        </div>
      )}
    </div>
  );
}

export default ResponseDisplay;

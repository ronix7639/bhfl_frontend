import React from 'react';

function MultiSelect({ selectedOptions, setSelectedOptions }) {
  const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      <h3>Select Options:</h3>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default MultiSelect;

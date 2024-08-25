import React from 'react';

function JsonInput({ jsonData, setJsonData, handleSubmit }) {
  const handleChange = (e) => {
    setJsonData(e.target.value);
  };

  const validateJson = () => {
    try {
      JSON.parse(jsonData);
      return true;
    } catch (e) {
      alert('Invalid JSON format.');
      return false;
    }
  };

  const onSubmit = () => {
    if (validateJson()) {
      handleSubmit();
    }
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder='Enter JSON data here...'
        value={jsonData}
        onChange={handleChange}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default JsonInput;

import React, { useState } from 'react';
import axios from 'axios';
import JsonInput from './components/JsonInput';
import MultiSelect from './components/MultiSelect';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [jsonData, setJsonData] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://bhfl-backend-theta.vercel.app/', JSON.parse(jsonData));
      setResponse(res.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid JSON or server error.');
    }
  };

  return (
    <div>
      <h1>21BCI0278</h1>
      <JsonInput jsonData={jsonData} setJsonData={setJsonData} handleSubmit={handleSubmit} />
      {response && (
        <>
          <MultiSelect selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
}

export default App;

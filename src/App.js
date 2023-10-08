import React, { useState } from 'react';

import './App.css';
import ResultBox from './components/ResultBox'
import InputBox from './components/InputBox'

function App() {
  let defaultValue = '{"source": "jsonreader.com"}';

  const [inputValue, setInputValue] = useState(defaultValue);

  const handleSourceValue = (value) => {
    try {
      let beautifyJson = JSON.parse(value);
      let result = "";
      for (var k in beautifyJson) {
        result = result + `"${k}"` + ": \n" + beautifyJson[k] + "\n";
      }
      setInputValue(result)
    } catch (error) {
      setInputValue(value)
    }
  }


  return (
    <div className="App">
      <div className="working-box">
        <InputBox
          handleSourceValue={handleSourceValue}
        />
        <ResultBox
          inputValue={inputValue}
        />
      </div>
    </div>
  );
}

export default App;

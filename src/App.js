import React, { useState } from 'react';

import './App.css';
import ResultBox from './components/ResultBox'
import InputBox from './components/InputBox'

function App() {
  let defaultValue = '{"source": "jsonreader.com"}';

  const [inputValue, setInputValue] = useState(defaultValue);

  const handleSourceValue = (value) => {
    try {
      let finalValue = "";
      let beautifyJson = JSON.parse(value);
      finalValue = recursiveParseJsonToString(finalValue, beautifyJson);
      setInputValue(finalValue)
    } catch (error) {
      setInputValue(value)
    }
  }

  const recursiveParseJsonToString = (finalValue, jsonValue) => {
    for (var k in jsonValue) {
      if (typeof jsonValue[k] === "string") {
        finalValue = finalValue + `<ul class="json-parent-line"><span class="json-key">${k}</span>: <span class="json-value">${jsonValue[k]}</span><ul>`;
      }
      else if (typeof jsonValue[k] === "object") {
        finalValue = finalValue + `<ul class="json-child-line"><span class="json-key">${k}</span>: <span class="json-value">${recursiveParseJsonToString(finalValue, jsonValue[k])}</span><ul>`;
      }
      return finalValue
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

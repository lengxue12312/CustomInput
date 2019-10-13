import React from 'react';
import NumberInput from 'react-custom-number-input';
import './App.css';


function App() {
  let maxValue = 100;
  let minValue = 0;

  return (
    <div className="App">
      <NumberInput placeholder='请输入数字' maxValue={maxValue} minValue={minValue}/>
    </div>
  );
}

export default App;

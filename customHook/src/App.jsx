import { useState } from 'react'
import './App.css'
import Storage from './Storage';

function App() {

  const [Data, setIsData] = Storage('Data', '');

  return (
    <>
      <div>
        <input
          type="text"
          style={{
            width: '200px',
            padding: '4px',
            fontSize: '20px',
          }}
          value={Data} 
          onChange={(e) => {
            console.log(e.target.value);
            setIsData(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default App;
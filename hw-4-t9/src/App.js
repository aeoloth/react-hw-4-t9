import React from 'react';
import './App.css';

function App() {

  const langs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div>
      {langs.map(item => <span>{ item + 3 } </span>)}
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

//Create a new omponent. This comptonent should produce
//some HTML
const App = function() {
  return <div>Hi!</div>
}

//Take this compronent HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCAByVOvnHifZU8mnU0exrmsG_KaUoNgX8';

//Create a new omponent. This comptonent should produce
//some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this compronent HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

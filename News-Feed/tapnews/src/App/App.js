import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import './App.css';

const logo = process.env.PUBLIC_URL + '/logo.png';

class App extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="logo" />
        <div className="container" />
      </div>
    );
  }
}

export default App;

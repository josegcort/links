import './App.css';
import imagenes from './images.js';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-img">
        <br/>
            <img className="Img-logo" src={imagenes[0].img} alt="logo" />
            <h4>@ccelencuentro</h4>
            <h5>#EncuentroEnLinea</h5>
        </div>
        <div className="column">
          <a target="_blank" rel="noopener noreferrer" href={imagenes[1].url}>
            <button type="button" >
            <h2><FontAwesomeIcon icon={imagenes[1].icon} /> {imagenes[1].title}</h2>
            </button>
          </a>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href={imagenes[2].url}>
            <button type="button" >
            <h2><FontAwesomeIcon icon={imagenes[2].icon} /> {imagenes[2].title}</h2>
            </button>
          </a>
          <br/>
          <a target="_blank"  rel="noopener noreferrer" href={imagenes[3].url}>
            <button type="button" >
            <h2><FontAwesomeIcon icon={imagenes[3].icon} /> {imagenes[3].title}</h2>
            </button>
          </a>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href={imagenes[4].url}>
            <button type="button" >
            <h2><FontAwesomeIcon icon={imagenes[4].icon} /> {imagenes[4].title}</h2>
            </button>
          </a>
          <br/>
        {/*<a target="_blank" rel="noopener noreferrer" href={imagenes[5].url}>
            <button type="button" >
              <h2><FontAwesomeIcon icon={imagenes[5].icon} /> {imagenes[5].title}</h2>
            </button>
          </a> */}
        </div>
      </header>
    </div>
  );
}

export default App;

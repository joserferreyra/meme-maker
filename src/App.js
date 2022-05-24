import { useState } from 'react';
import './App.css';
import ImageListEdit from './components/ImageListEdit';

const imagesNames = [
  "./images/pre/risas.png",
  "./images/pre/futurama.png",
  "./images/pre/noticia.png",
  "./images/pre/obama.png",
  "./images/pre/toy-story.png",
  "./images/pre/bob-sponja.png",
  "./images/pre/señor-de-los-anillos.png",
];

function App() {

  const [files, setFiles] = useState([]);

  function chargeFiles(e) {
    console.log(e);
    const arr = Array.from(e.target.files);
    setFiles(arr);
    console.log(arr);
  }

  function chragePre(e) {
    console.log(e);
    setFiles(imagesNames);
  }

  return (
    <div className="App p-3 mb-2 bg-secondary text-white">

      <h1>Simple generador de memes o tarjetas</h1>
      <a href='#' onClick={chragePre}>Cargar imagenes predefinidas</a>

      <input type="file" multiple id="file-selector" accept=".jpg, .jpeg, .png" onChange={chargeFiles}>
      </input>

      {files[0] && <h2>Listado de imagenes cargadas</h2>}
      <div>
        <ImageListEdit files={files} />
      </div>
    </div >
  );
}

export default App;

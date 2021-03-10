import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [image, setImage] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setImage={setImage}/>
      { image && <Modal image={image} setImage={setImage}/> }
    </div>
  );
}

export default App;

/*
  video: https://www.youtube.com/watch?v=vUe91uOx7R0
  time: 48:00
*/
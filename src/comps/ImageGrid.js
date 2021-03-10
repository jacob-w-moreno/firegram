import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = props => {
  const { docs } = useFirestore('images');
  console.log('docs:', docs);

  return <div className='image-grid'>
    { docs && docs.map(doc => (
      <div className='image-wrap' key={doc.id}
        onClick={()=> props.setImage(doc.url)}
      >
        <img src={doc.url} alt="uploaded pic"/>
      </div>
    ))}
  </div>
}

export default ImageGrid;
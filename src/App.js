import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [stickersOnCanvas, setSticker] = useState([]);

  const stageRef = useRef();

  const addSticker = (image) => {
    const newId = Date.now();
    setSticker((prev) => [
      ...prev, 
      {
        id: newId,
        image,
        x: 40, 
        y: 40,
      },
    ]);
  };


  const downloadImage = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="buttons-panel">
          {imagePaths.map(img => (
            <StickerButton image={img} onClick={addSticker} />
          ))}
          <button onClick={downloadImage} className="download-btn">Download</button>
      </div>
      <Canvas
        stickers={stickers}
        onDragEnd={updateStickerPosition}
        onDoubleClick={deleteSticker}
        stageRef={stageRef}
      />
    </div>
    </div>
  );
}

export default App;

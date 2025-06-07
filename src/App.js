import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const imagePaths = [
    '/stickers/christmas-decoration.png',
    '/stickers/detective.png',
    '/stickers/gun.png',
    ];


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
    link.download = 'Canvas.png';
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const updateStickerPosition = (id, newX, newY) => {
    setSticker((prev) =>
      prev.map((s) => (s.id === id ? { ...s, x: newX, y: newY } : s))
    );
  };

  const deleteSticker = (id) => {
    setSticker((prev) => prev.filter((s) => s.id !== id));
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
        stickers={stickersOnCanvas}
        onDragEnd={updateStickerPosition}
        onDoubleClick={deleteSticker}
        stageRef={stageRef}
      />
    </div>
    </div>
  );
}

export default App;

function StickerButton({ image, onClick }) {
  return (
    <button onClick={() => onClick(image)} style={{ margin: '8px', border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
      <img src={image} alt="sticker" width="40" height="40" style={{ display: 'block' }} />
    </button>
  );
}

export default StickerButton;
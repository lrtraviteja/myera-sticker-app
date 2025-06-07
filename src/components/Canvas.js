import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

function Sticker({ sticker, onDragEnd, onDoubleClick }) {
    const [img] = useImage(sticker.image);

    return (
        <KonvaImage
            image={img}
            x={sticker.x}
            y={sticker.y}
            draggable
            onDragEnd={(e) => {
                const snappedX = Math.round(e.target.x() / 40) * 40;
                const snappedY = Math.round(e.target.y() / 40) * 40;
                onDragEnd(sticker.id, snappedX, snappedY);
            }}
            onDblClick={() => onDoubleClick(sticker.id)}
            width={50}
            height={50}
        />
    );
}

function Canvas({ stickers, onDragEnd, onDoubleClick, stageRef }) {
    return (
        <Stage width={600} height={600} ref={stageRef} style={{ border: '1px solid black' }}>
            <Layer>
                {stickers.map((sticker) => (
                    <Sticker
                        key={sticker.id}
                        stickers={stickers}
                        onDragEnd={onDragEnd}
                        onDoubleClick={onDoubleClick}
                    />
                ))}
            </Layer>
        </Stage>
    )
}

export default Canvas;
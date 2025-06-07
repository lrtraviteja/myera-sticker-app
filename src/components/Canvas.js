import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

function Sticker({ sticker, onDragEnd, onDoubleClick }) {
    const [img] = useImage(sticker.image);

    return (
        <KonvaImage
            image={img}
            x={sticker.x}
            y={sticker.y}
        />
    );
}

function Canvas({ stickers}) {
    return (
        <Stage width={600} height={600} style={{ border: '1px solid black' }}>
            <Layer>
                {stickers.map((sticker) => (
                    <Sticker
                        key={sticker.id}
                        sticker={sticker}
                    />
                ))}
            </Layer>
        </Stage>
    )
}

export default Canvas;
import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }


    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }

        console.log(hexColor);
        setColor(hexColor);
    }
    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        let RgbColor = `rgb(${r},${g},${b})`
        setColor(RgbColor)
        console.log(RgbColor)
    }


    useEffect(() => {
        // if (typeOfColor === 'hex') handleCreateRandomHexColor()
        // else handleCreateRandomRgbColor()

        typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor();

    }, [typeOfColor])


    return (
        <div className="container" style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button type="button" onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button type="button" onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button type="button" onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '30px',
                marginTop: "50px",
                gap: "2rem",
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB' : 'HEX'} Color : </h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}
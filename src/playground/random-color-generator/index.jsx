import { useEffect, useState } from 'react'

function ColorGenerator() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000');


  const random = (n) => Math.floor(Math.random() * n)


  function hex() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += arr[random(arr.length)];
    }
    setColor(hexColor);
  }

  function rgb() {
    const r = random(256);
    const g = random(256);
    const b = random(256);

    const rgbColor = `rgb(${r},${g},${b})`
    setColor(rgbColor);
    console.log(rgbColor);
  }




  function generateColor() {
    colorType === 'hex' ? hex() : rgb();
  }

  useEffect(() => {
    generateColor()
  }, [colorType])


  return (
    <>
      <div className="random-color" style={{ backgroundColor: color }}>

        <button type="button" onClick={() => setColorType('hex')}>HEX</button>
        <button type="button" onClick={() => setColorType('rgb')}>RGB</button>
        <button type="button" onClick={() => generateColor()}>GENERATE</button>

        <div className="content">
          <h1>{colorType === 'hex' ? 'hex' : 'rgb'} color : {color}</h1>
        </div>

      </div>
    </>
  )
}

export default ColorGenerator

import { useState } from "react"
import QRCode from "react-qr-code"
import './style.css'

export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('')
    }
    return (
        <div className="qr-container">
            <h1>QR Code Generator</h1>
            <div>
                <label htmlFor="qr-code-input">Value to encode : </label>
                <input
                    id="qr-code-input"
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    placeholder="Enter Your Value Here"
                    value={input}
                />
                <button type="button" onClick={() => handleGenerateQrCode()} disabled={input && input.trim() !== '' ? false : true}>Generate</button>
            </div>

            <div style={{ height: "auto", padding: "3rem", maxWidth: "500px", width: "100%" }}>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    // size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                // viewBox="0 0 256 256"
                />
            </div>
        </div>
    )
}
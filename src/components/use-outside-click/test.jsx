import { useRef, useState } from "react"
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef()
    useOutsideClick(ref, () => setShowContent(false))
    return (
        <div>
            {
                showContent ? (
                    <div ref={ref} style={{ border: "2px solid" }}>
                        <h1>This is a random content</h1>
                        <p>Please click outside of this to close this. it won't close if you click inside of this content</p>
                    </div>
                ) : <button type="button" onClick={() => setShowContent(true)}>show Content</button>
            }

        </div>
    )
}
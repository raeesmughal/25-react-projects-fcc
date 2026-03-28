import { useState } from "react"
import Modal from "./modal"


export default function ModalTest() {
    const [showModelPopup, setShowModelPopup] = useState(false)

    function handleTogglePopupModal() {
        setShowModelPopup(!showModelPopup)
    }

    function onClose() {
        setShowModelPopup(false)
    }


    return <div style={{ backgroundColor: "rgb(63, 63, 63)", height: "100vh", width: "100vw", textAlign: 'center',paddingTop:"20px" }}>
        <button onClick={handleTogglePopupModal}>Open Modal Popup</button>
        {
            showModelPopup && <Modal 
            body={<div>Customized body</div>} 
            header={'Customized header'} 
            footer={'Customized Footer'} 
            onClose={onClose} 
            id={'custom-id'}
            />
        }
    </ div>
}
import { useRef } from "react"







export default function ScrollToSection() {

    const ref = useRef()

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'Yellow'
            }
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'Orange'
            }
        }
    ]

    function handleScrollToSection() {
        let pos = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top: pos,
            behavior: 'smooth',

        })
    }

    return <div>
        <h1>Scroll to a Particular Section</h1>
        <button type="button" onClick={handleScrollToSection}>Scroll to Section</button>
        {
            data.map((dataItem, index) =>
                <div style={dataItem.style} ref={index === 4 ? ref : null} key={index}>
                    <h3>{dataItem.label}</h3>
                </div>)
        }

    </div>
}
// import { useState } from 'react';
// import data from './data';
// import './style.css';


// export default function Accordion() {
//     const [selected, setSelected] = useState(null);

//     const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//     const [multiple, setMultiple] = useState([]);

//     function handleSingleSelection(id) {
//         setSelected(id === selected ? null : id);
//     }

//     function handleMultiSelection(id) {
//         let cpyMultiple = [...multiple];
//         const findIndexOfCurrentId = cpyMultiple.indexOf(id);

//         if (findIndexOfCurrentId === -1) {
//             cpyMultiple.push(id);
//         } else {
//             cpyMultiple.splice(findIndexOfCurrentId, 1);
//         }
//         setMultiple(cpyMultiple);

//     }
//     console.log(selected, multiple);

//     function MultiHandler() {
//         setEnableMultiSelection(!enableMultiSelection);
//     }


//     return <div className="wrapper">
//         <button onClick={MultiHandler}>{enableMultiSelection ? "Disable" : "Enable"} Multi Selection</button>

//         <div className="accordion">
//             {
//                 data && data.length > 0 ?
//                     data.map((dataItem) => {

//                         // item
//                         return <div className="item" key={dataItem.id}>

//                             {/* title */}
//                             <div className="title" onClick={
//                                 enableMultiSelection ?
//                                     () => handleMultiSelection(dataItem.id) :
//                                     () => handleSingleSelection(dataItem.id)
//                             }>
//                                 <h1>{dataItem.question}</h1>
//                                 <span>+</span>
//                             </div>
//                             {/* content */}
//                             {
//                                 enableMultiSelection ?
//                                     multiple.indexOf(dataItem.id) !== -1 &&
//                                     <div className="content">{dataItem.answer}</div> :
//                                     selected === dataItem.id && <div className="content">{dataItem.answer}</div>
//                             }

//                         </div>
//                     }) : <div>No Data Found!</div>
//             }
//         </div>
//     </div>
// }








// single selection accordion

// import { useState } from "react"
// import data from "./data";

// export default function Accordion2() {
//     const [selected, setSelected] = useState(null);
//     function handleSingleSelection(id) {
//         setSelected(id === selected ? null : id);
//     }
//     return <div className="wrapper">
//         <div className="accordion">
//             {
//                 data && data.length > 0 ?
//                     data.map((dataItem) => (
//                         <div className="item" key={dataItem.id}>
//                             <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
//                                 <h2>{dataItem.question}</h2>
//                                 <span>+</span>
//                             </div>

//                             {
//                                 selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null
//                             }
//                         </div>
//                     ))
//                     : <div>No Content Found</div>
//             }
//         </div>
//     </div>
// }








// multiple selection accordion

import { useState } from 'react';
import data from './data';



export default function Accordion() {

    const [selected, setSelected] = useState(null);

    function handleMultiSelection(id) {
        setSelected(id)
        console.log(selected)

    }


    return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length > 0 ?
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div className="title" onClick={handleMultiSelection}>
                                <h2>{dataItem.question}</h2>
                                <span>+</span>
                            </div>
                            {

                            }
                        </div>
                    ))
                    : <div>Content Not Found</div>
            }
        </div>
    </div>
}
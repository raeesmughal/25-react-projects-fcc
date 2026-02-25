import './style.css'
import data from './data';
import { useState } from 'react';

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);




    function handleClick(currentId) {
        enableMultiSelection ? handleMultiSelection(currentId) : handleSingleSelection(currentId)
    }

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
    }
    function handleMultiSelection(currentId) {
        const copyMultiple = [...multiple];
        const checkId = copyMultiple.indexOf(currentId);

        checkId === -1 ? copyMultiple.push(currentId) : copyMultiple.splice(checkId, 1);

        setMultiple(copyMultiple);
    }
    return <div className="wrapper">
        <div className="accordion">
            <button type='button' onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? "Disable" : "Enable"} Multi Selection</button>
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className='item' key={dataItem.id} >
                        <div className="title" onClick={() => handleClick(dataItem.id)}>
                            <h2>{dataItem.question}</h2>
                        </div>
                        {/* {
                            enableMultiSelection ?
                                multiple.indexOf(dataItem.id) !== -1 && (<div className='content'>{dataItem.answer}</div>) : selected === dataItem.id && (<div className='content'>{dataItem.answer}</div>)
                        } */}
                        {
                            enableMultiSelection ?
                                (
                                    multiple.indexOf(dataItem.id) !== -1 ? <div className='content'>{dataItem.answer}</div>
                                        : null
                                ) : (
                                    selected === dataItem.id ? <div className='content'>{dataItem.answer}</div> : null

                                )

                        }
                    </div>)
                    : <div>No Contnet Found</div>
            }
        </div>
    </div>
} 
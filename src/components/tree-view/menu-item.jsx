import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})
    function handleToggleChildren(label) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [label]: !displayCurrentChildren[label],
        })
    }
    console.log(displayCurrentChildren)
    return <li>
        <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.children ?
                    item.children.length > 0 ? <button
                    /* coderabbit suggested changes to add proper buttons instead of span tag */
                        type="button"
                        onClick={() => handleToggleChildren(item.label)}
                        className="menu-toggle"
                        aria-expanded={Boolean(displayCurrentChildren[item.label])}
                        aria-label={`Toggle ${item.label}`}
                    >
                        {
                            displayCurrentChildren[item.label] ? <FaMinus size={25} color="#fff" /> : <FaPlus size={25} color="#fff" />
                        }
                    </button> : null : null
            }
        </div>

        {
            item && item.children ?
                item && item.children.length > 0 && displayCurrentChildren[item.label] ?
                    <MenuList list={item.children} />
                    : null : null
        }
    </li >
}
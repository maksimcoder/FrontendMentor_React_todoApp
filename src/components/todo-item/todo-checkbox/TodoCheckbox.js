import React from 'react';
import './checkbox.css';


export default function TodoCheckbox({number, onMarkAsDone, disabled}) {
    const visibility = disabled ? true : false;
    const todoNumber = `new-${number}`;

    function onToggleDone() {
        if (disabled) {
            return;
        }
        onMarkAsDone(number); //props
    }


    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" id={todoNumber}  name="inputs" className="custom-checkbox" disabled={visibility}/>
            <label htmlFor={todoNumber} onClick={onToggleDone}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
            </label>
        </div>
    );
}

// TodoCheckbox.defaultProps = {
//     isEnabled: false
// }



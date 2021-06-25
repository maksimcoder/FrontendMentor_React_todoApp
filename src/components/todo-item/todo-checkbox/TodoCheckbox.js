import React, { Component } from 'react';
import './checkbox.css';



export default class TodoCheckbox extends Component {
    render() {
        return (
            <div className="checkbox-wrapper">
                <input type="checkbox" id="new-todo-checkbox"  name="inputs" className="custom-checkbox" disabled/>
                <label htmlFor="new-todo-checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                        <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                    </svg>
                </label>
            </div>
        );
    }
}


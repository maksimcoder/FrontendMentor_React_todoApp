import React, { Component } from 'react';
import styled from 'styled-components';
import {TodoContainer} from '../todo-item/TodoListItem';


const InputContainer = styled(TodoContainer)`
    margin-top: 1em;
`;

const TodoInput = styled.input`
    background: transparent;
    font-family: 'Josefin Sans', sans-serif;
    flex-basis: 95%;
    height: 4em;
    border: none;
    outline: none;
    color:hsl(235, 19%, 35%);
    font-weight: 700;
    font-size: 15px;

    &::placeholder {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 15px;
        color:hsl(236, 9%, 61%);
        opacity: 0.9;
    } 
`;


const CheckboxComponent = () => {
    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" id="new-todo-checkbox"  name="inputs" className="custom-checkbox" disabled/>
            <label htmlFor="new-todo-checkbox">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
            </label>
        </div>
    )
}


export default class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            typeError: false
        };
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value,
            typeError: false
        });
    }

    onKeyPressHandler(event) {
        const {text} = this.state;
        if (event.keyCode === 13) { // enter 
            if (!text) {
                this.setState({
                    typeError: true
                });
            } else {
                this.setState({
                    text: ''
                });
                this.props.addTodo(text);
            }
        }
      }

    render() {
        const style = this.state.typeError ? {border: '1px solid red'} : null;
        return (
            <InputContainer style={style}>
                <CheckboxComponent/>
                <TodoInput 
                    type="text" 
                    name="inputs" 
                    placeholder="Create a new todo..." 
                    value = {this.state.text}
                    autoFocus
                    onChange={this.onValueChange}
                    onKeyDown={this.onKeyPressHandler} />         
            </InputContainer>
        );
    }
}


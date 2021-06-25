import React, { Component } from 'react';
import styled from 'styled-components';
import TodoCheckbox from '../todo-item/todo-checkbox/TodoCheckbox';
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



export default class NewTodo extends Component {
    render() {
        return (
            <InputContainer>
                <TodoCheckbox/>
                <TodoInput type="text" name="inputs" placeholder="Create a new todo..." autoFocus/>
            </InputContainer>
        );
    }
}


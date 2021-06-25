import React, { Component } from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/img/close.svg';
import TodoCheckbox from './todo-checkbox/TodoCheckbox';
import styles from './TodoItem.module.css';

const TodoContainer = styled.div`
    background: white;   
    display: flex;
    height: 4em;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    border-radius: 5px;
    border-top: 1px solid hsl(0, 0%, 90%);
`;

const TodoText = styled.span`
    color: black;
    flex-basis: 85%;
    user-select: none;
`;



export default class TodoListItem extends Component {
    render() {
        return (
            <TodoContainer>
                <TodoCheckbox/>
                <TodoText>Here your Todo will be displayed</TodoText>
                <Logo className={styles.close}/>
            </TodoContainer>
        );
    }
}

export {TodoContainer};
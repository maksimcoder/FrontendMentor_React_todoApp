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
// const ToDoContainer = styled(TodoContainer);

const TodoText = styled.span`
    color: black;
    flex-basis: 85%;
    user-select: none;
`;

const View = ({content, number, deleteTodo, markAsDone, disabled}) => {

    function onDeleteTodo() {
        if (disabled) {
            return;
        } 
        console.log(number);
        deleteTodo(number); //props
    }

    return (
        <TodoContainer> { /*Empty container */}
            <TodoCheckbox 
                number={number} 
                disabled={disabled}
                onMarkAsDone={markAsDone}/>
            <TodoText>{content}</TodoText>
            <Logo 
                className={styles.close}
                onClick={onDeleteTodo}/>
        </TodoContainer>
    );
}

export default class TodoListItem extends Component {
    
    render() {
        const {...itemProps} = this.props;

        return (
            <View {...itemProps}/>
        );
    }
}

export {TodoContainer};



import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import NewTodo from '../new-todo-field/NewTodo';
import TodoList from '../todo-list/TodoList';
const MainContainer = styled.div`
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export default class App extends Component {
    render() {
        return (
            <MainContainer>
                <Header/>
                <NewTodo/>
                <TodoList/>
            </MainContainer>
        );
    }
}


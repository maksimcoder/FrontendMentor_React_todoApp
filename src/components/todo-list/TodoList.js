import React, { Component } from 'react';
import styled from 'styled-components';
import TodoListItem from '../todo-item/TodoListItem';
import Footer from '../footer/Footer';

const ListContainer = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    overflow: scroll;
    background: white; 
    border-radius: 5px; 
    /* -webkit-box-shadow: 0px 10px 33px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 10px 33px 0px rgba(34, 60, 80, 0.2); */
    box-shadow: 0px 10px 33px 0px rgba(34, 60, 80, 0.2);
`;


export default class TodoList extends Component {
    render() {
        return (
            <ListContainer>
                <TodoListItem/>
                <Footer/>
            </ListContainer>
        );
    }
}


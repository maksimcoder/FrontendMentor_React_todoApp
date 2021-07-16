import React, { Component } from 'react';
import styled from 'styled-components';
import nextId, { setPrefix } from "react-id-generator";
import Header from '../header/Header';
import NewTodo from '../new-todo-field/NewTodo';
import TodoList from '../todo-list/TodoList';

setPrefix('todo-');

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

const Attribution = styled.div`
    font-size: 11px;
    text-align: center;
    margin-top: 10px;
    color: gray;

    a {
        color: hsl(228, 45%, 44%);
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        color: orange;
    }
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                
            ],
            filter: "all"
        }
    }

    


    addTodo = (text) => {
        const newItem = {
            content: text,
            disabled: false,
            active: true,
            id: nextId()
        }

        this.setState(({todos}) => {
            const newArr = [...todos, newItem];
            localStorage.setItem('todos', JSON.stringify(newArr));
            return {
                todos: newArr
            }
        });

    }

    deleteTodo = (id) => {
        this.setState(({todos}) => {
            const index = todos.findIndex(item => item.id === id);

            const before = todos.slice(0, index);
            const after = todos.slice(index + 1);

            const newTodos = [...before, ...after];

            return {
                todos: newTodos
            }
        });
    }

    changeOnSetState = (id, property) => {
        this.setState(({todos}) => {
            const index = todos.findIndex(item => item.id === id);
            console.log(todos);
            const oldObj = todos[index];
            console.log(oldObj);
            const newObj = {
                ...oldObj,
                active: !oldObj.active, 
                [property]: !oldObj[property]
            };
            console.log(newObj);
            const newArr = [...todos.slice(0, index), newObj, ...todos.slice(index + 1)];
            console.log(newArr);
            return {
                todos: newArr
            }
        });
    }

    markAsDone = (number) => {
        this.changeOnSetState(number, 'completed');
    }
    
    deleteAllDoneTodos = () => {
        // const {todos} = this.state;
        // const newArr = todos.filter(item => item.completed);
        // newArr.forEach(item => this.deleteTodo(item.id));

        console.log(JSON.parse(localStorage.getItem('todos')));
    }

    filterItems = (items, filter) => {
        if (filter === 'completed') {
            return items.filter(item => item.completed);
        } else if (filter === 'active') {
            return items.filter(item => item.active);
        } else {
            return items;
        }
    }

    handleChangeFilter = (property) => {
        this.setState({
            filter: property
        });
    }

    render() {
        const {todos, filter} = this.state;
        const visibleTodos = this.filterItems(todos, filter);

        const mentorLink = "https://www.frontendmentor.io?ref=challenge",
              userLink = "https://github.com/maksimcoder";

        return (
            <>
                <MainContainer>
                    <Header/>
                    <NewTodo
                        addTodo={this.addTodo}/>
                    <TodoList
                        todos={visibleTodos}
                        deleteTodo={this.deleteTodo}
                        markAsDone={this.markAsDone}
                        handleChangeFilter={this.handleChangeFilter}
                        deleteAllDone={this.deleteAllDoneTodos} 
                    />
                </MainContainer>
                <Attribution>
                    Challenge by <a href={mentorLink}>Frontend Mentor</a>. 
                    Coded by <a href={userLink}>Maksim Deviatilov</a>.
                </Attribution>
            </>
        );
    }
}


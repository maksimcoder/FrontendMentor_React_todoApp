import React, { Component, useState, useEffect } from 'react';
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
    constructor(props) {
        super(props);
        this.state = {
            todosAmount: 0,
            basic: true
        }
    }

    static defaultProps = {
        todos: []
    }

    componentDidMount() {
        if (this.props) {
            this.setState({
                todosAmount: this.props.todos.length
            });
        }  
    }

    componentDidUpdate(prevProps) {
        const {todos} = this.props;
        if (prevProps !== this.props) {
            this.setState({
                todosAmount: this.props.todos.length,
                basic: todos.length === 0 ? true : false
            });
        } 
    }

    formElements(array) {
        return array.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <TodoListItem 
                    key={id}
                    number={id}
                    deleteTodo={this.props.deleteTodo}
                    markAsDone={this.props.markAsDone}
                    {...itemProps}
                />
            )
        });
    }

    render() {
        const {todos, handleChangeFilter, deleteAllDone} = this.props,
              {basic, todosAmount} = this.state,
              emptyText = 'Here your Todo will be displayed',
              newArray = this.formElements(todos);

        const elements = basic ? <TodoListItem content={emptyText} disabled={true} /> : newArray;

        return (
            <ListContainer>
                {elements}
                <Footer 
                    todosAmount={todosAmount}
                    handleChangeFilter={handleChangeFilter}
                    deleteAllDone={deleteAllDone}
                />
            </ListContainer>
        )

    }
}

// export default function TodoList(todos) {
//     const [todosAmount, setAmount] = useState(0);
//     const [basic, toggleBasic] = useState(true);
//     const emptyText = 'Here your Todo will be displayed';
    

//     useEffect(() => {
//         if (todos.length) {
//             setAmount(todos.length);
//             toggleBasic(false);
//         }
//         console.log('effect');
//     }, [todos.length]);

//     function formElements(array) {
//         return array.map((item) => {
//             const {id, ...itemProps} = item;
//             console.log(item);
//             return (
//                 <TodoListItem 
//                     key={id}
//                     {...itemProps}/>
//             )
//         });
//     }

//     const elements = formElements(todos);
    

//     return (
//         <ListContainer>
//             {elements}
//             <Footer/>
//         </ListContainer>
//     )
// }



import React, {useState} from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    border-top: 1px solid hsl(0, 0%, 90%);
    color: hsl(236, 9%, 61%);
    font-weight: 700;
    font-size: 14px;
    padding: 10px;
`;

const ItemsLeftNum = styled.div`
    cursor: default;
`;

const FooterList = styled.ul`
    list-style: none;
    margin: 0;

    li {
        display: inline;
        margin: 2px;
        cursor: pointer;
    }
`;

const FooterListItem = styled.li`
    color: ${props => props.active ? 'orange' : "hsl(236, 9%, 61%)"};
    &:hover {
        color: orange;
    }
`;

const FooterBtn = styled.button`
    border: none;
    text-decoration: none;
    background: transparent;
    color: hsl(236, 9%, 61%);
    font-family: 'Josefin Sans', sans-serif;
    cursor: pointer;

    &:hover {
        color: orange;
    }

    &:active,
    &:focus {
        outline: none;
    }
`;




export default function Footer({todosAmount, handleChangeFilter, deleteAllDone}) {
    const [filter, setFilter] = useState('all');

    function onShowAllTodos() {
        const text = 'all';
        setFilter(text)
        handleChangeFilter('all')
    }

    function onShowDoneTodos() {
        console.log(filter);
        setFilter('done');
        console.log(filter);
        handleChangeFilter('done');
    }

    function onShowActiveTodos(e) {
        console.log(e.target.textContent);
    }

    function onClickHandle(e) {
        const text = (e.target.textContent.toLowerCase());
        setFilter(text);
        handleChangeFilter(text);
    }
    console.log(filter);
    return (
        <FooterContainer>
            <div>
                <ItemsLeftNum>{todosAmount} items left</ItemsLeftNum>
            </div>
            <FooterList>
                <FooterListItem 
                    active={filter === 'all' ? true : false}
                    onClick={onClickHandle}
                >All
                </FooterListItem>
                <FooterListItem
                    active={filter === 'active' ? true : false}  
                    onClick={onClickHandle}  
                >Active
                </FooterListItem>
                <FooterListItem
                    active={filter === 'completed' ? true : false}
                    onClick={onClickHandle}
                >Completed
                </FooterListItem>
            </FooterList>
            <div>
                <FooterBtn
                    onClick={deleteAllDone}
                >Clear Completed</FooterBtn>
            </div>
        </FooterContainer>
    );
}


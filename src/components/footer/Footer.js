import React, { Component } from 'react';
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




export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <div>
                    <ItemsLeftNum>3 Items left</ItemsLeftNum>
                </div>
                <FooterList>
                    <FooterListItem>All</FooterListItem>
                    <FooterListItem>Active</FooterListItem>
                    <FooterListItem>Completed</FooterListItem>
                </FooterList>
                <div>
                    <FooterBtn>Clear Completed</FooterBtn>
                </div>
            </FooterContainer>
        );
    }
}


import React, { Component } from 'react';
import styled from 'styled-components';



const HeadContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
`;

const HeadText = styled.h1`
    margin: 0;
    flex-basis: 95%;
    font-weight: 700;
    font-size: 35px;
    text-transform: uppercase;
    letter-spacing: 13px;
    cursor: default;
`;

const HeadChangeTheme = styled.div`
    cursor: pointer;
`;

export default class Header extends Component {
    render() {
        return (
            <HeadContainer>
                <HeadText>todo</HeadText>
                <HeadChangeTheme>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                        <path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/>
                    </svg>
                </HeadChangeTheme>
            </HeadContainer>
        );
    }
}


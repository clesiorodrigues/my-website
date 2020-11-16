import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0;
    height: 100px;
    width: 100vw;
    background-image: linear-gradient(180deg, rgb(30, 0, 70), rgba(30, 0, 110, .5), rgba(30, 0, 110, 0));
    color: white;

    nav {
        display: flex;
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
        padding-top: 15px;
    }

    ul {
        display: flex;
        list-style: none;
    }

    button {
        margin-left: auto;
        right: 0;
    }
`;
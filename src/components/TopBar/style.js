import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0;
    height: 100px;
    width: 100vw;
    background-image: linear-gradient(180deg, rgb(20, 0, 65), rgba(30, 0, 90, .5), rgba(30, 0, 110, 0));
    color: white;

    nav {
        display: flex;
        width: 80vw;
        margin-left: auto;
        margin-right: auto;
        padding-top: 20px;
    }

    h1 {
        margin-top: 2px;
        font-size: 35px;
    }

    ul {
        display: flex;
        list-style: none;
        margin-left: auto;
        right: 0;
    }

    li {
        margin-top: 12px;
        margin-left: 20px;
        cursor: pointer;
    }

    button {
        margin-left: 35px;
        right: 0;
    }
`;
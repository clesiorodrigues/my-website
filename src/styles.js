import styled from 'styled-components';

export const CenterSection = styled.section`
    height: 100vh;

    div {
        width: 80vw;
        max-width: 1536px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;


export const Button = styled.button`
    height: 44px;
    border-radius: 22px;
    padding: 0px 20px 0px 20px;
    border: solid 3px white;
    font-size: 30px;
    font-weight: bold;
`;
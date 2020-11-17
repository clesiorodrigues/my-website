import styled from 'styled-components';

export const CenterSection = styled.section`
    height: 100vh;
    background-color: ${props => `${props.BGC}`};

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
    padding: 0px 25px 0px 25px;
    border: solid 3px white;
    font-size: 30px;
    font-weight: bold;
    background-color: ${props => `${props.BGC}`};
    color: ${props => `${props.Color}`};
    border: none;
`;
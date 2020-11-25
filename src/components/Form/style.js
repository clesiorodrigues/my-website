import styled from 'styled-components';

export const FormCont = styled.form`
    position: fixed;
    top: 20px;
    right: 10vw;
    
    width: 30vw;
    height: 93vh;
    padding: 25px;
    padding-top: 80px;
    
    /* background-color: rgba(255,0,0,.2); */
    transition: .4s all;

    display: none;
    opacity: 0;

    div {
        margin-bottom: 20px;
    }

    input {
        margin-top: 5px;
        height: 44px;
        border-radius: 22px;
        border: 1px solid rgb(200,200,200);
        width: 100%;
        padding: 12px;
        font-size: 20px;
        color: rgb(60,60,60);
    }

    textarea {
        margin-top: 5px;
        border-radius: 22px;
        border: 1px solid rgb(200,200,200);
        width: 100%;
        height: 20vh;
        padding: 12px;
        font-size: 20px;
        color: rgb(60,60,60);
    }

    button {
        margin-left: auto;
        margin-right: auto;
    }
`;


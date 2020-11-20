import React from 'react';
import { Button } from '../../styles';
import { FormCont } from './style';

const Form = () => {
    return(
        <FormCont>
            <div>
                <label for="nome">Nome:</label>
                <br/>
                <input type="text" id="nome" />
            </div>
            <div>
                <label for="email">E-mail:</label>
                <br/>
                <input type="email" id="email" />
            </div>
            <div>
                <label for="msg">Mensagem:</label>
                <br/>
                <textarea id="msg"></textarea>
            </div>
            <Button type="submit" Color='white' BGC='rgb(50,50,50)' >enviar</Button>
        </FormCont>
    );
}

export default Form;
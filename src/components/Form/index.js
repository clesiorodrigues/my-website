import React from 'react';
import { FormCont } from './style';

const Form = () => {
    return(
        <FormCont>
            <h2>Contato</h2>
            <label>
                Nome/Empresa:
                <input/>
            </label>
        </FormCont>
    );
}

export default Form;
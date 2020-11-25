import React from 'react';
import { IdeiaSection } from './style';
import Empresa from '../../img/ideia_empresa.png';
import Aplicacao from '../../img/ideia_aplicacao.png';
import Loja from '../../img/ideia_loja.png';

const Ideia = () => {
    return(
        <IdeiaSection BGC="green">
            <div>
                <div>
                    <img src={Empresa} alt="Icone empresa"/>
                </div>
                <div>
                    <img src={Loja} alt="Icone loja" />
                </div>
                <div>
                    <img src= {Aplicacao} alt="Icone idea"/>
                </div>
            </div>
        </IdeiaSection>
    );
}

export default Ideia;
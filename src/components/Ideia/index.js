import React from 'react';
import { IdeiaSection } from './style';
import Empresa from '../../img/ideia_empresa.png';
import Aplicacao from '../../img/ideia_aplicacao.png';
import Loja from '../../img/ideia_loja.png';

const Ideia = () => {
    return(
        <IdeiaSection BGC="green">
            <div>
                <article>
                    <h1>Título de teste</h1>
                    <p>
                        alskjd jhjh h sakdfcklhasha lã kljadw lfkjalswdj l ljsdjwcljas hjwdl jlwja ljlj lvlsjda ljsdljfv lj la jvclj ljl j ljasdlj lvs efadkfjkvladf csin n anm njcaslclk jaljesdwdlk lcvmkldxm kmcm m emv nmertgnlkertm gklçmb.
                    </p>
                </article>
                <article>
                    <img src={Empresa} alt="Icone empresa"/>               
                    <img src={Loja} alt="Icone loja" />               
                    <img src= {Aplicacao} alt="Icone idea"/>
                </article>
                
            </div>
        </IdeiaSection>
    );
}

export default Ideia;
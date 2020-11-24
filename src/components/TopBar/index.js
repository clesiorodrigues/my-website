import React from 'react';
import { Button, Li } from '../../styles';
import { telaContato } from './function';
import { ExpBotao, Header} from './style';
// import { posicao } from '../../functions';
import { mudarCor } from '../../functions';

const TopBar = () => {
    return(
        <Header>
            <nav>
                <div id="t_contato" onClick={()=>{telaContato()}}></div>
                <ExpBotao id="f_contato"></ExpBotao>

                <h1>Empresa</h1>
                <ul>
                    <Li Cor="rgb(113, 61, 255)" onClick={()=>{mudarCor('Home')}} >Home</Li>
                    <Li Cor=" rgb(255, 122, 61)" onClick={()=>{mudarCor('Sobre')}} >Sobre</Li>
                    <Li Cor=" rgb(164, 164, 164)" onClick={()=>{mudarCor('Ideia')}} >Ideias</Li>
                    <Li Cor=" rgb(86, 255, 81)" onClick={()=>{mudarCor('Port')}} >Portifólio</Li>
                    <Li Cor=" rgb(88, 160, 255)" onClick={()=>{mudarCor('Repos')}} >Repositórios</Li>
                    <Li Cor=" rgb(220, 220,220)" onClick={()=>{mudarCor('Links')}} >Links</Li>
                </ul>
                <Button onClick={()=>{telaContato()}} Color="rgb(30, 0, 90)">Contato</Button>
            </nav>
        </Header>
    );
}


// function mudarCor(id) {
//     switch(id) {
//         case 'Home':
//             // posicao = 0;
//             document.querySelector('body').style.marginTop = '0vh';
//             break;

//         case 'Sobre':
//             // posicao = -100;
//             document.querySelector('body').style.marginTop = '-100vh';
//             break;

//         case 'Ideia':
//             // posicao = -200;
//             document.querySelector('body').style.marginTop = '-200vh';
//             break;

//         case 'Port':
//             // posicao = -300;
//             document.querySelector('body').style.marginTop = '-300vh';
//             break;

//         case 'Repos':
//             // posicao = -400;
//             document.querySelector('body').style.marginTop = '-400vh';
//             break;

//         case 'Links':
//             // posicao = -500;
//             document.querySelector('body').style.marginTop = '-500vh';
//             break;

//         default: 
//             break;
//     }
// }

export default TopBar;
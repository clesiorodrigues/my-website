
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

                <h1>SandBox</h1>
                <ul>
                    <Li Cor="rgb(113, 61, 255)" onClick={()=>{mudarCor('Home')}} >Home</Li>
                    <Li Cor=" rgb(255, 100, 100)" onClick={()=>{mudarCor('Ideia')}} >Ideias</Li>
                    <Li Cor=" rgb(86, 255, 81)" onClick={()=>{mudarCor('Port')}} >Portifólio</Li>
                    <Li Cor=" rgb(88, 160, 255)" onClick={()=>{mudarCor('Repos')}} >Repositórios</Li>
                    <Li Cor=" rgb(255, 122, 61)" onClick={()=>{mudarCor('Sobre')}} >Sobre</Li>
                    <Li Cor=" rgb(120, 120,120)" onClick={()=>{mudarCor('Links')}} >Links</Li>
                </ul>
                <Button onClick={()=>{telaContato()}} Color="rgb(30, 0, 90)">Contato</Button>
            </nav>
        </Header>
    );
}
export default TopBar;
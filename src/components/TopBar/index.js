
import React from 'react';
import { Button, Li } from '../../styles';
import { telaContato } from './function';
import { ExpBotao, Header} from './style';
import { mudarTela } from '../../functions';

const TopBar = () => {
    return(
        <Header>
            <nav>
                <div id="t_contato" onClick={()=>{telaContato()}}></div>
                <ExpBotao id="f_contato"></ExpBotao>

                <h1>SandBox</h1>
                <ul>
                    <Li Cor="rgb(113, 61, 255)" onClick={()=>{mudarTela('Home')}} >Home</Li>
                    <Li Cor=" rgb(255, 100, 100)" onClick={()=>{mudarTela('Ideia')}} >Ideias</Li>
                    <Li Cor=" rgb(86, 255, 81)" onClick={()=>{mudarTela('Port')}} >Portifólio</Li>
                    <Li Cor=" rgb(255, 122, 61)" onClick={()=>{mudarTela('Sobre')}} >Sobre</Li>
                    <Li Cor=" rgb(120, 120,120)" onClick={()=>{mudarTela('Links')}} >Links</Li>
                </ul>
                <Button onClick={()=>{telaContato()}} Color="rgb(30, 0, 90)">Contato</Button>
            </nav>
        </Header>
    );
}
export default TopBar;
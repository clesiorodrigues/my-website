import React from 'react';
import { Button } from '../../styles';
import { Header } from './style';

const TopBar = () => {
    return(
        <Header>
            <nav>
                <h1>Empresa</h1>
                <ul>
                    <li onClick={()=>{mudarCor('Home')}} >Home</li>
                    <li onClick={()=>{mudarCor('Sobre')}} >Sobre</li>
                    <li onClick={()=>{mudarCor('Port')}} >Portifólio</li>
                    <li onClick={()=>{mudarCor('Repos')}} >Repositórios</li>
                    <li onClick={()=>{mudarCor('Links')}} >Links</li>
                </ul>
                <Button>Contato</Button>
            </nav>
        </Header>
    );
}

function mudarCor(id) {
    switch(id) {
        case 'Home':
            document.querySelector('body').style.marginTop = '0vh';
            break;
        case 'Sobre':
            document.querySelector('body').style.marginTop = '-100vh';
            break;
        case 'Port':
            document.querySelector('body').style.marginTop = '-200vh';
            break;
        case 'Repos':
            document.querySelector('body').style.marginTop = '-300vh';
            break;
        case 'Links':
            document.querySelector('body').style.marginTop = '-400vh';
            break;
        default: 
            break;
    }
}

export default TopBar;
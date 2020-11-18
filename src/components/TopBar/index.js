import React from 'react';
import { Button, Li } from '../../styles';
import { Header } from './style';

const TopBar = () => {
    return(
        <Header>
            <nav>
                <h1>Empresa</h1>
                <ul>
                    <Li Cor="purple" onClick={()=>{mudarCor('Home')}} >Home</Li>
                    <Li Cor="orange" onClick={()=>{mudarCor('Sobre')}} >Sobre</Li>
                    <Li Cor="grey" onClick={()=>{mudarCor('Ideia')}} >Ideias</Li>
                    <Li Cor="green" onClick={()=>{mudarCor('Port')}} >Portifólio</Li>
                    <Li Cor="blue" onClick={()=>{mudarCor('Repos')}} >Repositórios</Li>
                    <Li Cor="black" onClick={()=>{mudarCor('Links')}} >Links</Li>
                </ul>
                <Button Color="rgb(30, 0, 90)">Contato</Button>
            </nav>
        </Header>
    );
}


function mudarCor(id) {
    switch(id) {
        case 'Home':
            if(document.querySelector('body').style.marginLeft !== '0vw') {
                document.querySelector('body').style.marginLeft = '0vw';
                setTimeout(()=>{document.querySelector('body').style.marginTop = '0vh'}, 300);
            } else {
                document.querySelector('body').style.marginTop = '0vh';
            }
            break;

        case 'Sobre':
            if(document.querySelector('body').style.marginLeft !== '0vw') {
                document.querySelector('body').style.marginLeft = '0vw';
                setTimeout(()=>{document.querySelector('body').style.marginTop = '-100vh'}, 300);
            } else {
                document.querySelector('body').style.marginTop = '-100vh';
            }
            break;

        case 'Ideia':
            document.querySelector('body').style.marginTop = '-100vh';
            setTimeout(()=>{document.querySelector('body').style.marginLeft = '-100vw'}, 300);
            break;

        case 'Port':
            if(document.querySelector('body').style.marginLeft !== '0vw') {
                document.querySelector('body').style.marginLeft = '0vw';
                setTimeout(()=>{document.querySelector('body').style.marginTop = '-200vh'}, 300);
            } else {
                document.querySelector('body').style.marginTop = '-200vh';
            }
            break;

        case 'Repos':
            if(document.querySelector('body').style.marginLeft !== '0vw') {
                document.querySelector('body').style.marginLeft = '0vw';
                setTimeout(()=>{document.querySelector('body').style.marginTop = '-300vh'}, 300);
            } else {
                document.querySelector('body').style.marginTop = '-300vh';
            }
            break;

        case 'Links':
            if(document.querySelector('body').style.marginLeft !== '0vw') {
                document.querySelector('body').style.marginLeft = '0vw';
                setTimeout(()=>{document.querySelector('body').style.marginTop = '-400vh'}, 300);
            } else {
                document.querySelector('body').style.marginTop = '-400vh';
            }
            break;

        default: 
            break;
    }
}

export default TopBar;
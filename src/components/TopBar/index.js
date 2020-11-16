import React from 'react';
import { Button } from '../../styles';
import { Header } from './style';

const TopBar = () => {
    return(
        <Header>
            <nav>
                <h1>Empresa</h1>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Portifólio</li>
                    <li>Repositórios</li>
                    <li>Links</li>
                </ul>
                <Button>Contato</Button>
            </nav>
        </Header>
    );
}

export default TopBar;
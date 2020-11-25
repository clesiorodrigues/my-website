import React from 'react';
import {Imagem, HomeSection, Article} from './style';
import ImgResume from '../../img/resumeImage.png';
import { Button } from '../../styles';
import { mudarTela } from '../../functions';

const Home = () => {
    return(
        <HomeSection id="h">
            <div>
                <Article>
                    <h1>Desenvolvimento de aplicações para web</h1>

                    <p>Desenvolvimento, criação e gestão de sites, lojas virtuais, vitrines online, dentre outras aplicações produzidas com as ferramentas mais atuais do mercado. Expanda da sua empresa ou ideia ao alcance da internet.</p>
                    <br/>
                    <Button BGC="white" Color="rgb(120, 0, 175)" onClick={()=>{mudarTela('Ideia')}}> MAIS </Button>
                </Article>
                <Imagem src={ImgResume} alt="Ilustração do Resumo"/>
            </div>
        </HomeSection>
    );
}

export default Home;
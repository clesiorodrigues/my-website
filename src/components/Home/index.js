import React from 'react';
import {Imagem, HomeSection, Article} from './style';
import ImgResume from '../../img/resumeImage.png';
import { Button } from '../../styles';

const Home = () => {
    return(
        <HomeSection id="h">
            <div>
                <Article>
                    <h1>Título do texto</h1>
                    <p>See gradients were super played hgjfghjghjghjgfjout backhhhfdh in the early web days, ubiquitous that yghjghjhjhou’d be remiss not to drop them in your site, interface, or next hair dye job.</p>
                    <br/>
                    <Button BGC="white" Color="rgb(120, 0, 175)" >MAIS</Button>
                </Article>
                <Imagem src={ImgResume} alt="Ilustração do Resumo"/>
            </div>
        </HomeSection>
    );
}

export default Home;
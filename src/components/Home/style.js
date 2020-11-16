import styled from 'styled-components';
import { CenterSection } from '../../styles';


export const Imagem = styled.img`
    margin-top: 18vh;
    height: 65vh;
    margin-left: auto;
    margin-right: auto;
`;

export const HomeSection = styled(CenterSection)`
    background-image: linear-gradient(45deg, rgb(120, 1, 195), rgb(90, 1, 195),  rgb(25, 0, 90));
`;

export const Article = styled.article`
    margin-top: 38vh;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    color: white;

    h1 {
        font-size: 60px;
    }
`;
import styled from 'styled-components';
import { CenterSection } from '../../styles';


export const Imagem = styled.img`
    margin-top: 22vh;
    height: 65vh;
    margin-left: auto;
    margin-right: auto;
`;

export const HomeSection = styled(CenterSection)`
    background-image: linear-gradient(45deg, rgb(140, 0, 175), rgb(80, 1, 175),  rgb(20, 0, 80));
`;

export const Article = styled.article`
    margin-top: 38vh;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    color: white;

    h1 {
        font-size: 45px;
        line-height: 45px;
    }
`;
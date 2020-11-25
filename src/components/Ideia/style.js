import styled from 'styled-components';
import { CenterSection } from '../../styles';

export const IdeiaSection = styled(CenterSection)`
    background-image: linear-gradient(135deg, rgb(78, 154, 7), rgb(26, 111, 19),  rgb(5, 70, 5));
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        div {
            margin-top: 15vh;
            text-align: center;

            height: 72vh;
            width: 25vw;
            border-radius: 22px;
            background-color: #fff;
        }

        img {
            height: 20vh;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;
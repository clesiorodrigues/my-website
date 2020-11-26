import styled from 'styled-components';
import { CenterSection } from '../../styles';

export const IdeiaSection = styled(CenterSection)`
    background-image: linear-gradient(135deg, rgb(48, 184, 60), rgb(20, 131, 69),  rgb(5, 70, 50));
    div {
        max-width: 1536px;
        padding-top: 15vh;
        display: grid;
        grid-template-columns: 2fr 3fr;
        margin-left: auto;
        margin-right: auto;
        grid-gap: 5vw;

        article {
            margin-top: 8vh;
            text-align: center;
            background-color: rgba(255,255,255,.1);
          
            text-align: left;
            color: white;

            img {
                height: 16vh;
            }

            h1 {
                font-size: 48px;
                line-height: 48px;
            }

            p {
                margin-top: 10px;
            }
        }

        
    }
`;
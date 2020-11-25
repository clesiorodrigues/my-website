
var posicao = 0;
var body = document.querySelector('body');    

export const rolar = (e) => {

    if(e.deltaY > 0) 
            {
                if(posicao > -400) {
                    posicao -= 100;
                body.style.marginTop = `${posicao}vh`;
                }
            }else if(e.deltaY < 0) 
            {
                if(posicao < 0) {
                    posicao += 100;
                body.style.marginTop = `${posicao}vh`;
                }
            }
    
}

export const mudarTela = (id) => {
    switch(id) {
        case 'Home':
            posicao = 0;
            body.style.marginTop = '0vh';
            break;

        case 'Ideia':
            posicao = -100;
            body.style.marginTop = '-100vh';
            break;

        case 'Port':
            posicao = -200;
            body.style.marginTop = '-200vh';
            break;

        case 'Sobre':
            posicao = -400;
            body.style.marginTop = '-300vh';
            break;

        case 'Links':
            posicao = -500;
            body.style.marginTop = '-400vh';
            break;

        default: 
            break;
    }
}
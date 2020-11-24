
var posicao = 0;
var body = document.querySelector('body');    

export const rolar = (e) => {

    if(e.deltaY > 0) 
            {
                if(posicao > -500) {
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

export const mudarCor = (id) => {
    switch(id) {
        case 'Home':
            posicao = 0;
            body.style.marginTop = '0vh';
            break;

        case 'Sobre':
            posicao = -100;
            body.style.marginTop = '-100vh';
            break;

        case 'Ideia':
            posicao = -200;
            body.style.marginTop = '-200vh';
            break;

        case 'Port':
            posicao = -300;
            body.style.marginTop = '-300vh';
            break;

        case 'Repos':
            posicao = -400;
            body.style.marginTop = '-400vh';
            break;

        case 'Links':
            posicao = -500;
            body.style.marginTop = '-500vh';
            break;

        default: 
            break;
    }
}
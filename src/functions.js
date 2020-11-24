
export var posicao = 0;

export const rolar = (e) => {
    var home = document.querySelector('section#h');
    console.log(e.deltaY);
    

    if(e.deltaY > 0) 
            {
                if(posicao > -500) {
                    posicao -= 100;
                home.style.marginTop = `${posicao}vh`;
                console.log(`${e.deltaY} ${posicao}`);
                }

            }else if(e.deltaY < 0) 
            {
                if(posicao < 0) {
                    posicao += 100;
                home.style.marginTop = `${posicao}vh`;
                console.log(`${e.deltaY} ${posicao}`);
                }
            }
    
}
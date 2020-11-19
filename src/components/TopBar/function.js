export const telaContato = () => {

    var branco = document.querySelector('div#t_contato');
    var form = document.querySelector('form#f_contato');

    if(branco.style.marginTop !== '-20px') {
        branco.style.marginTop = '-20px';
        form.style.right = '10vw';
    } else {
        branco.style.marginTop = '-150vh';
        form.style.right = '-100vw';
    }
};
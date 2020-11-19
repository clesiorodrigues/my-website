export const telaContato = () => {
    var branco = document.querySelector('div#t_contato');
    var form = document.querySelector('form#f_contato');

    if(form.style.height !== '93vh') {
        branco.style.marginTop = '-20px';
        form.style.height = '93vh';
        form.style.opacity = '1';
        form.style.width = '35vw';
    } else {
        branco.style.marginTop = '-150vh';
        form.style.height = '0';
        form.style.width = '170px';
        form.style.opacity = '0';
    }
};
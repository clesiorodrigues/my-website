export const telaContato = () => {
    var branco = document.querySelector('div#t_contato');
    var divForm = document.querySelector('div#f_contato');
    var form = document.querySelector('form');

    if(divForm.style.height !== '93vh') {
        branco.style.marginTop = '-20px';
        divForm.style.height = '93vh';
        divForm.style.opacity = '1';
        divForm.style.width = '30vw';
        form.style.display = 'unset';
        setTimeout(()=>{ form.style.opacity = '1' }, 100);
    } else {
        branco.style.marginTop = '-150vh';
        divForm.style.height = '0';
        divForm.style.width = '170px';
        divForm.style.opacity = '0';
        form.style.display = 'none';
        form.style.opacity = '0';
    }
};
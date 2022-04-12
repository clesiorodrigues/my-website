var timeOut = true;
var marginTop = 0;
var telaAtual = 1;
$('.app').css('margin-top', `0px`);

function detectarScroll(e, direcao = null) {
    let scroll = e.deltaY;
    if(direcao) {
        scroll = direcao;
    }
    if (timeOut) {
        if(scroll > 0) {
            if(telaAtual < 5) {
                telaAtual++;
            }
        }  
        if(scroll < 0) {
            if(telaAtual > 1) {
                telaAtual--;
            }
        }
        $($('.nav_point')[telaAtual-1]).click();
        timeOut = false;
        setTimeout(() => {
            timeOut = true;
        }, 200);
    }
}

$('.btn_ideias').click(() => {
    $($('.nav_point')[1]).click();
});


$('.nav_point').click(function() {
    if($(this).parent().find('.link_to_home').length) {
        $('.fundo').css('width', '40%');
        $('.fundo').css('opacity', '1');
        $('.img_figure').css('margin-left', '0px');
        $('.circle_01').css('left', '-100px');
        $('.circle_02').css('right', '-20vh');
    } else {
        $('.fundo').css('width', '20%');
        $('.fundo').css('opacity', '0');
        $('.img_figure').css('margin-left', '-100px');
        $('.circle_01').css('left', '-300px');
        $('.circle_02').css('right', '-40vh');
    }

    $('.nav_point').removeClass('bg_white');
    setTimeout(() => {
        $(this).addClass('bg_white');
    }, 200);
});


// function detectarScroll(e) {

//     let posicaoAtual = e.deltaY;
//     if (timeOut) {
//         $('.nav_point').removeClass("bg_white");

//         if (posicaoAtual > 0) {
//             if(marginTop > -4) {
//                 marginTop = marginTop - 1;
//                 $('.app').css('margin-top', `${marginTop}00vh`);
//                 $('.nav_top-bar').addClass('encolher');

//                 $($('.nav_point')[((marginTop+1)*-1)+1]).addClass('bg_white');
//                 console.log(marginTop+1);
//             }

//         } else if (posicaoAtual < 0) {
//             if(marginTop < 0) {
//                 marginTop = marginTop + 1;
//                 $('.app').css('margin-top', `${marginTop}00vh`);
//                 $('.nav_top-bar').removeClass('encolher');
                
//                 $($('.nav_point')[((marginTop+1)*-1)+1]).addClass('bg_white');
//                 console.log(marginTop+1);

//             }

//         }
//         timeOut = false;
//         setTimeout(() => {
//             timeOut = true;
//         }, 200);
//     }
// }

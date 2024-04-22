let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})



$(document).ready(function(){

    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.application .image').show(400);
        }
        else{
            $('.application .image').not('.' +filter).hide(200);
            $('.application .image').filter('.' +filter).show(200);
        }

    });

    $('.application').magnificPopup({
        delegate:'a',
        type:'image',
        application:{
            enabled:true,
        }
    });

});




var swiper = new Swiper('.group-slider', {
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        634: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
    },
});


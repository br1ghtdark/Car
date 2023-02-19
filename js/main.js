$(function () {

    $(".header__right-rateyo").rateYo({
        rating: 4.47,
    });

    var mixer = mixitup('.blog__body-content');

    $('.reviews__body').slick({
        arrows: false,
        slidesToShow: 2,
        dots: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }]
    })

    $('.rewiews__arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.reviews__body').slick('slickPrev')
    })
    $('.rewiews__arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.reviews__body').slick('slickNext')
    })

    $('.questions__list-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('questions__list-link--active')
        $(this).children('.questions__list-text').slideToggle()
    })

    $(".header__nav-list a, .service__head-title a, .footer__nav-list a").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 700);
    });

    // ----------MEDIA----------
    $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
                $('.burger').addClass('burger--follow')
            } else {
                $('.burger').removeClass('burger--follow')
            }
    })

    $('.burger, .burger--follow, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger').toggleClass('burger--active')
    })

    //     let menuBtn = document.querySelector('.burger');
    //     let header__top = document.querySelector('.header__top');
    //     menuBtn.addEventListener('click', function(){
    //     menuBtn.classList.toggle('burger--active');
    // 	header__top.classList.toggle('burger--active');
    // })
});


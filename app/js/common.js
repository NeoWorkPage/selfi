$(function() {

    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });


    $('.countdown').downCount({
        date: '04/20/2017 05:00:00',
        offset: +10
    }, function () {
        alert('Акция закончилась!');
    });


    jQuery(function(f){
        var element = f('#menu');
        f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);
        });
    });



    $('.burger').click(function () {
        if($('.burger').hasClass('burger--active')){
            $('.burger').removeClass('burger--active');
            $('.nav__list').removeClass('nav__list--active');
        }else {
            $('.burger').addClass('burger--active');
            $('.nav__list').addClass('nav__list--active');
        }
    });

    $('.nav__link ').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    $('.btn_open').click(function () {
        $('.form_wrapper').css({"display":"table"});
        $('body').css({"overflow":"hidden"});
    });

    $('.burger').click(function () {
        $('.menu').toggleClass('opacity');
    });


    $('.close').click(function () {
        $('.form_wrapper').css({"display":"none"});
        $('body').css({"overflow":"scroll"});
    });

    $('.close').click(function () {
        $('.form_predlojenie').css({"display":"none"});
    });
    // Скрол до верха

    $(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

    $(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
            $('.form_predlojenie').css({"display":"table"});
            setTimeout(function() {
                $.magnificPopup.close();
                $(".forms").trigger("reset");
            }, 1000);
        });
        return false;
    });


    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        $('.slider').each(function(i){
            if($(this).position().top <= windscroll + 100) {
                $('.nav__item-active').removeClass('nav__item-active');
                $('.nav__item').eq(i).addClass('nav__item-active');
            }
        });
    });


});

(function ($) {
    "use strict";
    new WOW().init();
    //document.getElementsById("projects").style.display = "none";
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    if ($('.person .person-text h2').length == 1) {
        var typed_strings = $('.person .person-text .typed-text').text();
        var typed = new Typed('.person .person-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });

    $('.clickable-image').on('click', function() {
        var imgSrc = $(this).data('img-src');
        var caption = $(this).data('caption');
        $('#modalImage').attr('src', imgSrc);
        $('#modalCaption').text(caption);
        $('#imageModalLabel').text(caption);
    });

    
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        document.getElementById("projects").style.display = "";

        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });

    });




})(jQuery);




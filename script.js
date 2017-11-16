$(function() {

    // SHOW/HIDE MORE ARTICLE CONTENTS
    $('.article-link-1').on('click touchstart', function() {
        $('.article-1-more-content').slideToggle();
        if($(this).text() === '> Read More') {
            $(this).text('> Read Less');
        } else {
            $(this).text('> Read More');
        }
    });

    $('.article-link-2').on('click touchstart', function() {
        $('.article-2-more-content').slideToggle();
        if($(this).text() === '> Read More') {
            $(this).text('> Read Less');
        } else {
            $(this).text('> Read More');
        }
    });

    // HIGHLIGHT PRODUCTS UNDER DIFFERENT PRICES
    $('.col-sm-4:nth-child(1) .regift-price-text').hover(function() {
        $('.col-sm-4:nth-child(1)').addClass('hovered');
    }, function() {
        $('.col-sm-4:nth-child(1)').removeClass('hovered');
    });

    $('.col-sm-4:nth-child(2) .regift-price-text').hover(function() {
        $('.col-sm-4:nth-child(2)').addClass('hovered');
    }, function() {
        $('.col-sm-4:nth-child(2)').removeClass('hovered');
    });

    $('.col-sm-4:nth-child(3) .regift-price-text').hover(function() {
        $('.col-sm-4:nth-child(3)').addClass('hovered');
    }, function() {
        $('.col-sm-4:nth-child(3)').removeClass('hovered');
    });

    // SCROLL TO SEARCH VEHICLE WIDGET
    $(".find-vehicle-btn, .scroll-to-vSearch").on('click touchstart', function() {
        $('html, body').animate({
            scrollTop: $(".secion-search-vehicle").offset().top
        }, 500);
    });

    // ANIMATE HERO BANNER
    animateHeroBanner();
    function animateHeroBanner() {
        setTimeout(function() {
            $('.section-hero').removeClass('banner-2 banner-3')
            $('.section-hero').addClass('banner-2')
        }, 750);
        setTimeout(function() {
            $('.section-hero').removeClass('banner-2 banner-3')
            $('.section-hero').addClass('banner-3')
        }, 1500);
        setTimeout(function() {
            $('.section-hero').removeClass('banner-2 banner-3')
            animateHeroBanner();
        }, 2250);
    }
});

    




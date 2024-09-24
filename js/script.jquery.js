$(document).ready(function(){

    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
    });

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    $('.posts .slider').slick({
        slidesToShow: 3,
        prevArrow:'<button type="button" data-role="none" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" data-role="none" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [{
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                infinite: true

            }
        }]
    })
})
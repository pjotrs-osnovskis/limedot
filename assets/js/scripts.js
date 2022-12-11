$('#navbar-toggler').on('click', ()=> {
    $('.overlay').css('margin-top', $('.navbar').outerHeight())

    if ($('#navbar-toggler').attr('aria-expanded') == 'true') {
        $('body').addClass('fixed-position');
    } else {
        $('body').removeClass('fixed-position');
    }
})

$('#navbar-toggler').on('click', () => {
    
    if ($('#navbar-toggler').attr('aria-expanded') == 'true') {
        $('body').addClass('fixed-position');
    } else {
        $('body').removeClass('fixed-position');
    }
})

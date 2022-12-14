$('#navbar-toggler').on('click', () => {
    if ($('#navbar-toggler').attr('aria-expanded') == 'true') {
        $('nav').css('background-color', '#091125')
    } else {
        $('nav').css('background-color', 'transparent')

    }
})

$('#navbar-toggler').on('click', () => {
    $('.overlay').css('margin-top', $('.navbar').outerHeight())

    if ($('#navbar-toggler').attr('aria-expanded') == 'true') {
        $('body').addClass('fixed-position');
        $('nav').css('background-color', '#091125')
    } else {
        $('body').removeClass('fixed-position');
        $('nav').css('background-color', 'transparent')

    }
})

var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
];
var html = jQuery('body'); // it would make more sense to apply this to body, but IE7 won't have that
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow-x', 'clip');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

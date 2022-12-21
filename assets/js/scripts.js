$('#navbar-toggler').on('click', () => {
    if ($('#navbar-toggler').attr('aria-expanded') == 'true') {
        $('body').addClass('fixed-position');
    } else {
        $('body').removeClass('fixed-position');
    }
})

$('.disableNextButtonCheckbox').on('change', (e)=>{
    e.preventDefault();
    if ($('.disableNextButtonCheckbox:checked').length == $('.disableNextButtonCheckbox').length){
        $('.nextStepButton').attr('disabled', false);
    } else {
        $('.nextStepButton').attr('disabled', true);
    }
})

$('#taxCountryCheckbox').on('change', (e)=>{
    e.preventDefault();
    if ($('#taxCountryCheckbox').is(':checked')){
        $('#taxCountryPicker').hide();
    } else {
        $('#taxCountryPicker').show();
    }

})

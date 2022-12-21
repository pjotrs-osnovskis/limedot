$('#navbar-toggler').on('click', () => {
    if ($('#navbar-toggler').attr('aria-expanded') == 'true') {
        $('body').addClass('fixed-position');
    } else {
        $('body').removeClass('fixed-position');
    }
})

$('#notPEPCheckbox').on('change', (e)=>{
    e.preventDefault();
    if ($('#notPEPCheckbox').is(':checked')){
        $('.nextStepButton').attr('disabled', false);
    } else {
        $('.nextStepButton').attr('disabled', true);
    }
})

$('#taxCountryCheckbox').on('change', (e)=>{
    e.preventDefault();
    if ($('#taxCountryCheckbox').is(':checked')){
        $('#taxCountryPicker').show();
    } else {
        $('#taxCountryPicker').hide();
    }

})

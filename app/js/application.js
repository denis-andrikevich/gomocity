/**================================================
JS : MY CUSTOM SCRIPTS
===================================================*/
$(document).ready(function () {
    $('select').niceSelect();

    //range slider

    $("#slider").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function (event, ui) {
            jQuery("#priceMin").html(jQuery("#slider").slider("values", 0));
            jQuery("#priceMax").html(jQuery("#slider").slider("values", 1));
        },
        slide: function (event, ui) {
            jQuery("#priceMin").html(jQuery("#slider").slider("values", 0));
            jQuery("#priceMax").html(jQuery("#slider").slider("values", 1));
        }
    });

    $("#sliderFilter").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function (event, ui) {
            jQuery("#priceMinFilter").html(jQuery("#sliderFilter").slider("values", 0));
            jQuery("#priceMaxFilter").html(jQuery("#sliderFilter").slider("values", 1));
        },
        slide: function (event, ui) {
            jQuery("#priceMinFilter").html(jQuery("#sliderFilter").slider("values", 0));
            jQuery("#priceMaxFilter").html(jQuery("#sliderFilter").slider("values", 1));
        }
    });

    $('.list.dropdown').click(function(e){
        e.stopPropagation();
    });

});

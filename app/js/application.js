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



    var locations = [
        {
            image: 'images/house.png',
            cost: '7.500.000',
            params: {
                param1: 10,
                param2: 8,
                param3: '4.800'
            },
            address: {
                street: '111 Ronda Dr',
                region: 'Manhettan Beach, CA'
            },
            location: {
                w: "39.9695601",
                h: "-75.1395161"
            }
        },
        {
            image: 'images/house.png',
            cost: '11.200.000',
            params: {
                param1: 2,
                param2: 4,
                param3: '1.200'
            },
            address: {
                street: '111 Ronda Dr',
                region: 'Manhettan Beach, CA'
            },
            location: {
                w: "40.034038",
                h: "-75.145223"
            }
        },
        {
            image: 'images/house.png',
            cost: '7.500.000',
            params: {
                param1: 8,
                param2: 2,
                param3: '5.200'
            },
            address: {
                street: '111 Ronda Dr',
                region: 'Manhettan Beach, CA'
            },
            location: {
                w: "39.9713524",
                h: "-75.1590360"
            }
        }
    ];

    var mapStyles = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ]

    gmarkers = [];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(39.9995601, -75.1395161),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: mapStyles
    });

    var infowindow = new google.maps.InfoWindow();


    function createMarker(latlng, html) {
        var marker = new google.maps.Marker({
            position: latlng,
            map: map
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(html);
            infowindow.open(map, marker);
        });
        return marker;
    }

    for (var i = 0; i < locations.length; i++) {
        var html = "\
        <div class='custom-info'> \n\
            <img src='" + locations[i].image + "'> \n\
            <div class='item-info'> \n\
                <div class='green'>$" + locations[i].cost + "</div> \n\
                <div class=''> \n\
                    <span class='room-ico ico'>" + locations[i].params.param1 + "</span> \n\
                    <span class='bath-ico ico'>" + locations[i].params.param2 + "</span> \n\
                    <span>" + locations[i].params.param3 + " sqft</span> \n\
                </div> \n\
                <div class='address'>" + locations[i].address.street + "<br>" + locations[i].address.region + "</div> \n\
            </div> \n\
        </div>\n";

        createMarker(new google.maps.LatLng(locations[i].location.w, locations[i].location.h), html)
    }
})
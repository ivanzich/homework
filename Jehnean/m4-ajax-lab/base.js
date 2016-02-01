var weeklyQuakesEndpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var map;
// Your short term goal is to render each title to the "info" section of the page (see the commented example in your HTML)
var addToHTML;

// What is the structure of the data? "features": --> "type", "properties", "geometry", "id"
// How many earthquakes does it list? "count": 3
// How would you grab the first earthquake? From weeklyQuakesEndpoint, I think I need to access "features" [0]. I can also use weeklyQuakesEndpoint .properties."THING" to get to things. 
// How would you grab it's title? features[0].properties.title
// How would you grab it's geological coordinates: latitude? coordinates[1] longitude? coordinates[0]
// When did it happen? properties.time
// My Google API Key: AIzaSyC6x1Yk7HCuQ6RFEWNvxI0XFTnInz8sW9k

// On page load display google map and get USGS info 
$(document).ready(function() {

    var addToHTML = $("#info");

    //Part 2. Your next goal is to integrate Google Maps:
    map = new google.maps.Map(document.getElementById('map'), {
        // Center map on { lat: 37.78, lng: -122.44} 
        center: {
            lat: 37.78,
            lng: -122.44
        },
        // You may also want to zoom out if you want to see quakes worldwide
        zoom: 1
    });

    $.get(weeklyQuakesEndpoint, function(responseData) {
        // Loop over it - for loop or forEach loop
        responseData.features.forEach(function(quakeInfo) {
            // Add each title to the page

            var title = quakeInfo.properties.title;

            var hoursAgo = Math.round((Date.now() - quakeInfo.properties.time) / (1000 * 60 * 60));
            addToHTML.append("<p>" + title + " / " + hoursAgo + " hours ago</p>");

            // Part 3. Add pins to your map
            /* your next goal is to drop a single pin on San Francisco
        var marker = new google.maps.Marker({
            position: { lat: 37.78, lng: -122.44 },
            map: map,
            title: 'Hello World!'
        }); */
            // Vars for google maps marker to accept
            var lat = quakeInfo.geometry.coordinates[1];
            var lng = quakeInfo.geometry.coordinates[0];

            // Goggle Markers from longitude and latitude
            new google.maps.Marker({
                // Struggled with this for a long time before finding LatLng is a property
                position: new google.maps.LatLng(lat, lng),
                map: map,
                title: 'Hello World!'
            });
        });
    });
});
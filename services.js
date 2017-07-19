angular.module("exampleApp")
    .service("navigatorService", function($window) {
        var latitude;
        var longitude;
        $window.navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        })
        this.getLatitude = function() {
            return latitude;
        }
        this.getLongitude = function() {
            return longitude;
        }
    })
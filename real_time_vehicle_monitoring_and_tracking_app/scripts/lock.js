//  Get element with ID of distance
const distance = () => {
    const distance = document.querySelector('#distance');

    const geoLibDistance = '0KM';
        distance.innerHTML = geoLibDistance;
        navigator.geolocation.getCurrentPosition((position) => {    
            const {longitude, latitude} = position.coords;
            const myLocation = {
                latitude,
                longitude
            };
            const hisLocation = {
                latitude: 10.057135999999999,
                longitude: 7.4702848
            };
            console.log(myLocation);
            const geoLibDistance = `${(geolib.getDistance(myLocation, hisLocation)/1000).toFixed(2)}KM`;
            distance.innerHTML = geoLibDistance;
        }, () => {
            alert('Please allow the app to get your location.');
        }
    );
    };    
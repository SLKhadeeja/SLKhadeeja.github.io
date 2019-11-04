// Changed function to Immediately Invoked Function Expression(IIFE)
const displayLocation = (() => {
  fetch('.\\savedLocations.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log(err);
    });


  function appendData(data) {
    var mainContainer = document.querySelector("#locations ul");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("li");
      div.innerHTML ='Name: ' + data[i].name + ' ==> ' + 'Location: ' + data[i].latitude + ', ' + data[i].longitude;
      mainContainer.appendChild(div);
    }
  }
})();
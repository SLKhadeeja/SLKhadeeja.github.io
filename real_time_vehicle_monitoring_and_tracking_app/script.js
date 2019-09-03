displayLocation = () => {
    fetch('locations.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log('Error: ' + err);
    });
}

function appendData(data) {
    var mainContainer = document.getElementById("myLocation");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Location: ' + data[i].latitude+ ' ' + data[i].longitude;
      mainContainer.appendChild(div);
    }
  }
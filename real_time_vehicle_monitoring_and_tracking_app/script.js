displayLocation = () => {
    fetch('.\\locations.json')
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        appendData(data);
      })
      .catch(function (err) {
        console.log(err);
      });
}

function appendData(data) {
    var mainContainer = document.getElementById("locations");
    for (var i = 0; i < data.length; i++) {
      var button = document.createElement("button");
      div.innerHTML = 'Location: ' + data[i].latitude+ ' ' + data[i].longitude;
      mainContainer.appendChild(button);
    }
  }
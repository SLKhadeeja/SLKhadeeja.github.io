 const displayLocation = (() => {
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
  
  
    function appendData(data) {
        const chartData = data.map(data => {
            return {
                x: data.latitude,
                y: data.longitude
            };
        });


        
        var chr = new Chart(document.getElementById("myChart"),{
            type: 'scatter',

            data: {
                datasets: [{
                    label: "TRACKING",
                    data: chartData,
                    showLine: true,
                    fill: false,
                    pointBackgroundColor: 'rgb(128, 128, 0)',
                    borderColor: 'rgb(34, 110, 196)',
                    scales: {
                        xAxes: [{
                            ticks:{
                                max: 50,
                                min: 0
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 10,
                                min: 0
                            }
                        }]
                    }
                }]
            },

            options: {
                legend:{
                    display: false
                },

                scales:{
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }]
                }
            }
        });

    }
  })();
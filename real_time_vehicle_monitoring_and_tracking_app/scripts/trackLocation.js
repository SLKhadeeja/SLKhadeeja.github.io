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


        // var ctx = document.getElementById('myChart').getContext("2d");
        // var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        // gradientStroke.addColorStop(0, '#df0707');
        // gradientStroke.addColorStop(1, '#f49080');
        var chr = new Chart(document.getElementById("myChart"),{
            type: 'scatter',

            data: {
                datasets: [{
                    label: "TRACKING",
                    borderColor: 'brown',
                    pointBorderColor: 'black',
                    pointBackgroundColor: 'black',
                    // pointHoverBackgroundColor: gradientStroke,
                    // pointHoverBorderColor: gradientStroke,
                    // pointBorderWidth: 5,
                    // pointHoverRadius: cutomRadius,
                    // pointHoverBorderWidth: 1,
                    pointRadius: customRadius,
                    borderWidth: 3,
                    data: chartData,
                    showLine: true,
                    fill: false,
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

 function customRadius(context){
     let index = context.dataIndex;
     let value = context.dataset.data[index];
     return index === 0 ? 7 : 2;
 }
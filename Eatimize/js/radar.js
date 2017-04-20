var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var color = Chart.helpers.color;
    var config = {
        type: 'radar',
        data: {
            labels: ["Protein", "kolhydrater", "Fett", "Kcal"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: color(window.chartColors.white).alpha(0.2).rgbString(),
                borderColor: window.chartColors.white,
                pointBackgroundColor: window.chartColors.white,
                data: [
                    99,
                    101,
                    70,
                    95,

                ]
            }, {
                label: "My Second dataset",
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                borderColor: window.chartColors.blue,
                pointBackgroundColor: window.chartColors.blue,
                data: [
                  80,
                  40,
                  65,
                  85,

                ]
            },]
        },
        options: {
            legend: {
                position: 'top',

            },
            title: {
                display: true,
                text: 'Chart.js Radar Chart'
            },
            scale: {
              ticks: {
                beginAtZero: true
              }
            }
        }
    };

    window.onload = function() {
        window.myRadar = new Chart(document.getElementById("canvas"), config);
    };

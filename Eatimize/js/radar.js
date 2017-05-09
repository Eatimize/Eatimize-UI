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
                backgroundColor: color(window.chartColors.black).alpha(0.2).rgbString(),
                borderColor: window.chartColors.white,
                pointBackgroundColor: window.chartColors.white,
                data: [
                      sessionStorage.getItem("scoreCarb")%,
                      sessionStorage.getItem("scoreFat")%,
                      sessionStorage.getItem("scoreKcal")%,
                      sessionStorage.getItem("scoreProt")%,
                ]
            }, {
                label: "My Second dataset",
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                borderColor: window.chartColors.blue,
                pointBackgroundColor: window.chartColors.blue,
                data: [
                  100%,
                  100%,
                  100%,
                  100%,

                ]
            },]
        },
        options: {
            legend: {
                position: 'top',

            },
            title: {
                display: true,
                text: 'Näringsinnehåll'
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

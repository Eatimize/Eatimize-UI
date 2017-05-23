$(document).ready(function(){

    var res = JSON.parse(sessionStorage.getItem("card"));
    var ingredients = res.ingredients;
    var description = res.description;
    var recipeName = res.recipeName;
    var scoreCarb = Math.round(res.scoreCarb*100);
    var scoreFat = Math.round(res.scoreFat*100);
    var scoreKcal = Math.round(res.scoreKcal*100);
    var scoreProt =  Math.round(res.scoreProt*100);
    sessionStorage.setItem("scoreCarb", scoreCarb);
    sessionStorage.setItem("scoreFat", scoreFat);
    sessionStorage.setItem("scoreKcal", scoreKcal);
    sessionStorage.setItem("scoreProt", scoreProt);
    //console.log(description+" "+recipeName+" "+scoreCarb+" "+scoreFat+" "+scoreKcal+" "+scoreProt);
    $('#title').append(recipeName);

    String.prototype.replaceAll = function(search, replacement){
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
    
    var description = description.replaceAll('\n', '<br/>');
    
    $('#description').append(description);

  $.each(ingredients, function(index){
    console.log(ingredients[index]);
    var ing = ingredients[index].name;
    var wei = ingredients[index].gram;
    $('#ingredients').append('<li>'+ing+' '+wei+'g'+'</li>');
        });
    // uppdatera recipe-sidan med information:


    chart();

}); 

function chart(){
  var color = Chart.helpers.color;
  var config = {
      type: 'radar',
      data: {
          labels: ["Protein", "kolhydrater", "Fett", "Kcal"],
          datasets: [{
              label: "Måltidens näringsvärden",
              backgroundColor: color(window.chartColors.white).alpha(0.2).rgbString(),
              borderColor: window.chartColors.white,
              pointBackgroundColor: window.chartColors.white,
              data: [
                    sessionStorage.getItem("scoreCarb"),
                    sessionStorage.getItem("scoreFat"),
                    sessionStorage.getItem("scoreKcal"),
                    sessionStorage.getItem("scoreProt"),
              ]
          }, {
              label: "Målet för näringsvärden",
              backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
              borderColor: window.chartColors.blue,
              pointBackgroundColor: window.chartColors.blue,
              data: [
                100,
                100,
                100,
                100,

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
}

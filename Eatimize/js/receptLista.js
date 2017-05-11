var array;
$(document).ready(function(){


  $('#searchBtn').click(function(){
    var  res =  sessionStorage.getItem("searchField");
console.log("hej")
if(res!=null && array!=null){
var temp;
var substring = res;
$.each(array, function(index, item){
temp[index] = array[index].recipeName.includes(substring);

});
res=null;
printRes(temp);
}
       });
            getResult();

    });

    function getResult(){

             var  activity = sessionStorage.getItem("actvity");
             var  sex =  sessionStorage.getItem("sex");
             var  weight = sessionStorage.getItem("weight");
             var  height =  sessionStorage.getItem("height");
             var  goal = sessionStorage.getItem("goal");
             var  age = sessionStorage.getItem("age");
             var  type = sessionStorage.getItem("mealtype");

             var baseUrl = "http://localhost:8080/api/1/"+activity+"/"+sex+"/"+weight+"/"+height+"/"+goal+"/"+age+"/"+type+"";
             //var baseUrl= ""http://localhost:8080/api/1/1.2/man/75/175/goal/25/type";
             $.ajax({
                 type: "GET",
                 url: baseUrl,
                 dataType: "JSON",
                 success: function (response) {
                    console.log("json-metod");

                     console.log(response);

                     printRes(response);

                 }, fail: function (response) {
                     console.log(response);
                 }

                });


                }

    function printRes(res){
                var response = res;
                array=response;
                sessionStorage.setItem("array", array);
                    console.log(res[0]);
                    console.log(array)
                    $.each(response, function(index, item){

                    $.get("template/keycard.php", function(data){
                    var score = Math.round(response[index].scoreTot*100);

                    $(".row").append(replaceContent(data, [{"id":index ,"title": response[index].recipeName,"scoreTot":score}]));


                    });
                    });
                  console.log(array[1]);
            }

            //Ersätt titel och beskrivning:
            function replaceContent(e,t){
                res=e;
                for(var n=0;n<t.length;n++){
                    res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){
                        return t[n][r]})}
                return res
            }

          function clickedCard(ref){
                    console.log(ref.id);
                    var clickedCard = JSON.stringify(array[ref.id]);
                    sessionStorage.setItem("card", clickedCard);
                }

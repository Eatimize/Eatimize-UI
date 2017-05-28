/*!
  Handles the get request and the search function.
 */
var array;
$(document).ready(function(){
  var href = document.location.href;
  var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);

    if(lastPathSegment=="receptLista.html"){
      getResult();
    }
    search();

});
    /*Gets the information given by the user and sends it*/
    function getResult(){

             var  activity = sessionStorage.getItem("activity");
             var  sex =  sessionStorage.getItem("sex");
             var  weight = sessionStorage.getItem("weight");
             var  height =  sessionStorage.getItem("height");
             var  goal = sessionStorage.getItem("goal");
             var  age = sessionStorage.getItem("age");
             var  type = sessionStorage.getItem("mealtype");


            var resArray = ['vegan', 'vegetarian', 'gluten', 'lactose', 'milkprotein', 'nuts'];
            var restriction = '';

            for (var i = 0; i <= resArray.length; i++) {
               if(sessionStorage.getItem(resArray[i]) == 'true'){
                  restriction += resArray[i]+",";

               }
            }

            /*Should be the adress where the api is located*/
            var baseUrl = "http://localhost:8080/api/1/"+activity+"/"+sex+"/"+weight+"/"+height+"/"+goal+"/"+age+"/"+type+"?restrictions="+restriction+"";

        
        console.log(baseUrl);
        
             $.ajax({
                 type: "GET",
                 url: baseUrl,
                 dataType: "JSON",
                 success: function (response) {
                   var array=JSON.stringify(response);
                   sessionStorage.setItem("array", array);
                     printRes(response);
                    console.log(response);
                 }, fail: function (response) {
                     console.log(response);
                 }

                });


                }


                /*Appends the response to a row*/
                function printRes(res){
                response = res;
                array=response;


                    $.each(response, function(index, item){
                    $.get("template/keycard.php", function(data){
                    var score = Math.round(response[index].scoreTot*100);

                    $(".row").append(replaceContent(data, [{"id":index ,"title": response[index].recipeName,"scoreTot":score}]));

                      });
                });

            }

              /*Replaces the content*/
            function replaceContent(e,t){
                res=e;
                for(var n=0;n<t.length;n++){
                    res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){
                        return t[n][r]})}
                return res
            }


            /*Stores the card for the next page*/
            function clickedCard(ref){
                                      console.log(ref.id);
                                     var clickedCard = JSON.stringify(array[ref.id]);
                                     sessionStorage.setItem("card", clickedCard);
                }

                /*Search function*/
                function search(){
                  $("#searchBtn").on('click', function() {

                 $('#searchField').keyup(function(e){
                   if(e.keyCode == 13){
                     $( ".recept" ).remove();
                     var array = JSON.parse(sessionStorage.getItem("array"));
                     var  substring =  sessionStorage.getItem("searchField");
                     var temp= new Array();
                     var counter=0;

                     $.each(array, function(index, item){
                       var x = array[index].recipeName.toLowerCase();
                        console.log(x);
                          if (x.indexOf(substring) != -1) {
                            temp[index] = array[index];
                            counter++;
                            }

                         });


                     if(counter>0){
                        console.log("TEMP ARRAY "+temp);
                        printRes(temp);
                     }

                   }
                        });
                     });
                }

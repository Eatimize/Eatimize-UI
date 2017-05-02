$(document).ready(function(){

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
                     
                    console.log(res[0]);
                     
                    $.each(response, function(index, item){
                            
                    $.get("keycard.tpl", function(data){
                            
                    $(".row").append(replaceContent(data, [{"title": response[index].vegan, "description": response[index].description}]));
                        
                    });   
                    }); 
            }
             
            //Ersätt titel och beskrivning: 
            function replaceContent(e,t){
                res=e;
                for(var n=0;n<t.length;n++){
                    res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){                    
                        return t[n][r]})}
                return res
            }
      
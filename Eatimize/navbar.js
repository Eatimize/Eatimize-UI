
 $(document).ready(function(){
        
           $('#searchBtn').click(function(){
                    
                    res = $('#searchField').val();                  
                    getResult(res);
                });
        
    });

/* Hämta resultat av sökning i navbar: */
      function getResult(title){   
          
          console.log("navbar");
                               
                //IMDB-api - ska bytas ut: 
                    $.getJSON('https://www.omdbapi.com/?s=' + encodeURI(title)+'&plot=short').then(function(response){
                
                // Anrop till lokal databas istället: 
               /* $.getJSON('http://localhost:8080/api/1/1.2/man/75/175/goal/25/type').then(function(response){
                    
                    console.log(response);
                    */
                        
                   var movies = response.Search;
                                                   
                    $.each(response.Search, function(index, item){
                            
                    $.get("keycard.tpl", function(data){
                            
                    $(".row").append(replaceContent(data, [{"title": movies[index].Title, "description": movies[index].Plot}]));
                        
                    });                               
                    
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
      
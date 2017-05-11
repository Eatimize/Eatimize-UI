
 $(document).ready(function(){
   var href = document.location.href;
   var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
   console.log(href);
   console.log(lastPathSegment);
     $(".button-collapse").sideNav();


     $("#searchBtn").on('click', function() {
             $('#searchBtn').replaceWith(
        '<li> <div class="input-field col s5">'+
        '<input id="searchField" type="text" class="validate">' +
       '<label class="white-text" for="Sök efter recept">Sök efter recept</label>'+
        '</div></li>'
               );

            $('#searchField').keyup(function(e){
                if(e.keyCode == 13){
                  if(lastPathSegment=="receptLista.html"){
                    res = $('#searchField').val();
                    sessionStorage.setItem("searchField", res);
                  }else{
                    res = $('#searchField').val();
                    sessionStorage.setItem("searchField", res);
                    document.location.href = "receptLista.html";
                  }

                }
            });
        });

         $('#searchMob').keyup(function(e){
                if(e.keyCode == 13){

                  if(lastPathSegment=="receptLista.html"){
                    res = $('#searchField').val();
                    sessionStorage.setItem("searchField", res);
                  }else{
                    res = $('#searchField').val();
                    sessionStorage.setItem("searchField", res);
                    document.location.href = "receptLista.html";

                  }


                }
            });

 });

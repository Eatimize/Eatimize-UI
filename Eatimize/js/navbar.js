
 $(document).ready(function(){

     $(".button-collapse").sideNav();


     $("#searchBtn").on('click', function() {
       if(document.location.href = "receptLista.html"{
             $('#searchBtn').replaceWith(
        '<li> <div class="input-field col s5">'+
        '<input id="searchField" type="text" class="validate">' +
       '<label class="white-text" for="Sök efter recept">Sök efter recept</label>'+
        '</div></li>'
               );
}
            $('#searchField').keyup(function(e){
                if(e.keyCode == 13){


                    res = $('#searchField').val();
                    sessionStorage.setItem("searchField", res);


                  }

                }
            });
        });

         $('#searchMob').keyup(function(e){
                if(e.keyCode == 13){

                    res = $('#searchField').val();
                    sessionStorage.setItem("searchField", res);

                  }



                }
            });

 });

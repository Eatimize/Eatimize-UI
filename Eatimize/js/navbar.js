
 $(document).ready(function(){
   var href = document.location.href;
   var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
  if(lastPathSegment!="receptLista.html" || lastPathSegment!="receptSida.html"){
    console.log("HEJ");
       $("#searchBtn").empty();
  }
  if(lastPathSegment=="receptLista.html" || lastPathSegment=="receptSida.html"){
    console.log("HEJdå");
       $("#searchBtn").append(
  '<a>Sök<i class="material-icons left">search</i></a>'
         );
  }
     $(".button-collapse").sideNav();


     $("#searchBtn").on('click', function() {
        console.log("searchBtn nav")
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

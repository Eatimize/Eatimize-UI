
 $(document).ready(function(){

           $('#searchBtn').click(function(){
             document.location.href = "Recept.html";
             res = $('#searchField').val();
             sessionStorage.setItem("searchField", res);
              
                });

    });

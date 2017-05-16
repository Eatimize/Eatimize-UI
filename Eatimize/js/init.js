(function($){
  $(function(){

       $(document).ready(function(){

            $('#navbar').load('template/navbar.php');    
          
          //Gäller bara för EATIMIZE.html
           $('#sexButtons').load('template/radioBtnSex.php');
            });

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

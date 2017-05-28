/*!
  Loading templates
 */
(function($){
  $(function(){

       $(document).ready(function(){

            $('#navbar').load('template/navbar.php');

          //Lägger till radio-buttons för Man / Kvinna på EATIMIZE.html - sidan
           $('#sexButtons').load('template/radioBtnSex.php');

           //Lägger till preferens-checkbuttons på receptLista.html-sidan
           $('#prefTemp').load('template/prefTemporary.html');

       });



    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

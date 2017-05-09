(function($){
  $(function(){

       $(document).ready(function(){

                //detta fungerar bara om man kör från localhost eller i annan webbläsare än chrome:
                $('#navbar').load('navbar.php');

            }); 

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

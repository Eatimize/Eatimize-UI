var cont = 0;

function register(){

     cont++;
		
		if(cont==1){
		 	$('.box').animate({height:'695px'}, 550);
			$('.show').css('display','block');
			$('#logintoregister').text('Registrera dig');
			$('#buttonlogintoregister').text('Registrera dig');
			$('#plogintoregister').text("Är du redan registrerad?");
			$('#textchange').text('Logga in');
		}
		else
		{
			$('.show').css('display','none');
			$('.box').animate({height:'365px'}, 550);
			$('#logintoregister').text('Login');
			$('#buttonlogintoregister').text('Login');
			$('#plogintoregister').text("Inte medlem?");
			$('#textchange').text('Register');
			cont = 0;
		}
}
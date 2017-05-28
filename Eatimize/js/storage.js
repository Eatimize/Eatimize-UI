/*!
  The main script for storage.
 */
var  restriction;

//Mealtype
function storageMealtypefrukost(){
  sessionStorage.setItem("mealtype", "1");
}
function storageMealtypemellanmal(){
  sessionStorage.setItem("mealtype", "2");
}
function storageMealtypemaltid(){
  sessionStorage.setItem("mealtype", "3");
}

//Goal
function activitym() {
sessionStorage.setItem("goal", 3);
   $('html, body').animate({scrollTop:$('#R3').position().top}, 'slow');
}
function activityv() {
sessionStorage.setItem("goal",2);
   $('html, body').animate({scrollTop:$('#R3').position().top}, 'slow');
}
function activityh() {
sessionStorage.setItem("goal", 1);
   $('html, body').animate({scrollTop:$('#R3').position().top}, 'slow');
}
//Activty
function activity1() {
sessionStorage.setItem("activity", "1.2");
  $('html, body').animate({scrollTop:$('#R2').position().top}, 'slow');
}
function activity2() {
sessionStorage.setItem("activity", "1.3");
  $('html, body').animate({scrollTop:$('#R2').position().top}, 'slow');
}
function activity3() {
sessionStorage.setItem("activity", "1.5");
  $('html, body').animate({scrollTop:$('#R2').position().top}, 'slow');
}
function activity4() {
sessionStorage.setItem("activity", "1.7");
  $('html, body').animate({scrollTop:$('#R2').position().top}, 'slow');
}
function activity5() {
sessionStorage.setItem("activity", "1.9");
  $('html, body').animate({scrollTop:$('#R2').position().top}, 'slow');
}
function activity6() {
sessionStorage.setItem("activity", "2.0");
  $('html, body').animate({scrollTop:$('#R2').position().top}, 'slow');
}

/**
  Gender
*/
function sexWomen() {
sessionStorage.setItem("sex", "Female");
}
function sexMan() {
sessionStorage.setItem("sex", "Male");
}
$('.sex').click(function(){
  $(this). toggleClass('clicked');
});

/**
  Information about user. ALso last stage of the information site. Send the user to the next page and checks if the information is correct.
*/
function sumInfo() {
  //stoares the information
  var age = $( "#age" ).val();
  var height = $( "#tall" ).val();
  var weight = $( "#weight" ).val();

   sessionStorage.setItem("age", age);
   sessionStorage.setItem("height", height);
   sessionStorage.setItem("weight",weight);

//Checks the information
   if (age == ""|| tall == "" || weight == "") {
   $('html, body').animate({scrollTop:$('#R2').position().top}, 'slow');
    }else if($('input[type=radio]:checked').length != 3){
    $('html, body').animate({scrollTop:$('#R1').position().top}, 'slow');
   }else {
     checkPref();
    document.location.href = "mealType.html";
}


}


function modal(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal({
       dismissible: true, // Modal can be dismissed by clicking outside of the modal
       opacity: .5, // Opacity of modal background
       inDuration: 300, // Transition in duration
       outDuration: 200, // Transition out duration
       startingTop: '4%', // Starting top style attribute
       endingTop: '10%', // Ending top style attribute
       ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.

       },
       complete: function() {

       } // Callback for Modal close
    }
  );
}
//Checks preferences
function checkPref() {
    if(document.getElementById('vegan').checked) {
  	 sessionStorage.setItem("vegan", "true");
    } else{
    	 sessionStorage.setItem("vegan", "false");
    }
    if(document.getElementById('vegetarian').checked) {
      sessionStorage.setItem("vegetarian", "true");
    } else{
    	 sessionStorage.setItem("vegetarian", "false");
    }
    if(document.getElementById('gluten').checked) {
      sessionStorage.setItem("gluten", "true");
    } else{
    	 sessionStorage.setItem("gluten", "false");
    }
    if(document.getElementById('nut').checked) {
      sessionStorage.setItem("nuts", "true");
    } else{
    	 sessionStorage.setItem("nuts", "false");
    }
    if(document.getElementById('laktos').checked) {
      sessionStorage.setItem("lactose", "true");
    } else{
    	 sessionStorage.setItem("lactose", "false");
    }
    if(document.getElementById('milkprotein').checked) {
      sessionStorage.setItem("milkprotein", "true");
    } else{
    	 sessionStorage.setItem("milkprotein", "false");
    }
}

/**
  Starts when the pages is ready.
*/
$(document).ready(function () {
 //sendinfo();

   modal();
});

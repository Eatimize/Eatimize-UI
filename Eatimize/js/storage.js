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
function activtym() {
sessionStorage.setItem("goal", 3);
   document.location.href = "#R3";
}
function activtyv() {
sessionStorage.setItem("goal",2);
   document.location.href = "#R3";
}
function activtyh() {
sessionStorage.setItem("goal", 1);
   document.location.href = "#R3";
}
//Activty
function activity1() {
sessionStorage.setItem("activity", "1.2");
  document.location.href = "#R2";
}
function activity2() {
sessionStorage.setItem("activity", "1.3");
  document.location.href = "#R2";
}
function activity3() {
sessionStorage.setItem("activity", "1.5");
  document.location.href = "#R2";
}
function activity4() {
sessionStorage.setItem("activity", "1.7");
  document.location.href = "#R2";
}
function activity5() {
sessionStorage.setItem("activity", "1.9");
  document.location.href = "#R2";
}
function activity6() {
sessionStorage.setItem("activity", "2.0");
  document.location.href = "#R2";
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
  Information about user
*/
function sumInfo() {
  var age = $( "#age" ).val();
  var height = $( "#tall" ).val();
  var weight = $( "#weight" ).val();

   sessionStorage.setItem("age", age);
   sessionStorage.setItem("height", height);
   sessionStorage.setItem("weight",weight);

   checkPref();
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
      sessionStorage.setItem("nut", "true");
    } else{
    	 sessionStorage.setItem("nut", "false");
    }
    if(document.getElementById('laktos').checked) {
      sessionStorage.setItem("laktos", "true");
    } else{
    	 sessionStorage.setItem("laktos", "false");
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

var  restriction;

//Mealtype
function storageMealtypefrukost(){
  sessionStorage.setItem("mealtype", "1");
}
function storageMealtypemellanmal(){
  sessionStorage.setItem("mealtype", "3");
}
function storageMealtypemaltid(){
  sessionStorage.setItem("mealtype", "2");
}

//Goal
function activtym() {
sessionStorage.setItem("goal", "muskler");
   document.location.href = "#R3";
}
function activtyv() {
sessionStorage.setItem("goal", "vikt");
   document.location.href = "#R3";
}
function activtyh() {
sessionStorage.setItem("goal", "hälsosamt");
   document.location.href = "#R3";
}
//Activty
function activty1() {
sessionStorage.setItem("actvity", "1.2");
  document.location.href = "#R2";
}
function activty2() {
sessionStorage.setItem("actvity", "1.3");
  document.location.href = "#R2";
}
function activty3() {
sessionStorage.setItem("actvity", "1.5");
  document.location.href = "#R2";
}
function activty4() {
sessionStorage.setItem("actvity", "1.7");
  document.location.href = "#R2";
}
function activty5() {
sessionStorage.setItem("actvity", "1.9");
  document.location.href = "#R2";
}
function activty6() {
sessionStorage.setItem("actvity", "2.0");
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
      var pref;
    if(document.getElementById('indeterminate-Veg').checked) {
      sessionStorage.setItem("vegan", "vegan");
       restriction += ","+sessionStorage.getItem("vegan");
    }
    if(document.getElementById('indeterminate-glutten').checked) {
      sessionStorage.setItem("glutten", "gluttenfri");
       restriction += ","+sessionStorage.getItem("glutten");
    }
    if(document.getElementById('indeterminate-inganott').checked) {
      sessionStorage.setItem("notter", "notterfri");
       restriction += ","+sessionStorage.getItem("notter");
    }
    if(document.getElementById('indeterminate-lakto').checked) {
      sessionStorage.setItem("lakto", "laktosfri");
       restriction += ","+sessionStorage.getItem("lakto");
    }
    if(document.getElementById('indeterminate-mjolkprot').checked) {
      sessionStorage.setItem("mjolkprot", "mjolkproteinfri");
       restriction += ","+sessionStorage.getItem("mjolkprot");
    }
console.log(restriction);


}


/**
  Starts when the pages is ready.
*/
$(document).ready(function () {
 //sendinfo();

   modal();
});

$(document).ready(function(){
    
    var res = JSON.parse(sessionStorage.getItem("card"));
    
    var description = res.description; 
    var vegan = res.vegan; 
    var vegetarian = res.vegetarian; 
    
    console.log("beskrivning: " + description + " vegan: " + vegan + " vegetarian: " + vegetarian);
    
    // uppdatera recipe-sidan med information: 
    
    $('#title').append(vegan);
    $('#description').append(description);
    
}); 
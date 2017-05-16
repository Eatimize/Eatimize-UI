	var  activity = sessionStorage.getItem("actvity");
	var  sex = sessionStorage.getItem("sex");
	var  weight = sessionStorage.getItem("weight");
	var  height = sessionStorage.getItem("height");
	var  goal = sessionStorage.getItem("goal");
	var  age = sessionStorage.getItem("age");
	
    /* lägg till värden för preferenser också */ 

	var editMode = false;
	
function getInfo() {
	$("#activity").val(activity);
	$("#sex").val(sex);
	$("#weight").val(weight);
	$("#height").val(height);
	$("#goal").val(goal);
	$("#age").val(age);
	
	$("#sex").material_select();
	$("#activity").material_select();
	$("#goal").material_select();
};

// Förmodligen tas bort
/*var activityLevels = [];
	activityLevels["1.2"] = "Lite eller ingen motion alls/kontorsarbete.";
	activityLevels["1.3"] = "Lätt motion 1-3 gånger i veckan.";
	activityLevels["1.5"] = "Medel motion 3-5 gånger i veckan/fysiskt arbete.";
	activityLevels["1.7"] = "Tung motion 6-7gånger i veckan.";
	activityLevels["1.9"] = "Mycket tung motion 6-7 gånger i veckan.";
	activityLevels["2.0"] = "Elitidrottare under högsäsong.";
	
var goals = [];
	goals["muskler"] =  "Att bygga muskler.";
	goals["vikt"] =  "Att gå ner i vikt.";
	goals["hälsosamt"] =  "Att äta hälsosamt.";
	
var sexArray = [];
	sexArray["Female"] = "Kvinna";
	sexArray["Male"] = "Man";*/

function editInformation(){

	if(editMode) {
		 enableForm();
		 editMode = false;
	}else{
		restoreInformation();
		editMode = true;
	}
}

function enableForm() {
	$("#edit").text("Avbryt");
	
	$("#activity").prop("disabled", false);
	$("#sex").prop("disabled", false);
	$("#weight").prop("disabled", false);
	$("#height").prop("disabled", false);
	$("#goal").prop("disabled", false);
	$("#age").prop("disabled", false);
    
    /* PREFERENSER: */
	$("#gluten").prop("disabled", false);
	$("#laktos").prop("disabled", false);
    $("#nut").prop("disabled", false);
    $("#vegetarian").prop("disabled", false);
	$("#vegan").prop("disabled", false);
    $("#milkprotein").prop("disabled", false);
	
	$("#sex").material_select();
	$("#activity").material_select();
	$("#goal").material_select();	
}

function restoreInformation(){
	$("#edit").text("Ändra information");
	
	$("#activity").prop("disabled", true);
	$("#sex").prop("disabled", true);
	$("#weight").prop("disabled", true);
	$("#height").prop("disabled", true);
	$("#goal").prop("disabled", true);
	$("#age").prop("disabled", true);
    
    /* PREFERENSER: */ 
	$("#gluten").prop("disabled", true);
	$("#laktos").prop("disabled", true);
    $("#nut").prop("disabled", true);
    $("#vegetarian").prop("disabled", true);
	$("#vegan").prop("disabled", true);
    $("#milkprotein").prop("disabled", true);
	
	$("#sex").material_select();
	$("#activity").material_select();
	$("#goal").material_select();
	
	getInfo();
}

function saveChanges(){
	var  activity = $("#activity").val();
	var  sex = $("#sex").val();
	var  weight = $("#weight").val();
	var  height = $("#height").val();
	var  goal = $("#goal").val();
	var  age = $("#age").val();
	
	sessionStorage.setItem("activity", activity);
	sessionStorage.setItem("sex", sex);
	sessionStorage.setItem("weight", weight);
	sessionStorage.setItem("height", height);
	sessionStorage.setItem("goal", goal);
	sessionStorage.setItem("age", age);
	
	$("#activity").prop("disabled", true);
	$("#sex").prop("disabled", true);
	$("#weight").prop("disabled", true);
	$("#height").prop("disabled", true);
	$("#goal").prop("disabled", true);
	$("#age").prop("disabled", true);
    
    /* PREFERENSER: */ 
	$("#gluten").prop("disabled", true);
	$("#laktos").prop("disabled", true);
    $("#nut").prop("disabled", true);
    $("#vegetarian").prop("disabled", true);
	$("#vegan").prop("disabled", true);
    $("#milkprotein").prop("disabled", true);
    

    
	$("#sex").material_select();
	$("#activity").material_select();
	$("#goal").material_select();
		
}
	
$(document).ready(function () {

    
    /* TILLAGT AV KARRO */ 
     $('#prefButtons').load('/template/pref.php');
    	
    $('select').material_select();
    getInfo();
	
});





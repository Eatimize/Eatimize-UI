	var  activity = sessionStorage.getItem("activity");
	var  sex = sessionStorage.getItem("sex");
	var  weight = sessionStorage.getItem("weight");
	var  height = sessionStorage.getItem("height");
	var  goal = sessionStorage.getItem("goal");
	var  age = sessionStorage.getItem("age");

    /*preferenser*/
    var  vegan = sessionStorage.getItem("vegan");
    var  vegetarian = sessionStorage.getItem("vegetarian");
	var  gluten = sessionStorage.getItem("gluten");
	var  nut = sessionStorage.getItem("nut");
	var  laktos = sessionStorage.getItem("laktos");
	var  milkprotein = sessionStorage.getItem("milkprotein");

	var editMode = false;
	var editIcon = $("<i>");
	editIcon.text("edit");
	editIcon.addClass("material-icons right");

	var cancelIcon = $("<i>");
	cancelIcon.text("not_interested");
	cancelIcon.addClass("material-icons right");

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

	Materialize.updateTextFields();

	if(gluten == "true"){
		$("#gluten").prop("checked", true);
	} else {
		$("#gluten").prop("checked", false);
	}

	if(laktos == "true"){
		$("#laktos").prop("checked", true);
	}else {
		$("#laktos").prop("checked", false);
	}

	if(nut == "true"){
		$("#nut").prop("checked", true);
	}else {
		$("#nut").prop("checked", false);
	}

	if(vegetarian == "true"){
		$("#vegetarian").prop("checked", true);
	}else {
		$("#vegetarian").prop("checked", false);
	}

	if(vegan == "true"){
		$("#vegan").prop("checked", true);
	}else {
		$("#vegan").prop("checked", false);
	}

	if(milkprotein == "true"){
		$("#milkprotein").prop("checked", true);
	}else {
		$("#milkprotein").prop("checked", false);
	}

	console.log(gluten);
};

function editInformation(){

	if(!editMode) {
			enableForm();
        	editMode = true;
	}else{
         restoreInformation();
         editMode = false;
	}
}

function enableForm() {
	$("#edit").text("Avbryt");
	$("#edit").append(cancelIcon);

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
	$("#edit").append(editIcon);

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

	/* PREFERENSER: */
	var  gluten = $("#gluten").val();
	var  laktos = $("#laktos").val();
	var  nut = $("#nut").val();
	var  vegetarian = $("#vegetarian").val();
	var  vegan = $("#vegan").val();
	var  milkprotein = $("#milkprotein").val();

	sessionStorage.setItem("activity", activity);
	sessionStorage.setItem("sex", sex);
	sessionStorage.setItem("weight", weight);
	sessionStorage.setItem("height", height);
	sessionStorage.setItem("goal", goal);
	sessionStorage.setItem("age", age);

	checkPref();

	$("#activity").prop("disabled", true);
	$("#sex").prop("disabled", true);
	$("#weight").prop("disabled", true);
	$("#height").prop("disabled", true);
	$("#goal").prop("disabled", true);
	$("#age").prop("disabled", true);

	$("#sex").material_select();
	$("#activity").material_select();
	$("#goal").material_select();

	$("#gluten").prop("disabled", true);
	$("#laktos").prop("disabled", true);
    $("#nut").prop("disabled", true);
    $("#vegetarian").prop("disabled", true);
	$("#vegan").prop("disabled", true);
    $("#milkprotein").prop("disabled", true);

    $("#edit").text("Ändra information");
    $("#edit").append(editIcon);
}

$(document).ready(function () {
   $('select').material_select();

   $('#prefButtons').load('template/pref.php', function() {
   	 getInfo();
   	 $("#gluten").prop("disabled", true);
	 $("#laktos").prop("disabled", true);
     $("#nut").prop("disabled", true);
     $("#vegetarian").prop("disabled", true);
	 $("#vegan").prop("disabled", true);
     $("#milkprotein").prop("disabled", true);
   });
});

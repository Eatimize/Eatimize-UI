/*!
	Javascript for the profile page. Uses storage to dispaly the information given by the user.
 */
 		/*User information*/
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
		var  peanuts = sessionStorage.getItem("peanuts");
		var  lactose = sessionStorage.getItem("lactose");
		var  milkprotein = sessionStorage.getItem("milkprotein");

		var editMode = false;
		var editIcon = $("<i>");
		editIcon.text("edit");
		editIcon.addClass("material-icons right");

		var cancelIcon = $("<i>");
		cancelIcon.text("not_interested");
		cancelIcon.addClass("material-icons right");


		/*Checks the information*/
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

			if(lactose == "true"){
				$("#lactose").prop("checked", true);
			}else {
				$("#lactose").prop("checked", false);
			}

			if(peanuts == "true"){
				$("#peanuts").prop("checked", true);
			}else {
				$("#peanuts").prop("checked", false);
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
		/*Edits the information*/
		function editInformation(){

			if(!editMode) {
					enableForm();
		        	editMode = true;
			}else{
		         restoreInformation();
		         editMode = false;
			}
		}
		/*Enables the profil page to change the values*/
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
			$("#lactose").prop("disabled", false);
		    $("#peanuts").prop("disabled", false);
		    $("#vegetarian").prop("disabled", false);
			$("#vegan").prop("disabled", false);
		    $("#milkprotein").prop("disabled", false);

			$("#sex").material_select();
			$("#activity").material_select();
			$("#goal").material_select();
		}
		/*Restore the profil page*/
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
			$("#lactose").prop("disabled", true);
		    $("#peanuts").prop("disabled", true);
		    $("#vegetarian").prop("disabled", true);
			$("#vegan").prop("disabled", true);
		    $("#milkprotein").prop("disabled", true);

			$("#sex").material_select();
			$("#activity").material_select();
			$("#goal").material_select();

			getInfo();
		}
			/*Saves the changes */
		function saveChanges(){
			var  activity = $("#activity").val();
			var  sex = $("#sex").val();
			var  weight = $("#weight").val();
			var  height = $("#height").val();
			var  goal = $("#goal").val();
			var  age = $("#age").val();

			/* PREFERENSER: */
			var  gluten = $("#gluten").val();
			var  lactose = $("#lactose").val();
			var  peanuts = $("#peanuts").val();
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
			$("#lactose").prop("disabled", true);
		    $("#peanuts").prop("disabled", true);
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
			 $("#lactose").prop("disabled", true);
		     $("#peanuts").prop("disabled", true);
		     $("#vegetarian").prop("disabled", true);
			 $("#vegan").prop("disabled", true);
		     $("#milkprotein").prop("disabled", true);
		   });
		});

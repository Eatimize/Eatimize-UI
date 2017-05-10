	var  activity = sessionStorage.getItem("actvity");
	var  sex =  sessionStorage.getItem("sex");
	var  weight = sessionStorage.getItem("weight");
	var  height =  sessionStorage.getItem("height");
	var  goal = sessionStorage.getItem("goal");
	var  age = sessionStorage.getItem("age");
	
function getInfo() {
	$("#activity").val(activity);
	$("#sex").val(sex);
	$("#weight").val(weight);
	$("#height").val(height);
	$("#goal").val(goal);
	$("#age").val(age);

};

$(document).ready(function () {
   getInfo();
});


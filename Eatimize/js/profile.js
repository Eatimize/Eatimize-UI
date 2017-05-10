	var  activity = sessionStorage.getItem("actvity");
	var  sex =  sessionStorage.getItem("sex");
	var  weight = sessionStorage.getItem("weight");
	var  height =  sessionStorage.getItem("height");
	var  goal = sessionStorage.getItem("goal");
	var  age = sessionStorage.getItem("age");
	
function getinfo() {
	$("#activity").val(activity);
	$("#sex").val(sex);
	$("#goal").val(goal);
	$("#weight").val(weight);
	$("#height").val(height);
	$("#goal").val(goal);
	$("#age").val(age);
	$("#goal").val(goal);
};

$(document).ready(function () {
   getInfo();
});


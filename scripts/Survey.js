function rating(){
	if (valideAllNum()){
		var num1 = document.Survey.txt_num1.value;
		var num2 = document.Survey.txt_num2.value;
		var num3 = document.Survey.txt_num3.value;
		var num4 = document.Survey.txt_num4.value;
		var num5 = document.Survey.txt_num5.value;
		
		var result = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5))/5;
		
		if (result >= 1 && result < 2){
			alert ("You rated us " + result + " - Thank you for letting us know that we need improvement!");
		}
		else if (result >= 2 && result < 3){
			alert ("Thank you for rating us " + result + " - Satisfactory!");
		}
		else if (result >= 3 && result < 4){
			alert ("Thank you for rating us " + result + " - Good!");
		}
		else if (result >= 4 && result < 5){
			alert ("Thank you for rating us " + result + " - Very Good!");
		}
		else {
			alert ("Thank you for rating us " + result + " - Excellent!");
		}
	}
}

function valideAllNum(){
	if (validNum( document.getElementById("txt_num1"))){
		if (validNum( document.getElementById("txt_num2"))){
			if (validNum( document.getElementById("txt_num3"))){
				if (validNum( document.getElementById("txt_num4"))){
					if (validNum( document.getElementById("txt_num5"))){
						return true;
					}
					else {
						alert("Please input a number between 1 and 5 for Facilities");
						return false;
					}
				}
				else {
						alert("Please input a number between 1 and 5 for Affordability");
						return false;
					}
				}
				else {
						alert("Please input a number between 1 and 5 for Variety of Options");
						return false;
					}
				}
				else {
						alert("Please input a number between 1 and 5 for Support during process");
						return false;
					}
				}
				else {
						alert("Please input a number between 1 and 5 for Customer Service");
						return false;
					}
				}
function validNum(elem){
	if(isNumeric(elem) && notEmpty(elem) && inRange(elem)){
		return true;
	}
	else{
		return false;
	}
}

function isNumeric(elem){
	var numericExpression = /^[0-9]+$/;
	if (elem.value.match(numericExpression)){
		return true;
	}
	else{
		return false;
	}
}

function notEmpty(elem){
	if (elem.value.length == 0){
		return false;
	}
	else {
		return true;
	}
}

function inRange(elem){
	if (parseInt(elem.value) <= 5 && parseInt(elem.value) >= 1){
		return true;
	}
	else {
		return false;
	}
}
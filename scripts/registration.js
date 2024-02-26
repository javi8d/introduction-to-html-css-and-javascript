function validator(){
	var fname = document.getElementById('fname');
	var lname = document.getElementById('lname');
	var phone_number = document.getElementById('phone_number');
	var home_address = document.getElementById('home_address');
	var email_address = document.getElementById('email_address');
	var gender = document.getElementById('gender');
	var state = document.getElementById('state');
	var aboutus = document.getElementById('aboutus');
	var age = document.getElementById('age');
	
	if(isAlphabet(fname, "Please enter letters only")){
		if(isAlphabet(lname, "Please enter letters only")){
			if(isNumeric(phone_number, "Please enter numbers only")){
				if(notEmpty(home_address, "Please enter your address")){
					if(emailValidator(email_address, "Please enter a valid email address")){
						if(selectGender(gender, "Please select your gender")){
							if(selectState(state, "Please choose your state")){
								if(selectAbout(aboutus, "Please tell how did you learn about us")){
									if(isNumeric(age, "Please select your age")){
										return true;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}

function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}
	else{
		alert(helperMsg);
		return false;
	}
}

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		return true;
	}
	else{
		alert(helperMsg);
		return false;
	}
}

function notEmpty(elem,errMsg){
	if(elem.value.length == 0){
		alert(errMsg);
		return false;
	}
	return true;
}

function emailValidator(elem, helperMsg){
	var emailRestrictions = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
	if(elem.value.match(emailRestrictions)){
		return true;
	}
	else{
		alert(helperMsg);
		return false;
	}
}

function selectGender(elem, helperMsg){
	if((document.registration.gender[0].checked == false) && (document.registration.gender[1].checked == false)){
		alert(helperMsg);
		return false;
	}
	return true;
}

function selectState(elem, helperMsg){
	if(elem.value == "Select State"){
		alert(helperMsg);
		return false;
	}
	else{
		return true;
	}
}

function selectAbout(elem, helperMsg){
	if(!document.registration.about[0].checked && !document.registration.about[1].checked && !document.registration.about[2].checked && !document.registration.about[3].checked){
		alert(helperMsg);
		return false;
	}
	else{
		return true;
	}
}

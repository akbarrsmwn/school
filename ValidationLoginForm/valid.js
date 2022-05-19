	//Validation Code For Inputs

var email = document.forms['form']['email']; // check name form & email di html
var password = document.forms['form']['password']; // check name form & pass di html

var email_error = document.getElementById('email_error'); // check id di html
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){ // cek di html submit validated
	if (email.value.length < 9) { // style untuk false
		email.style.border = "1px solid red"; 
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}


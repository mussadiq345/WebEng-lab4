//login function
let Submit = document.getElementById("loginForm");
Submit.addEventListener('submit', function (e) {
	e.preventDefault();
	var formid = document.getElementById('login-Form').value;
	if (validationFields(formid)) {
		document.getElementById('login-Form').style.display = 'none';
		document.getElementById('loadButton').style.display = 'block';
		setInterval(login(), 2000);
	} else {
		document.getElementById("error-alert").style.display = "block";
	}

});
// check validate input field empty or not
function validationFields(formid) {
	let check = true;
	let input = document.getElementById(`${formid}`);
	var inputValue = input.querySelectorAll("input");
	for (let index = 0; index < inputValue.length; index++) {
		const element = inputValue[index].value;
		if (element == "") {
			inputValue[index].classList.add("error");
			check = false;
		}
	}
	return check;
}
function login() {
	var username = document.getElementById('username').value;
	var rollNumner = document.getElementById("rollNumber").value;
	var checkBox = document.getElementById('rememberMe').checked;
	if (checkBox == false) {
		location.replace("https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjWj6z15I77AhVBsKQKHSFnBa4QPAgI")
	}
	else {
		setCookie(username, rollNumner);
		location.replace("HomeTask/index.html");
	}
}
//function to clear input field
function clearInput() {
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	username.value = "";
	password.value = "";
}
//function to close error pop up
function closeError() {
	document.getElementById("error-alert").style.display = "none";
}

// Set a Cookie
function setCookie(cName, cValue) {
	document.cookie = cName + "=" + cValue;
}
// getcookiee
function getCokie() {
	alert(document.cookie)
}
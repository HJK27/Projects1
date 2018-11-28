firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
	document.getElement.ById("userLogin").style.display = "none";
	document.getElement.ById("welcome").style.display = "initial";
	window.alert("Login successful!");
	
    //window.location = './G2L_Map.html';
  } else {
	  document.getElement.ById("welcome").style.display = "none";
	  document.getElement.ById("userLogin").style.display = "initial";
  }
});

function login() {
	
	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	
	window.alert("Login successful!");
	//window.alert(userEmail + " " + userPass);

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: "  + errorMessage);
});
}

function logout() {
	firebase.auth().signOut();
}
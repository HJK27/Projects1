$(document).ready(function(){
	$(".switch").hover(function() {
		$(this).css("text-shadow","-1px 0 #ceaffd, 0 1px #ceaffd, 1px 0 #ceaffd, 0 -1px #ceaffd");
		$(this).css("transition","filter 0.4s");
	}, function() {
		$(this).css("text-shadow", "none");
		$(this).css("transition","filter 0.4s");
	});
	$("#switchRegister").click(function() {
		$("#userLogin").fadeOut(400);
		$("#register").delay(400).fadeIn(400);
	});
	$("#switchLogin").click(function() {
		$("#register").fadeOut(400);
		$("#userLogin").delay(400).fadeIn(400);
	});
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
	
	document.getElementById("submission_form").style.display = "none";
	document.getElementById("userLogin").style.display = "none";
	document.getElementById("register").style.display = "none";
	document.getElementById("welcome").style.display = "initial";
  } else {
	  
	document.getElementById("submission_form").style.display = "initial";
	document.getElementById("userLogin").style.display = "block";
	document.getElementById("welcome").style.display = "none";
  }
});

function login() {
	
	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	
	document.getElementById("welcome").innerHTML = "Welcome " + userEmail + "!";

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: "  + errorMessage);
});
}

function logout() {
firebase.auth().signOut().then(function() {
  //window.alert("Logout successful!");
}).catch(function(error) {
  // An error happened.
});
}

function newUser() {
	
	var newEmail = document.getElementById("new_email_field").value;
	var newPass = document.getElementById("new_password_field").value;
	
	document.getElementById("welcome").innerHTML = "Welcome " + newEmail + "!";
	
firebase.auth().createUserWithEmailAndPassword(newEmail, newPass).catch(function(error) {
  //Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: "  + errorMessage);
});
}
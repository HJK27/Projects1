$(document).ready(function(){
	    var expand = false;
  	    $("#s").click(function() {
	      $("#search").animate({
			height: "toggle"
		  });
		  $(".sIcon").animate({
		    height: "toggle"
		  });
		  $(".sItem").animate({
			height: "toggle"
		  });
		  if (expand == false) {
		    $("#menu").animate({
		      height: "210pt"
		    });
			expand = true;
		  }else if (expand == true) {
		    $("#menu").animate({
		      height: "85pt"
		    });
			expand = false;
		  }
	    });
		$("#search").animate({
			height: "toggle"
		  })
		  $(".sIcon").animate({
		    height: "toggle"
		  })
		  $(".sItem").animate({
			height: "toggle"
		  })
		  $("#menu").animate({
		    height: "85pt"
		  });
		  
		  $("#f").click(function() {
	        $(".fac").css({
	  		  "display": "inline-block"
		    });
		    $(".cfi").css({
		      "display": "inline-block"
		    });
		  });
		  $("#f1c").click(function() {
		    $("#f1c").css({
	  		  "display": "none"
		    });
		    $("#f1").css({
		      "display": "none"
		    });
			$("#fac1").css({
	  		  "display": "none"
		    });
		    $(".fp1").css({
	  		  "display": "none"
		    });
			$("#f1p").css({
	  		  "display": "none"
		    });
		  });
		  $("#f1").click(function() {
		    $("#fac1").css({
	  		  "display": "block"
		    });
		    $(".fp1").css({
	  		  "display": "block"
		    });
			$("#f1p").css({
	  		  "display": "inline-block"
		    });
		  });
		  $("#f1p").click(function() {
		    $("#fac1").css({
	  		  "display": "none"
		    });
		    $(".fp1").css({
	  		  "display": "none"
		    });
			$("#f1p").css({
	  		  "display": "none"
		    });
		  });
		  
		  $("#f2c").click(function() {
		    $("#f2c").css({
	  		  "display": "none"
		    });
		    $("#f2").css({
		      "display": "none"
		    });
			$("#fac2").css({
	  		  "display": "none"
		    });
		    $(".fp2").css({
	  		  "display": "none"
		    });
			$("#f2p").css({
	  		  "display": "none"
		    });
		  });
		  $("#f2").click(function() {
		    $("#fac2").css({
	  		  "display": "block"
		    });
		    $(".fp2").css({
	  		  "display": "block"
		    });
			$("#f2p").css({
	  		  "display": "inline-block"
		    });
		  });
		  $("#f2p").click(function() {
		    $("#fac2").css({
	  		  "display": "none"
		    });
		    $(".fp2").css({
	  		  "display": "none"
		    });
			$("#f2p").css({
	  		  "display": "none"
		    });
		  });
		  
		  $("#p").click(function() {
	        $(".par").css({
	  		  "display": "inline-block"
		    });
		    $(".cpi").css({
		      "display": "inline-block"
		    });
		  });
		  $("#p1c").click(function() {
		    $("#p1c").css({
	  		  "display": "none"
		    });
		    $("#p1").css({
		      "display": "none"
		    });
			$("#par1").css({
	  		  "display": "none"
		    });
		    $(".pp1").css({
	  		  "display": "none"
		    });
			$("#p1p").css({
	  		  "display": "none"
		    });
		  });
		  $("#p1").click(function() {
		    $("#par1").css({
	  		  "display": "block"
		    });
		    $(".pp1").css({
	  		  "display": "block"
		    });
			$("#p1p").css({
	  		  "display": "inline-block"
		    });
		  });
		  $("#p1p").click(function() {
		    $("#par1").css({
	  		  "display": "none"
		    });
		    $(".pp1").css({
	  		  "display": "none"
		    });
			$("#p1p").css({
	  		  "display": "none"
		    });
		  });
		  
		  $("#p2c").click(function() {
		    $("#p2c").css({
	  		  "display": "none"
		    });
		    $("#p2").css({
		      "display": "none"
		    });
			$("#par2").css({
	  		  "display": "none"
		    });
		    $(".pp2").css({
	  		  "display": "none"
		    });
			$("#p2p").css({
	  		  "display": "none"
		    });
		  });
		  $("#p2").click(function() {
		    $("#par2").css({
	  		  "display": "block"
		    });
		    $(".pp2").css({
	  		  "display": "block"
		    });
			$("#p2p").css({
	  		  "display": "inline-block"
		    });
		  });
		  $("#p2p").click(function() {
		    $("#par2").css({
	  		  "display": "none"
		    });
		    $(".pp2").css({
	  		  "display": "none"
		    });
			$("#p2p").css({
	  		  "display": "none"
		    });
		  });
		  
		  
		  $("#c").click(function() {
	        $(".cor").css({
	  		  "display": "inline-block"
		    });
		    $(".cci").css({
		      "display": "inline-block"
		    });
		  });
		  $("#c1c").click(function() {
		    $("#c1c").css({
	  		  "display": "none"
		    });
		    $("#c1").css({
		      "display": "none"
		    });
			$("#cor1").css({
	  		  "display": "none"
		    });
		    $(".cp1").css({
	  		  "display": "none"
		    });
			$("#c1p").css({
	  		  "display": "none"
		    });
		  });
		  $("#c1").click(function() {
		    $("#cor1").css({
	  		  "display": "block"
		    });
		    $(".cp1").css({
	  		  "display": "block"
		    });
			$("#c1p").css({
	  		  "display": "inline-block"
		    });
		  });
		  $("#c1p").click(function() {
		    $("#cor1").css({
	  		  "display": "none"
		    });
		    $(".cp1").css({
	  		  "display": "none"
		    });
			$("#c1p").css({
	  		  "display": "none"
		    });
		  });
		  
		  $("#c2c").click(function() {
		    $("#c2c").css({
	  		  "display": "none"
		    });
		    $("#c2").css({
		      "display": "none"
		    });
			$("#cor2").css({
	  		  "display": "none"
		    });
		    $(".cp2").css({
	  		  "display": "none"
		    });
			$("#c2p").css({
	  		  "display": "none"
		    });
		  });
		  $("#c2").click(function() {
		    $("#cor2").css({
	  		  "display": "block"
		    });
		    $(".cp2").css({
	  		  "display": "block"
		    });
			$("#c2p").css({
	  		  "display": "inline-block"
		    });
		  });
		  $("#c2p").click(function() {
		    $("#cor2").css({
	  		  "display": "none"
		    });
		    $(".cp2").css({
	  		  "display": "none"
		    });
			$("#c2p").css({
	  		  "display": "none"
		    });
		  });
	  });
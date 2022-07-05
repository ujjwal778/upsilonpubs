function validateform() {
	var name = document.Authreg.name.value;
	var mailid = document.Authreg.mailid.value;
	var phone = document.Authreg.phone.value;
	var pbooktitle = document.Authreg.pbooktitle.value;
	var exttfb = document.Authreg.exttfb.value;
	
	if (name==null || name=="") {
		
		document.getElementById("notname").innerHTML = "Please enter a name";
		return false;
		
	}
	
	else if (mailid == null || mailid == "") {
		
		document.getElementById("notmail").innerHTML = "Please enter a mail id";
		return false;
	}
	
	else if (phone == null || phone == "") {
		
		document.getElementById("notphone").innerHTML = "Please enter a phone number";
		return false;
	}
	
	else if (pbooktitle == null || pbooktitle == "") {
		
		document.getElementById("notpbt").innerHTML = "Please enter this field";
		return false;
	}
	
	else if (exttfb == null || exttfb == "") {
		
		document.getElementById("notet").innerHTML = "Please enter thi field";
		return false;
	}
	
}

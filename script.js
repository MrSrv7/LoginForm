	
	// A Mini Script for Checking if the Entered E-Mail is meeting our format

	const email = document.getElementById("email");
	const emailerr = document.getElementById("emailerr");

	let regExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ //Regular Expression for defining our standards/format

	function emailcheck(){

		if((email.value.match(regExp))) 
			emailerr.style.display="none";

		 else if(email.value==='')
		 emailerr.style.display="none";
		else
			emailerr.style.display="block";
		
		}
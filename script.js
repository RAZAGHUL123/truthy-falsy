function checkValue() {
	// Get the input value
	var value = document.getElementById("input").value;
	
	// Check if the value is truthy or falsy
	if (value){
		document.getElementById("result").innerHTML = value + " is truthy!";
	} else {
		document.getElementById("result").innerHTML = value + " is falsy!";
        document.getElementById("result").style.color = "red";
	}
}

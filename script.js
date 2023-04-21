function checkValue() {
	const value = document.getElementById("input").value;
	const result = document.getElementById("result");
	
	if (isTruthy(value)) {
	  result.innerHTML = `${value} is truthy!`;
	  result.style.color = "black";
	} else {
	  result.innerHTML = `${value} is falsy!`;
	  result.style.color = "red";
	}
  }
  
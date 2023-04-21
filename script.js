function checkValue() {
	const value = document.getElementById("input").value;
	const result = document.getElementById("result");
	
	result.innerHTML = value ? `${value} is truthy!` : `${value} is falsy!`;
	result.style.color = value == false ? "red" : "black";
  }
  
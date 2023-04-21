function checkValue() {
	const value = document.getElementById("input").value;
	const result = document.getElementById("result");
	
	result.innerHTML = value || value === 0 ? `${value} is truthy!` : `${value} is falsy!`;
	result.style.color = value || value === 0 ? "black" : "red";
  }

  
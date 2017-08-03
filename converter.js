var toFahrenheit
var toCelsius
var tempInput
var 




function toCelsius (tempInput) {
	var celcius = (tempInput - 32) / 1.8;
	return celcius;
}

function toFahrenheit (tempInput) {
	var farenheit = (tempInput * 1.8) + 32;
	return farenheit;
}

function convertTemp() {
	if(radioCelcius.checked) {
		returnedTemp = toCelsius(tempInput) 
	} else if (radioFarenheit.checked) {
		returnedTemp = toFahrenheit(tempInput);
	} else if (radioCelcius == false &&
		radioFarenheit == false) {
		alert("Select Celcius or Farenheit");
	}
}



// Get a reference to the button element in the DOM
var button = document.getElementById("convertButton");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (convertTemp) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
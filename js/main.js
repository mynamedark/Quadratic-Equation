function findDiscriminant(a, b, c){ // -> Integer or Float
	/* finding discriminant from entered values
	   Using class Math and him methods: pow, abs
	   Using function getBeautifulResult

	*/
	discriminant = Math.pow(b, 2) - (4 * a * c);
	if (discriminant >= 0){
		x1 = (- Math.abs(b) + Math.pow(discriminant, 1 / 2)) / (2 * a);
		x2 = (- Math.abs(b) - Math.pow(discriminant, 1 / 2)) / (2 * a);
	}
	else{
		return false;
	}
	return getBeautifulResult([x1, x2]); // <- Array [Integer or Float, Integer or Float]
}


function getBeautifulResult(listValues){ // -> Array [Float, Float]
	/* Making beutiful numbers for output
	   
	   Using class Math and him method round
	*/
	beautifulResult = [];
	for (i in listValues){
		if (listValues[i] % 1 == 0){
			x = Math.round(listValues[i]);	
		}
		else{
			x = Math.round(listValues[i]*100)/100;
		}
		beautifulResult.push(x);
	}
	return beautifulResult; // <- Array [Integer or Float, Integer or Float]
}

function changeResultText(result){ // Array -> [Integer or Float, Integer or Float]
	/* Change text value in html

	*/
	firstValue = result[0]
	secondValue = result[1] 
	textResult = document.getElementById("result_answer"); // Html object
	if (firstValue == secondValue){
		rightAnswer = `Your result: x1 = ${firstValue}`;
	}
	else{
		rightAnswer = `Your result: x1 = ${firstValue}; x2 = ${secondValue}`;
	}	
	textResult.textContent = rightAnswer; // changing textcontent value

}


function getNumbers(){
	/* getting values from html block input and operation from them

	   Using functions: findDescriminant, changeResultText
	*/
	a = document.getElementById("A-value").value; // html object
	b = document.getElementById("B-value").value; // html object
	c = document.getElementById("C-value").value; // html object
	if (a.length == 0 || b.length == 0 || c.length == 0){
		alert("You didn't enter some value");
	}
	else{
		result = findDiscriminant(a, b, c); // Array or false
		if (result){
			changeResultText(result); 
		}
		else{
			alert("Equation haven't no body solution");
		}
	}
}




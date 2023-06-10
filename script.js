//your code here
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let ans = bandNames.map(band).sort();
let ul = document.getElementById("band");
for (let x of ans){
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(x));
	ul.appendChild(li);
}

function band(element) {
	if(element.includes("A", 0)){
		return element.replace("A", "").trim();
	}
	else if(element.includes("An", 0)){
		return element.replace("An", "").trim();
	}
	else if(element.includes("The", 0)){
		return element.replace("The", "").trim();
	}
	return element;
}

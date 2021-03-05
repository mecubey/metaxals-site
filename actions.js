function clap_description(e){
	var pclass = e.nextElementSibling.className; 
	if(pclass  === "hide-tools-description"){
		e.nextElementSibling.className = "show-tools-description";
	}
	else{
		e.nextElementSibling.className = "hide-tools-description";
	}
}

function generate_sequence(){
	document.getElementById('showSequence').innerHTML = "";
	
	var characterSet = document.getElementById('charSequence').value;
	var startRange = parseInt(document.getElementById('startRange').value);
	var endRange = parseInt(document.getElementById('endRange').value);
	
	var min = 0;
	var max = 0;
	
	if(startRange > endRange){
		min = endRange;
		max = startRange;
	}
	else if(endRange > startRange){
		max = endRange;
		min = startRange;
	}
	else{
		min = startRange;
		max = startRange;
	}
	
	var sequenceLength = parseInt(Math.random()* (max - min) + min);
	
	if(isNaN(sequenceLength) || characterSet == ""){
		document.getElementById('showSequence').innerHTML = "Invalid range or no characters given";
	}
	else{
		while(document.getElementById('showSequence').innerHTML.length < sequenceLength){
			document.getElementById('showSequence').innerHTML += characterSet[Math.floor(Math.random() * characterSet.length)];
		} 
	}
}
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
	var range = [parseInt(document.getElementById('startRange').value), parseInt(document.getElementById('endRange').value)]
	
	var min = Math.min.apply(null, range);
	var max = Math.max.apply(null, range);
	
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

function test_python(){
	$.ajax({
		url: '/phpstuff/g_calc.php',
		type : 'POST',
		success : function(result){
			console.log(result);
			document.getElementById('testdiv').src = "/images/math/"+result;	
		}
	})
}

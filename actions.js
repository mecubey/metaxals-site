function clap_description(e){
	var tool_desc = e.nextElementSibling; 
	if(tool_desc.style.display  === "none"){
		tool_desc.style.display = "block";
	}
	else{
		tool_desc.style.display = "none";
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

function create_graph(){
	document.cookie = "x-start="+String(document.getElementById('x-startpoint').value);
	document.cookie = "x-end="+String(document.getElementById('x-endpoint').value);
	document.cookie = "y-start="+String(document.getElementById('y-startpoint').value);
	document.cookie = "y-end="+String(document.getElementById('y-endpoint').value);
	document.cookie = "plot-function="+String(document.getElementById('function').value);
	document.cookie = "x-ticks="+String($('#ticks').is(':checked'));

	$.ajax({
		url: '/phpstuff/g_calc.php',
		type : 'POST',
		success : function(result){
		document.getElementById('show_graph').src = "/images/math/"+result;	
		}
	})
}

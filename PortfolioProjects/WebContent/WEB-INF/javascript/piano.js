var pianoKey = document.getElementsByClassName("pianoKeys");
for(var i = 0;i<pianoKey.length;i++){
	console.log(pianoKey[i]);
	pianoKey[i].addEventListener("keypress", function(){
		console.log(this);
		alert("key is pressed");

	});

}

//document.getElementsByClassName("pianoKey").addEventListener("mouseleave", releaseKey);
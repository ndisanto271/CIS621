var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var textDisplay;
var highScore = 0;
var hsName = "";

var $ = function (id) { return document.getElementById(id); }

var addElement = function () {
	// get user entries
	var name = $("name").value;
    var score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = $("name").value;
		scores[scores.length] = parseInt($("score").value);
	    $("name").value = "";
	    $("score").value = "";

	    //clear results text as per instruction
		document.getElementById("results").value = "";
	}
    $("name").focus();
}

//best score
var showBestScore = function ()
{
		textDisplay="";
		for( var i=0;i<=scores.length;i++)
		{
			if(scores[i] > highScore)
			{
				highScore = scores[i];
				hsName = names[i];
			}
		}

		textDisplay = "High Score Student = " + hsName + "\nHigh Score = " + highScore;

		document.getElementById("results").value = textDisplay;
}
//list view
var listArray = function (){

	textDisplay = "";
	for ( var i=0;i<= scores.length-1;i++)
	{
		textDisplay += names[i] + "," + scores[i]+"\n";
	}

	document.getElementById("results").value = textDisplay;

}

window.onload = function () {
	$("add").onclick = addElement;
	$("show_best").onclick = showBestScore;
	$("list_array").onclick = listArray;
	$("name").focus();
}



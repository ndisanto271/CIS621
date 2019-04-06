var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var total;
var sales;
var textDisplay="";
var totalInfo = "";

var $ = function (id) {
	return document.getElementById(id);
}

var regionSum = function(){

	textDisplay = "";
	sales = 0;
	//getSum(r1);
	textDisplay += "Sales by Region\n";
	 getSum(r1);
	sales += total;
	textDisplay += "Region 1: " + total + "\n";
	 getSum(r2);
	sales += total;
	 textDisplay+= "Region 2: " + total + "\n";
	 getSum(r3);
	sales += total;
	 textDisplay += "Region 3: " + total + "\n";
	 getSum(r4);
	sales += total;
	 textDisplay += "Region 4: " + total + "\n";
	 getSum(r5);
	 textDisplay += "Region 5: " + total;
	sales += total;

	 document.getElementById("results").value = textDisplay;
}

//get sum of arrays
function getSum(params){
	total = 0;
	for(var i =0;i<params.length;i++){
		total += params[i];
	}
}

//totalSales
function displayTotalSales(){
	sales=0;
	regionSum();
	totalInfo += "\nTotal: " + sales;
	document.getElementById("results").value = textDisplay + totalInfo;
}

//display by quarter
function byQuarter(r1param,r2param,r3param,r4param,r5param){
	r1param = r1;
	r2param = r2;
	r3param = r3;
	r4param = r4;
	r5param = r5;

	textDisplay = "";
	textDisplay += "Quarter 1\n"
	textDisplay +=  "Region 1: " + r1param[0] + "\nRegion 2: " + r2param[0] + "\nRegion 3: " + r3param[0] + "\nRegion 4: " + r4param[0] + "\nRegion 5: " + r5param[0];
	textDisplay += "\nQuarter 2\n"
	textDisplay +=  "Region 1: " + r1param[1] + "\nRegion 2: " + r2param[1] + "\nRegion 3: " + r3param[1] + "\nRegion 4: " + r4param[1] + "\nRegion 5: " + r5param[1];
	textDisplay += "\nQuarter 3\n"
	textDisplay +=  "Region 1: " + r1param[2] + "\nRegion 2: " + r2param[2] + "\nRegion 3: " + r3param[2] + "\nRegion 4: " + r4param[2] + "\nRegion 5: " + r5param[2];
	textDisplay += "\nQuarter 4\n"
	textDisplay +=  "Region 1: " + r1param[3] + "\nRegion 2: " + r2param[3] + "\nRegion 3: " + r3param[3] + "\nRegion 4: " + r4param[3] + "\nRegion 5: " + r5param[3];

	document.getElementById("results").value = textDisplay;
}
window.onload = function () {

	$("show_region").onclick = regionSum;
	$("show_quarter").onclick = byQuarter;
	$("show_total").onclick = displayTotalSales;
}



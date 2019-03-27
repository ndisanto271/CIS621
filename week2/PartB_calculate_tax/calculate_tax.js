var $ = function (id) {
    return document.getElementById(id);
}

var calculate_tax = function() {
	var hoursWorked = parseFloat( $("hours").value );
	var payRate = parseFloat($("pay").value);
	var grossPay = hoursWorked*payRate;
	var rate;


	//based on the wording of the problem, the tax income chart looks like yearly values and they get payed every other
    //week so, get tax rate from yearly income?

    // yearly income
    var income = grossPay * 24;


	switch (true)
    {
        case(income < 8700):
            rate = 10;
            break;

        case ( income < 35350):
            rate = 15;
            break;

        case( income < 85650):
            rate = 25;
            break;

        case( income < 178650):
            rate = 28;
            break;

        case(income <= 388350):
            rate = 33;
            break;

        case(income > 388350):
                rate = 35;
                break;
    }
    var taxRate = (parseFloat(rate)/100);

	var netPay = grossPay - (grossPay*taxRate);

    $("rate").value = rate + "%";
    $("gross").value = grossPay;
    $("net").value = netPay;

	
}

window.onload = function () {
    $("calculate").onclick = calculate_tax;
}
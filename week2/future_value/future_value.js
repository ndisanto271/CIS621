var $ = function (id) {
    return document.getElementById(id);
}

var getInterestValue = function () {


    var InvestmentAmount = parseFloat($("investment").value);
    var AnnualRate = parseFloat(($("rate").value / 100));
    var years = parseFloat($("years").value);

    var interest = InvestmentAmount;
    //book uses compound interest
    for(var i =1; i <= years;i++)
    {
        interest = interest +(interest * AnnualRate);
    }


    $("future_value").value = Math.round(interest);

};

window.onload = function () {
    $("calculate").onclick = getInterestValue;
}
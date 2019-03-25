function calculateTax(subtotal, taxRate){
    var tax = subtotal * taxRate;
    tax = tax.toFixed(2);
    return tax;
    
};

window.onload = function() {
    var subtotal = 100;
    var taxRate = 0.25;
    var salesTax = calculateTax(subtotal, taxRate);
    //alert(salesTax);
    document.getElementById('taxOutput').innerHTML ="DK moms: " + salesTax + "<br>";
    var taxRate = 0.20;
    document.getElementById('taxOutput').innerHTML +="UK moms: " + salesTax;

};
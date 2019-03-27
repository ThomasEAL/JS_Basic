let calculateTax =function (subtotal, taxRate){
    let tax = subtotal * taxRate;
    tax = tax.toFixed(2);
    return tax;
    
};

window.onload = function() {
    console.log("running...");
    let subtotal = 100;
    let taxRate = 0.25;
    let salesTax = calculateTax(subtotal, taxRate);
    
    document.getElementById('taxOutput').innerHTML ="DK moms: " + salesTax + "<br>";
    taxRate = 0.20;
    
    salesTax = calculateTax(subtotal, taxRate);
    document.getElementById('taxOutput').innerHTML +="UK moms: " + salesTax;

};
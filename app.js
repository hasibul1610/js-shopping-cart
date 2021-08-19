function updateProductNumber(product,price,isIncreasing){
    const productInput= document.getElementById(product + '-number');

    let productNumber = productInput.value ;

    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else{
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update case total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // Calculating total 
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') *59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    

    // setting the value in html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalPrice;
}


// phone button handler 
document.getElementById('phone-plus').addEventListener('click',function(){
    
    updateProductNumber('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);


});

// phone case button handler 
document.getElementById('case-plus').addEventListener('click',function(){
    
    updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);


});


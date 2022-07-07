//   function showCreditMethod(){
//     const creditCard =document.querySelector('#credit-card-method').checked;
  
//     if(creditCard){
//         document.querySelector('.credit-card-details').style.display="block";
//         console.log("Love");
//     }
//     else{
//         document.querySelector('.credit-card-details').style.display="none";
//     }
// }
// function showCashMethod(){
//     const cashPayment =document.querySelector('#cash-payment-method').checked;
  
//     if(cashPayment){
//         document.querySelector('.cash-payment-details').style.display="block";
//         console.log("Cash");
//     }
//     else{
//         document.querySelector('.cash-payment-details').style.display="none";
//     }
// }
// function showBankMethod(){
//     const bankTransfer =document.querySelector('#bank-transfer-method').checked;
  
//     if(bankTransfer){
//         document.querySelector('.bank-transfer-details').style.display="block";
//         console.log("Bank");
//     }
//     else{
//         document.querySelector('.bank-tranfer-details').style.display="none";
//     }
// }

$(document).ready(function(){
    $('input[type ="radio"]').click(function(){
        const inputValue =$(this).attr("value");
        const targetPayment = $("." + inputValue);
        $(".payment").not(targetPayment).hide();
        $(targetPayment).show();

    })
})

const creditPay = document.querySelector("#credit-pay");
creditPay.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('#credit-successful').style.display="block";
})

const cashPay = document.querySelector("#cash-pay");
cashPay.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('#cash-successful').style.display="block";
})


const transferPay = document.querySelector("#transfer-pay");
transferPay.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('#transfer-successful').style.display="block";
})


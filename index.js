const currency_one=document.getElementById('currency-one');
const input_one=document.getElementById("amount-one");
const currency_two = document.getElementById('currency-two');
const input_two = document.getElementById("amount-two");
const swap_btn=document.getElementById("swap");
const exchange_rate=document.getElementById("rate");


//fetch the exchange rates

function calculate(){
    const input_one_value=currency_one.value;
    const input_two_value= currency_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/d17b28a2fcd30bfa4790c936/latest/${input_one_value}`)
    .then(res=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[input_two_value];

        exchange_rate.innerHTML=`1${input_one_value} = ${rate}  ${input_two_value}`
        input_two.value=( input_one.value*rate).toFixed(2)
    })


}




currency_one.addEventListener('change',calculate);
input_one.addEventListener('input',calculate);
currency_two.addEventListener('change',calculate);
input_two.addEventListener('input',calculate);
swap_btn.addEventListener('click',()=>{
    const temp = currency_one.value;
   currency_one.value=currency_two.value;
   currency_two.value=temp;
   calculate();
});
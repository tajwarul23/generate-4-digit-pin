function getPin (){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if(pinString.length ==4){
        return pin;

    }
    else {
        return getPin();
    }
}

function generatePin(){
    
   const pinOutput=getPin();
   document.getElementById("display-pin").value=pinOutput;
   console.log(pinOutput)
}

document.getElementById("key-pad").addEventListener("click",function(event){
   const number =event.target.innerText;
   const calc= document.getElementById("typed-numbers");
   if(isNaN(number)){
       if(number == "C"){
           calc.value=" ";
       }
   }
   else{
    const previousCalc = calc.value;
    const newCalc = previousCalc + number;
    calc.value=newCalc;
   }
});

function verifypin(){
    const generatedPin = document.getElementById("display-pin").value;
    const typedPin = document.getElementById("typed-numbers").value;

    const success = document.getElementById("notify-success");
    const fail = document.getElementById("notify-fail");

    if( generatedPin == typedPin){
        success.style.display="block"
        fail.style.display="none"
    }
    else{
        fail.style.display="block"
        success.style.display="none"
    }
}
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numberOfNotes =  document.querySelectorAll(".no-of-notes");

let arrOfNotes = [500,200,100,20,10,5,1]

function clickHandler(){
    hideMessage();
    if(parseInt(billAmount.value)>0){

        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)){
          let amountToReturn = parseInt(cashGiven.value) - parseInt(billAmount.value); 
           minimumNotes(amountToReturn);
        }

        else{
            showMessage("Pay the bill");
        }

    }
    else{
        showMessage("Bill amount must be greater than 0");
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
 message.style.display = "block";
 message.innerText = msg;
}

function minimumNotes(amountToReturn){
  for(let i=0;i<arrOfNotes.length;i++){
    let noOfNotes = Math.trunc(amountToReturn/arrOfNotes[i]);
    amountToReturn =(amountToReturn % arrOfNotes[i]);
    numberOfNotes[i].innerText = noOfNotes;
  }
}



checkButton.addEventListener("click",clickHandler);
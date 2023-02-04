const billInput = document.querySelector("#bill-input");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector(".message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const allNotes = [2000, 500, 200, 100, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billInput.value >= 0) {
    if (cashGiven.value >= billInput.value) {
      const amountToReturn = Number(cashGiven.value - billInput.value);
      numberOfNotesToBeReturned(amountToReturn);
      showMessage("The cash to be returned is:");
    } else {
      showMessage("The cash amount is less than Bill, enter a new cash amount");
    }
  } else {
    showMessage("Invalid bill amount, Please enter a valid amount.");
  }
});

function numberOfNotesToBeReturned(amountToReturn) {
  let i;
  for (i = 0; i < allNotes.length; i++) {
    numberOfNotes = Number(Math.trunc(amountToReturn / allNotes[i]));
    amountToReturn = Number(amountToReturn % allNotes[i]);
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(mssg) {
  message.style.display = "block";
  message.innerText = mssg;
}

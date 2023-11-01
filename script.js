var 
var rightSide = document.querySelectorAll(".right-side");
var listGroup = document.getElementById("listGroup");
var balance = document.getElementById("credit-balance");
var payinput = document.getElementById("payinput");
var paybutton = document.getElementById("btn-pay");
var popmessage = document.getElementById("pop-message");
var bal = parseFloat(localStorage.getItem("balance")) || 0;


// Update the balance element with the stored value
balance.textContent = bal.toFixed(2);
paybutton.addEventListener("click", function(){
   
   if (payinput.value != ""){
      balance.textContent = (parseFloat(payinput.value) + parseFloat(bal)).toFixed(2);
      popmessage.textContent = "Succeffully payed, your current balacnce is:" + balance.textContent;
      bal = balance.textContent;
      localStorage.setItem("balance", bal); 
      
      var listHistory = document.createElement("a");
      var historyHeader = document.createElement("div");
      var h5 = document.createElement("h5");
      var small = document.createElement("small");
      var pNmaefrom = document.createElement("p");
      var smallAmount = document.createElement("small");

      listHistory.className = "list-group-item list-group-item-action";
      historyHeader.className = "d-flex w-100 justify-content-between";
      h5.className = "mb-1";
      pNmaefrom.className = "mb-1";
      
      listGroup.appendChild(listHistory);
      listHistory.appendChild(historyHeader);
      historyHeader.appendChild(h5);
      historyHeader.appendChild(small);
      small.appendChild(document.createTextNode("5 days ago"));
      h5.appendChild(document.createTextNode("Money payed"));
      listHistory.appendChild(pNmaefrom);
      pNmaefrom.appendChild(document.createTextNode("sent by prince"));
      listHistory.appendChild(smallAmount);
      smallAmount.appendChild(document.createTextNode(parseFloat(payinput.value)));

  payinput.value = "" ;
    }
   
    else {
        alert("Please enter amount to pay"); 
    }
    
});
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});
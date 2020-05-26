//business logic

function BankAccount(username, balance){
  this.username = username;
  this.balance = balance;
}

BankAccount.prototype.addToBalance = function (amount){
  if (amount){
    this.balance += amount;
  }
}

BankAccount.prototype.subtractFromBalance = function (amount){
  if(amount){
    this.balance -= amount;
  }
}

let bankAccount;
function displayBalance(){
  $("#displaybalance").html(bankAccount.balance);
}

$(document).ready(function(){
  $("form#account").submit(function(e){
    e.preventDefault();
    let name = $("#name").val();
    let balance = parseInt($("#balance").val());

    bankAccount = new BankAccount(name,balance);
    displayBalance();
  })

  $("form#deposits").submit(function(e){
    e.preventDefault();
    let deposit = parseInt($("#deposit").val());
    let withdrawal = parseInt($("#withdrawal").val());

    $("#deposit").val("")
    $("#withdrawal").val("")

    bankAccount.addToBalance(deposit);
    bankAccount.subtractFromBalance(withdrawal);
    displayBalance();
  })
})


//business logic

function BankAccount(username, deposit){
  this.username = username;
  this.deposit = deposit;
}

BankAccount.prototype.addToDeposit = function (amount){
  this.deposit += amount;
}

BankAccount.prototype.addToDeposit = function (amount){
  this.deposit -= amount;
}

$(document).ready(function(){
  
})


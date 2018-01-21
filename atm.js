var balance = 1250.00;
var checkBalance = true;
var isActive = true;

if (checkBalance && isActive) {
	if (balance>0) {
		console.log("Your balance is $"+balance.toFixed(2)+".");
	} else if (balance===0) {
		console.log("Your account is empty.");
	} else {
		console.log("Your balance is negative. Please contact bank.");
	} 
} else if (checkBalance && isActive===false) {
	console.log("Your account is no longer active.");
} else {
	console.log("Thank you. Have a nice day!");
}

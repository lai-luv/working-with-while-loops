/****************** Exercise 1 ********************/

// List five examples of websites using loops. 

// Amazon  
// BJ'S
// Costco's
// Facebook
// Google



/****************** Exercise 2 ********************/

// Use a while loop to log to the console the numbers from 1 to 10
let integer = 1
while(integer < 11){
console.log(`integer: ${integer}`)
integer++
}



/****************** Exercise 3 ********************/

// Use a while loop to calculate the sum of even numbers from 2 to 20

let sum = 2;
let num = 0;

while(sum<= 22){
if (sum % 2===0){
    num +=sum;
}
sum++
}
console.log(`Sum of even numbers from 2 to 22 is :${num}`)





/****************** Exercise 4 ********************/

// Implement a countdown using a while loop
let countdown = 10;


while(countdown>=1){
    countdown--;
}
console.log(countdown,"blast off")





/****************** Exercise 5 ********************/

// Review This Code

// const secretNumber = Math.floor(Math.random() * 100) + 1; 
// let guess;
// let attempts = 0;

// while (guess !== secretNumber) {
//     guess = parseInt(prompt("Guess a number between 1 and 100:"));

//     if (isNaN(guess)) {
//         alert("Please enter a valid number.");
//     } else {
//         attempts++;
//         if(guess < secretNumber){
//             alert('too low')
//         }else if(guess > secretNumber){
//             alert('too high!')
//         }else{
//             alert(`Congratulations! you guessed the number ${secretNumber} in ${attempts} attempts.`)
//         }
//     }
    
// }


// Refactor the code so that:
// 1. The user will see the alert "Too low!", if the number is too low. 
// 2. The user will see the alert "Too high!" if the number is too high. 
// 3. The user will see the alert "`Congratulations! You guessed the number [NUMBER] in [ATTEMPTS] attempts.`)" if the number is correct. 

 


/****************** Exercise 6 ********************/

// Simulating a vending machine using a while loop

// Initial amount of money the user has
let userBalance = 20;

// Price of an item in the vending machine
const itemPrice = 3;

console.log("Welcome to the Vending Machine!");
console.log(`You have $${userBalance} in your balance.`);

while(userBalance >= itemPrice) {
    console.log("Available options:")
    console.log("1. Snack A ($3)");
    console.log("2. Snack B ($2)");
    console.log("3. Exit");

    const choice = parseInt(prompt("Enter your choice:"));

    if (choice === 1) {
        console.log("You selected Snack A. Enjoy your snack!");
        userBalance -= itemPrice;
    } else if (choice === 2) {
        console.log("You selected Snack B. Enjoy your snack!");
        userBalance -= 2;
    } else if (choice === 3){
        console.log("Thank you for using the Vending Machine. Have a great day!");
        userBalance = 0;
    } else {
        console.log("Invalid choice. Please select a valid option.");
    }

    console.log(`Your current balance: $${userBalance}`);
}

console.log("Insufficient balance. Please add more money to use the Vending Machine.");

// 1. Write the condition so that the while loop will eventually stop. 

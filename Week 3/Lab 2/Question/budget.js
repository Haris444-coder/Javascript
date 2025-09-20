/**
 * Budget Tracker App Lab Instructions
 * ------------------------------------
 *
 * Goal: Your task is to replicate the functionality of a Budget Tracker App.
 * Example Link: https://65a9f4c4910e3845f9854b59--illustrious-nougat-1e8601.netlify.app/
 *
 * Key Functions to Implement:
 * 1. Calculate the net balance by subtracting total expenses from income. 
 * 2. Display a message indicating if the user is over or under budget and by how much.
 * 3. Show descriptions of each expense type when hovered over. DONE
 * 4. Clear the description box when the mouse is moved away from an expense. DONE
 *
 * Note:
 * - You will need to use 'parseFloat' to convert input string values to numbers.
 *   Research how to use 'parseFloat' for this purpose.
 * - Learn how to implement 'onmouseout' to clear the description box.
 * - Here are all the expense descriptions so you can copy/paste them:
 *      Housing: Mortgage or rent payments
 *      Food: Grocery and dining out
 *      Transportation: Vehicle maintenance and fuel
 *      Utilities: Electricity, water, etc.
 *      Insurance: Health, car, home insurance
 * Lab Bonus:
 * 1. Add validation to check if any box is empty and set the default value to 0.
 * 2. Remove the 'Calculate' button. Instead, calculate the budget and show the
 *    message dynamically as the user enters or changes any numbers in the input fields.
 *
 * Good luck!
 */

//Hovering over the selected text
let housingText = document.getElementById("housing-expense");
housingText.onmouseover = function () {
    document.getElementById("expense-description").innerHTML = "Housing: Mortgage or rent payments";
}

let foodText = document.getElementById("food-expense");
foodText.onmouseover = function () {
    document.getElementById("expense-description").innerHTML = "Food: Grocery and dining out";
}

let transportationText = document.getElementById("transportation-expense");
transportationText.onmouseover = function () {
    document.getElementById("expense-description").innerHTML = "Transportation: Vehicle maintenance and fuel";
}

let utilitiesText = document.getElementById("utilities-expense");
utilitiesText.onmouseover = function () {
    document.getElementById("expense-description").innerHTML = "Utilities: Electricity, water, etc";
}

let insuranceText = document.getElementById("insurance-expense");
insuranceText.onmouseover = function () {
    document.getElementById("expense-description").innerHTML = "Insurance: Health, car, home insurance";
}

//no longer hovering over it
housingText.onmouseout = function () {
    document.getElementById("expense-description").innerHTML = "";
}

foodText.onmouseout = function () {
    document.getElementById("expense-description").innerHTML = "";
}

transportationText.onmouseout = function () {
    document.getElementById("expense-description").innerHTML = "";
}

utilitiesText.onmouseout = function () {
    document.getElementById("expense-description").innerHTML = "";
}

insuranceText.onmouseout = function () {
    document.getElementById("expense-description").innerHTML = "";
}

//Calculate function
let calculate = document.getElementById("calculate");
calculate.onclick = function(){
    function calculateNetBalance(){
        const incomeValue = parseFloat(document.getElementById("income").value);
        const house = parseFloat(document.getElementById("housing").value);
        const food = parseFloat(document.getElementById("food").value);
        const transportation = parseFloat(document.getElementById("transportation").value);
        const utilities = parseFloat(document.getElementById("utilities").value);
        const insurance = parseFloat(document.getElementById("insurance").value);
        const netBalance = incomeValue - (house + food + transportation + utilities + insurance);
        console.log(netBalance);
        if (netBalance >= 0){
            document.getElementById("budget-message").innerHTML = "You are under budget by $" + netBalance + ". Great job!"
            
        }
        else{
            document.getElementById("budget-message").innerHTML = "You are over budget by $" + netBalance + ". Time to reasses your expenses"           
        }
    }
    calculateNetBalance();
}
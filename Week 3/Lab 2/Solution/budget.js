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
 * 3. Show descriptions of each expense type when hovered over.
 * 4. Clear the description box when the mouse is moved away from an expense.
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

document.getElementById("housing-expense").onmouseover = function () {
  showDescription("Housing: Mortgage or rent payments");
};
document.getElementById("housing-expense").onmouseout = clearDescription;

document.getElementById("food-expense").onmouseover = function () {
  showDescription("Food: Grocery and dining out");
};
document.getElementById("food-expense").onmouseout = clearDescription;

document.getElementById("transportation-expense").onmouseover = function () {
  showDescription("Transportation: Vehicle maintenance and fuel");
};
document.getElementById("transportation-expense").onmouseout = clearDescription;

document.getElementById("utilities-expense").onmouseover = function () {
  showDescription("Utilities: Electricity, water, etc.");
};
document.getElementById("utilities-expense").onmouseout = clearDescription;

document.getElementById("insurance-expense").onmouseover = function () {
  showDescription("Insurance: Health, car, home insurance");
};
document.getElementById("insurance-expense").onmouseout = clearDescription;

function showDescription(description) {
  document.getElementById("expense-description").textContent = description;
}

function clearDescription() {
  document.getElementById("expense-description").textContent = "";
}

function calculateBudget() {
  const income = parseFloat(document.getElementById("income").value) || 0;
  const housing = parseFloat(document.getElementById("housing").value) || 0;
  const food = parseFloat(document.getElementById("food").value) || 0;
  const transportation =
    parseFloat(document.getElementById("transportation").value) || 0;
  const utilities = parseFloat(document.getElementById("utilities").value) || 0;
  const insurance = parseFloat(document.getElementById("insurance").value) || 0;

  const totalExpenses = housing + food + transportation + utilities + insurance;
  const netBalance = income - totalExpenses;

  let budgetMessage = "";
  if (netBalance >= 0) {
    budgetMessage = "You are under budget by $" + netBalance + ". Great job!";
  } else {
    budgetMessage =
      "You are over budget by -$" +
      netBalance * -1 +
      ". Time to reassess your expenses.";
  }

  document.getElementById("budget-message").textContent = budgetMessage;
}

document.getElementById("calculate").onclick = calculateBudget;

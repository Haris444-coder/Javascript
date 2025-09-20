/**
 * Classroom Seat Allocator App Lab Instructions
 * ---------------------------------------------
 *
 * Goal: Your task is to replicate the functionality of a Classroom Seat Allocator App.
 * Example Link: https://65b17677ff421247f6aa65d2--lively-maamoul-812ea3.netlify.app/
 *
 * Key Functions to Implement:
 * 1. Allocate seats to students either randomly or alphabetically.
 * 2. Display student names on the seats.
 * 3. Change the color of each seat based on the student's favorite color.
 *
 * Note:
 * - Learn array sorting techniques for alphabetical allocation and array manipulation for random allocation.
 * - The students array with names and favorite colors is provided in the JS file.
 *
 * Lab Bonus:
 * 1. Use localStorage to save the current seating arrangement and load it when the app is reloaded.
 *    - Research how to use 'localStorage.setItem' and 'localStorage.getItem'.
 * 2. Add a search feature to filter and highlight seats by student name.
 *    - Hint: Implement a search input that filters the seating arrangement as the user types.
 *    - Update the display to highlight or show only seats of students whose names match the search query.
 *
 * Good luck!
 */

const students = [
  { name: "Alice", color: "red" },
  { name: "Bob", color: "blue" },
  { name: "Chen", color: "green" },
  { name: "Devika", color: "yellow" },
  { name: "Emeka", color: "purple" },
  { name: "Fatima", color: "pink" },
  { name: "Gustavo", color: "orange" },
  { name: "Hiroshi", color: "grey" },
  { name: "Ibrahim", color: "cyan" },
  { name: "Jin", color: "magenta" },
  { name: "Kavya", color: "lime" },
  { name: "Liam", color: "maroon" },
  { name: "Maria", color: "navy" },
  { name: "Nia", color: "olive" },
  { name: "Omar", color: "teal" },
  { name: "Priya", color: "violet" },
  { name: "Qasim", color: "coral" },
  { name: "Rashid", color: "chocolate" },
  { name: "Sofia", color: "silver" },
  { name: "Takumi", color: "gold" },
];

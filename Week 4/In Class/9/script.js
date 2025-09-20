let elements = document.getElementsByTagName("p");
console.log(elements);
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = "red";
}

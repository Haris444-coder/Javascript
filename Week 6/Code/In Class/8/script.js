let newElement1 = document.createElement("p");
newElement1.innerText = "This is a new paragraph";

let newElement2 = document.createElement("p");
newElement2.innerText = "This is another new paragraph";

let container = document.getElementById("container");
container.appendChild(newElement1);
container.insertBefore(newElement2, newElement1);

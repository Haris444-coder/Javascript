var divs = document.getElementsByClassName("output");
var paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < 3; i++) {
  for (let i = 0; i < divs.length; i++) {
    divs[i].innerHTML += "1";
  }
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML += "2";
  }
}

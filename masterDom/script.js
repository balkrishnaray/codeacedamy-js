const Heading = document.getElementById("main-heading");
Heading.style.color = "green";
// console.log(Heading);

const Container = document.getElementsByClassName("container");
// console.log(Container);

const Tag = document.getElementsByTagName("li");
console.log(Tag);

const Select = document.querySelector("#main-heading");
Select.style.color = "red";
// console.log(Select);

const Select2 = document.querySelectorAll("li");

for (let i = 0; i < Select2.length; i++) {
  Select2[i].style.color = "blue";
}
console.log(Select2);

const li = document.createElement("li");
const ul = document.querySelector("ul");

ul.append(li);

const bgColor = document.querySelector("#first-btn");

bgColor.addEventListener("mouseover", backgrndColor);

function backgrndColor() {
  bgColor.style.backgroundColor = "blue";
}

document.querySelector("#fastfoods").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("class") + " is clicked");
  const target = e.target;
  if (e.target.matches("li")) {
    e.target.style.backgroundColor = "lightgrey";
  }
});

const food = document.querySelector("#fastfoods");
const newFood = document.createElement("li");
newFood.setAttribute("class", "pizza");
newFood.innerText = "Pizza";
food.appendChild(newFood);

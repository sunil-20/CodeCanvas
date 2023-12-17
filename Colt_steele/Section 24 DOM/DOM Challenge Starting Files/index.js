document.query
let heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML="Good Bye";
heading.style.color = "green";
document.querySelector("input").click();
let thirdLi = document.querySelector('li:nth-child(3)');
thirdLi.style.color = "purple";
thirdLi.innerHTML="Vizon";
// var firstChild = parentElement.firstElementChild;
// var lastChild = parentElement.lastElementChild;
// var nextSibling = currentElement.nextElementSibling;
// var previousSibling = currentElement.previousElementSibling;
// document.getElementsByTagName("li")[1].style.color="red";
// document.getElementsByClassName("btn")[0].innerHTML="go go";
// document.getElementById("title").style.color="purple";

// document.querySelector('#title').innerHTML="Selecting elements in JS";
// document.querySelector(".btn").style.color="teal";

//combining the selectors selects the first a
document.querySelector("a");
// selecting all a tags
document.querySelectorAll("a");
// selecting specifit tag
let mz_link = document.querySelector("#second_list .item2 a");
mz_link.textContent = mz_link.textContent.toUpperCase();

let ggl_anchor = document.querySelector("li a");
ggl_anchor.style.color = "red";

// selecting multiple lists
document.querySelectorAll("#first_list .item")
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("h1").classList.add("huge");
//innerHTML selects everything inside h1. for ex <strong>Hello!</strong> 
document.querySelector("h1").innerHTML = "<em>HELLO!</em>";
document.querySelector("h1").innerText = "This is innertext"
document.querySelector("a").attributes;
document.querySelector("a").setAttribute("href", "www.bing.com")
$("h1").css("color", "purple");
$("h1").css("text-decoration", "underline");
$("button").html("<em> Don't Click Me</em>")
$("img").attr("src")
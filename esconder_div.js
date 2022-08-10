var btn = document.getElementById("botao");
var container = document.querySelector(".container1");


btn.addEventListener("click", function () {
  if (container.style.display === "block") {
    container.style.display = "none";  
  } else {
    container.style.display = "block";
  }
});

btn.addEventListener("click", function () {
    container.style.display = "block";
});




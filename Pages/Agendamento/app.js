import iniciaModal from "../../utils/mostrar_modal.js";
import Menu from "../../utils/menu.js";
import { carousel } from "../../utils/carousel.js";

//Modal

const buttonModalScheduling = document.getElementById("botao");
buttonModalScheduling.addEventListener("click", () =>
  iniciaModal("modal-agenda")
);

//Menu

let menuSandwich = document.querySelector(".menu");
menuSandwich.addEventListener("click", () => Menu(menuSandwich));

// Carousel

carousel();

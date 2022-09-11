import getDate from "./date.js";

function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    modal.classList.add("mostrar");
    let paragrafo = document.getElementById("show_date");
    paragrafo.textContent = getDate();
    modal.addEventListener("click", (e) => {
      if (
        e.target.id == modalID ||
        e.target.className == "fechar md hydrated"
      ) {
        modal.classList.remove("mostrar");
      }
      console.log(e.target.className);
    });
  }
}

export default iniciaModal;

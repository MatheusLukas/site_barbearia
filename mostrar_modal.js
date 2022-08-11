function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    modal.classList.add("mostrar");
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
const botao = document.getElementById("botao");
botao.addEventListener("click", () => iniciaModal("modal-agenda"));

const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");
const poema = document.getElementById("poema");
const musica = document.getElementById("musica");

let simSize = 18;

btnNao.addEventListener("mouseover", () => {
  simSize += 5;
  btnSim.style.fontSize = simSize + "px";

  if (simSize >= 80) {
    btnNao.style.display = "none";
  }
});

btnSim.addEventListener("click", () => {
  poema.classList.remove("hidden");
  musica.play();
});

const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");
const poema = document.getElementById("poema");
const musica = document.getElementById("musica");

let simSize = 18;
let naoClicks = 0;

btnNao.addEventListener("click", () => {
  simSize += 10;
  btnSim.style.fontSize = simSize + "px";
  naoClicks++;

  if (naoClicks >= 3) {
    btnNao.style.display = "none";
  }
});

btnSim.addEventListener("click", () => {
  poema.classList.remove("hidden");
  musica.play();

  const frase = document.createElement("p");
  frase.textContent = "Eu já sabia que você ia aceitar. Eu te amo e quero passar o resto dos meus dias com você.";
  frase.style.marginTop = "30px";
  frase.style.fontSize = "22px";
  frase.style.fontWeight = "bold";
  poema.appendChild(frase);
});

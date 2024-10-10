const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".abas-conteudo");

for(let i = 0; i < botoes.length; i ++){
     botoes[i].onclick = function(){

        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
          botoes[i].classlist.add("ativo");
          texto[i].classlist.add("ativo");
          
     }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-09-15T00:00:00");
const tempoObjetivo2 = new Date("2024-12-09T00:00:00");
const tempoObjetivo3 = new Date("2024-11-31T00:00:00");
const tempoObjetivo4 = new Date("2024-09-11T00:00:00");

const tempo = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4,];


function calcule(tempoObjetivo) {
      let tempoAll = new Date();
      let tempoFinal = tempoObjetivo - tempoAtual;
      let segundos = Math.floor(tempoFinal / 1000);
      let minutos = Math.floor(

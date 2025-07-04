const botoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll(".abas-conteudo");
const contador = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2025-07-09");
let tempoAtual = new Date ();
console.log(botoes)


for(let i=0; i< botoes.length; i++){
     botoes[i].onclick = function(){


        for (let j=0; j<botoes.length; j++){
         botoes[j].remove.add("ativo");
         textos[j].remove.add("ativo");
        }


        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
     } 

}

  contadores[0]. textcontent = "Contagem Regressiva";

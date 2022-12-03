//Codigo do Carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [3, 3.5, 4.2, 6, 3.3, 4.3];
let comprimentoCarro = 50;
let alturacarro = 40;

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
  }
  
  function movimentaCarro(){
    for (let i = 0; i < velocidadeCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < xCarros.length; i++){
        if (passouTodaATela(xCarros[i])){
            xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
   return xCarro < - 50;
}
  
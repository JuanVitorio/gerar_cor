var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var b4 = document.getElementById('b4')
var b5 = document.getElementById('b5')
var b6 = document.getElementById('b6')

var fundo = document.getElementById('mostra-codigo')

var mudaPonto = document.getElementById('pontos')
var pontos = null

var mudaTexto = document.getElementById('codigo')

var botoes = [b1, b2, b3, b4, b5, b6];

var certa = null

function geraCor(){

  var red = Math.floor(Math.random()*256)
  var green = Math.floor(Math.random()*256)
  var blue = Math.floor(Math.random()*256)

  fundo.style.backgroundColor = 'rgb('+red+','+green+','+blue+')'

  let r = Math.floor(Math.random()*256)
  let g = Math.floor(Math.random()*256)
  let b = Math.floor(Math.random()*256)

  console.log(r)
  console.log(g)
  console.log(b)

  mudaTexto.innerHTML = 'RGB('+r+','+g+','+b+')' 

  certa = Math.floor(Math.random()*6)

  console.log(certa)

  botoes[certa].style.backgroundColor = 'RGB('+r+',' +g+',' +b+')';

  for(var i = 0; i < botoes.length; i++){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
  
    if(i != certa)
      botoes[i].style.backgroundColor = 'RGB('+r+','+g+','+b+')'
  
  }
}

function corCerta(Clique){
  if(Clique == certa){
    alert('Você acertou')
    pontos++
    console.log(pontos)
    mudaPonto.innerHTML = pontos
    geraCor()
  }else{
    alert('Você errou')
    geraCor()
  }
}
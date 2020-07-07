//Crie um programa para calcular a aposentadoria de uma pessoa.

const nome='Laura'
const sexo= 'F'
const idade= 48
const contribuicao = 23
const somaIdaCont=idade+contribuicao

const mulherPodeAposentar= sexo=='F' && contribuicao===30 && somaIdaCont===85
const homemPodeAposentar= sexo=='M' && contribuicao==35 && somaIdaCont===95

if (mulherPodeAposentar||homemPodeAposentar){
    console.log(`${nome} pode se aposentar`)
  } else {
    console.log(`${nome} nao pode se aposentar ainda`)
  }















// Crie um programa para calcular o IMC e
// nível de obesidade de uma pessoa.

const nome="Sarah"
const peso=87
const altura= 1.77

const imc=peso/(altura*altura)

if (peso>=30){
  console.log(`${nome} you are overweight`)
} else {
  console.log(`${nome} you are not overweight`)
}

//ou

// const nome="Sarah"
// const peso=87
// const altura= 1.77

// const imc=peso/(altura*altura)
// let message = " "

// if (peso>=30){
//   message= `${nome} you are overweight`
// } else {
//   message=`${nome} you are not overweight`
// }
// console.log(message)
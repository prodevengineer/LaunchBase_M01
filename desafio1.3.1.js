// Crie um programa que armazena um array de 
// usuários (objetos), cada usuário tem um nome 
// e suas tecnologias (novo array), por exemplo:

const usuarios=[
  {nome:"Carlos", tecnologias:["HTML","CSS"]},
  {nome:"Jasmine", tecnologias:["Javascript","CSS"]},
  {nome:"Tuane", tecnologias:["HTML","Node.js"]},
]

for (let usuario of usuarios){
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}.`)
}
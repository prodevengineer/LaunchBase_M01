// Baseado no desafio anterior, utilize a mesma lista de usuários construída.
// Crie uma função que recebe os dados de um objeto de usuário e retorna
// SE o usuário trabalha com CSS ou não. Essa função deve retornar 
// um boolean true/false.

const usuarios=[
  {nome:"Carlos", tecnologias:["HTML","CSS"]},
  {nome:"Jasmine", tecnologias:["Javascript","CSS"]},
  {nome:"Tuane", tecnologias:["HTML","Node.js"]},
]

function checaSeUsuarioUsaCss(colaborador){
  // Percorra o array de tecnologias do usuário até encontrar 
  for (let tecnologia of colaborador.tecnologias){
    const tecnologiaCss= tecnologia === 'CSS'
    if (tecnologiaCss){
      return true
    }
  }
  return false
  //se ele trabalha com CSS
  // SE encontrar, retorne true da função, 
  //caso contrário retorne false
}

// Percorra o array de usuários 
// e, para cada um, verifique se o mesmo trabalha com CSS 
// utilizando a função construída acima, 
// se SIM, imprima em tela as informações do usuário:

for (let user of usuarios){
  const usuarioUsaCss= checaSeUsuarioUsaCss(user)
  if (usuarioUsaCss){
    console.log(`O usuario ${user.nome} trabalha com CSS`)
  }
}
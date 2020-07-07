//Crie um programa que armazena dados da empresa Rocketseat
// dentro de um objeto chamado empresa. 
//Os dados a serem armazenados são:
// Nome: Rocketseat
// Cor: Roxo
// Foco: Programação
// Endereço:
// Rua: Rua Guilherme Gembala
// Número: 260

const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat",
    cor:"roxo",
    foco:"programacao",
    endereco: {
      rua: "Rua Guilherme Gembala",
      numero: 260
    }
  }
}
console.log(`A empresa ${usuario.empresa.nome} esta localizada na rua ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)
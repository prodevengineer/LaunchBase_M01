// Crie um programa com um objeto para armazenar dados de 
// um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, 
// por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e 
// especialidade, use as tecnologias abaixo:
// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }

const objeto={
  usuario:{
    nome:"Carlos", 
    idade:32
  },
  propriedade:[
    {nome:"C++", especialidade:"Desktop"},
    {nome:"Python", especialidade:"Data Science"},
    {nome:"Javascript", especialidade:"Web/Mobile"}
  ]
}
console.log(`O usuario ${objeto.usuario.nome} tem ${objeto.usuario.idade} anos e usa a tecnologia ${objeto.propriedade[0].nome} com especialidade em ${objeto.propriedade[0].especialidade}.`)
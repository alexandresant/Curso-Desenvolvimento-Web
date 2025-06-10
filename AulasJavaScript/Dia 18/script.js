const newArray = [
    {nome: "Alexandre", idade: 30, categoria: "Adulto"},
    {nome: "Evelin", idade: 30, categoria: "Adulto"},
    {nome: "Nina", idade: 11, categoria: "Criança"}
]

const nome = prompt("Digite seu nome: ")
const idade = prompt("Digite a sua idade: ")

function analisarIdade(nome, idade){
    const idadeInt= parseInt(idade)
    
    objeto = new Object()
    objeto.nome = nome
    objeto.idade = idadeInt

    objeto.categoria = idadeInt < 12 ? "Criança" : (idadeInt < 18 ? "Adolescente" : "Adulto")
    
    return objeto
}

let newObjeto = new Object()
newObjeto = analisarIdade(nome, idade)

newArray.push(newObjeto)

console.log(newArray);

newArray.forEach(e =>{
    alert(`Nome: ${e.nome}, Idade: ${e.idade}, Categoria: ${e.categoria}`)
})



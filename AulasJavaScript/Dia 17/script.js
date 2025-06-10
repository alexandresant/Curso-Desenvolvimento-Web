let nome = prompt("Digite o seu nome: ")
let idade = prompt("Digite a sua idade: ")

function analisarIdade(nome, idade){
    let idadeInt = parseInt(idade)

    const meuObjeto = new Object();
    meuObjeto.nome = nome;
    meuObjeto.idade= idadeInt;

    meuObjeto.categoria = idadeInt < 12 ? "Criança" : (idadeInt < 18 ? "Adolescente" : "Adulto");
    
    return meuObjeto
}

let resultado = analisarIdade(nome, idade)

let arrayTest = [
    { nome: 'Ana', idade: 10, categoria: 'Criança' },
    { nome: 'Bruno', idade: 15, categoria: 'Adolescente' },
    { nome: 'Carlos', idade: 20, categoria: 'Adulto' }
]

arrayTest.push(resultado)

console.log(arrayTest);
alert("Olá " + resultado.nome + " você é " + resultado.categoria)



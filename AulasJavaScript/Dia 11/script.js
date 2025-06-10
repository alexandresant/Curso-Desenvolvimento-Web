var estudante = window.confirm("Você estuda programação?")
var idade = window.prompt("Qual é sua idade")
var nome = window.prompt("Qual é seu nome")

let idadeInt = parseInt(idade)

if(idadeInt >= 18){
    if(estudante == true){
        window.alert("Meu nome é " + nome + " Sou maior de idade e estudo programação")
    }
    else{
        window.alert("Meu nome é " + nome + " Sou maior de idade e  não estudo programação")
    }
}
else{
    if(estudante == true){
        window.alert("Meu nome é " + nome + " Sou menor de idade e estudo programação")
    }
    else{
        window.alert("Meu nome é " + nome + " Sou menor de idade e não estudo programação")
    }
}
console.log("Nome:", nome);
console.log("Idade:", idadeInt);
console.log("Estuda programação:", estudante);
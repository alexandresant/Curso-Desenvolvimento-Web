nome = window.prompt("Digite o sua nome: ")
idade = window.prompt("Digite a sua idade: ")
linguagem = window.prompt("Qual a sua linguagem de programação favorita? ")

idadeInt = parseInt(idade)

if (idadeInt < 12){
    window.alert("VocÊ é uma criança programadora");
}
else if (idade <= 18){
    window.alert("Vocẽ [e um jovem programador");
}
else{
    window.alert("Você é um programador adulto");
}

switch (linguagem.toLowerCase()){
    case "javascript":
        alert("Você ama o JS")
        break;
    case "python":
        alert("Você ama o Python")
        break;
    default:
        alert(linguagem + " Hum, interessante, é uma boa escolha")
        break;
}
let podeVotar = idade >= 16 ? "Você pode votar" : "Voce ainda não pode votar, mas quando puder não perca a chance"
alert(podeVotar)
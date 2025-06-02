let nome = prompt("Digite seu nome")

function cumprimentar(nome){
    return "Olá, " + nome
}

if (nome && nome.trim() !==""){
    let mensagem = cumprimentar(nome)
    alert(mensagem)
    console.log(mensagem);
}
else{
    alert("Você não digitou um nome válido!")
}

let linguagens = ["JavaScript", "C", "Python"]
let linguagem = prompt("Digite o nome de uma linguagem de programação!")

linguagens.push(linguagem)
alert(linguagens.join())

for (let i = 0; i < linguagens.length; i ++ ){
    console.log(linguagens[i])
}
const botoes = document.querySelectorAll('#velha button')

botoes.forEach(botao => {
  botao.addEventListener('click', () =>{
    if (botao.innerText.trim() ===""){
        botao.innerText = "X"
        console.log("Jogada feita")
    }
    else{
        console.log("Esse botão já esta marcado")
    }
  })
})
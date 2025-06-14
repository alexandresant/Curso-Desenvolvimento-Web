formulario = document.getElementById('dados')

formulario.addEventListener('submit', function(event) {
    event.preventDefault()

    const nomeInput = document.getElementById('nome')
    const idadeInput = document.getElementById('idade') 
    const validarNome = document.getElementById('validarNome')
    const validarIdade = document.getElementById('validarIdade')
    const dadosCadastrados = document.getElementById('dadosCadastrados')
    const mensagemFinal = document.getElementById('mensagemFinal')

    let nomeValido = false
    let idadeValida = false

    const nome = nomeInput.value.trim()
    const idade = parseInt(idadeInput.value)
   

    if (nome === ""){
        validarNome.textContent = "⚠️ O nome deve ser preenchido corretamente"
        validarNome.style.color = "red"
    }
    else{
        validarNome.textContent = "✅ Nome preenchido corretamente"
        validarNome.style.color = "green"
        nomeValido = true
    }

    if (isNaN(idade)|| idade <= 0){
        validarIdade.textContent = "⚠️ A idade deve ser um número maior que 0"
        validarIdade.style.color = "red"
    }
    else{
        validarIdade.textContent =  "✅ Idade preenchida corretamente"
        validarIdade.style.color = "green"
        idadeValida = true
    }
    
    if( nomeValido && idadeValida){
        mensagemFinal.textContent = "✅ Cadastro realizado com sucesso!"
        mensagemFinal.style.color = "green"
        dadosCadastrados.textContent = `Nome: ${nome}, Idade: ${idade}`
        dadosCadastrados.style.color = "green"
    }

})
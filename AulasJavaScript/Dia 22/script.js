const formAlunos = document.getElementById('formAlunos')
let alunos = []
const alunosSalvos = localStorage.getItem('alunos')
if (alunosSalvos){
    alunos = JSON.parse(alunosSalvos)
}

formAlunos.addEventListener('submit', function(event){
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const nota1Input = document.getElementById('nota1')
    const nota2Input = document.getElementById('nota2')

    const nota1 = parseFloat(nota1Input.value)
    const nota2 = parseFloat(nota2Input.value)
    let situacao = ""
    const media = ((nota1 + nota2) / 2).toFixed(2)

    if (media < 70){
        situacao = "reprovado"
    }
    else{
        situacao = "aprovado"
    }

    const aluno = {
        nome,
        nota1,
        nota2,
        media,
        situacao,
    }

    alunos.push(aluno)
    localStorage.setItem('alunos', JSON.stringify(alunos))
    event.target.reset()

})

const filtrar = document.getElementById('mostrarAlunos')
let alunoFiltrado = []

filtrar.addEventListener('click', function(event){
    const filtro = document.getElementById('filtro').value
    const mostrarAlunos = document.getElementById('listaAlunos') 
    mostrarAlunos.innerHTML = ""

    if(filtro === "todos"){
        alunos.forEach(element => {
        const statusColor = element.situacao === "aprovado" ? "#4CAF50" : "#F44336"
        mostrarAlunos.innerHTML += `
        <li style="border-left: 6px solid ${statusColor}; padding-left: 10px; margin-bottom: 16px;">
            <strong>${element.nome}</strong><br>
            Nota 1: ${element.nota1}<br>
            Nota 2: ${element.nota2}<br>
            Média: ${element.media} <span style="color:${statusColor}; font-weight:bold">(${element.situacao})</span>
        </li>
    `
        })
    }
    else{
        alunoFiltrado = alunos.filter(aluno => aluno.situacao === filtro)
        .sort((a, b) => b.media- a.media)

        alunoFiltrado.forEach(element => {
        const statusColor = element.situacao === "aprovado" ? "#4CAF50" : "#F44336"
        mostrarAlunos.innerHTML += `
        <li style="border-left: 6px solid ${statusColor}; padding-left: 10px; margin-bottom: 16px;">
            <strong>${element.nome}</strong><br>
            Nota 1: ${element.nota1}<br>
            Nota 2: ${element.nota2}<br>
            Média: ${element.media} <span style="color:${statusColor}; font-weight:bold">(${element.situacao})</span>
        </li>
    `
    })
    }
   

    
})


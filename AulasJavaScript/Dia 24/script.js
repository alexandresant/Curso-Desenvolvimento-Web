const form = document.getElementById('form-tarefa')
const inputTarefa = document.getElementById('tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const erro = document.getElementById('erro')

let tarefas = []

// Carregar tarefas do localStorage
if (localStorage.getItem('tarefas')) {
  tarefas = JSON.parse(localStorage.getItem('tarefas'))
  renderizarTarefas()
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const valor = inputTarefa.value.trim()

  if (valor === '') {
    erro.textContent = 'Por favor, digite uma tarefa.'
    return
  }

  erro.textContent = ''

  tarefas.push(valor)
  localStorage.setItem('tarefas', JSON.stringify(tarefas))
  renderizarTarefas()
  inputTarefa.value = ''
})

function renderizarTarefas() {
  listaTarefas.innerHTML = ''

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li')
    li.textContent = tarefa

    const btn = document.createElement('button')
    btn.textContent = 'Excluir'
    btn.onclick = () => {
      tarefas.splice(index, 1)
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
      renderizarTarefas()
    }

    li.appendChild(btn)
    listaTarefas.appendChild(li)
  })
}

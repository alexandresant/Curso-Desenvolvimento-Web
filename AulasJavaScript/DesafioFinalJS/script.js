const formCadastro = document.getElementById('form-cadastro-produtos')
let produtos = []
let editando = false
let indexEditando = null

const produtosSalvos = localStorage.getItem('produtos')

if (produtosSalvos){
    produtos = JSON.parse(produtosSalvos)
}
renderizarProdutos()

function excluirProduto(id){
    const indiceOriginal =  produtos.findIndex(p => p.idProduto === id)
    if (indiceOriginal !== -1){
        produtos.splice(indiceOriginal, 1)
        localStorage.setItem('produtos', JSON.stringify(produtos))
        renderizarProdutos()
    }
}

function editarProduto(id,nome, preco, quantidade, fornecedor){
    document.getElementById('descricao-produto').value = nome
    document.getElementById('preco').value = preco
    document.getElementById('quantidade').value = quantidade
    document.getElementById('fornecedor').value = fornecedor

    editando = true
    indexEditando =  produtos.findIndex(p => p.idProduto === id)

    document.getElementById('btn-cadastrar').textContent = "Atualizar"
}

formCadastro.addEventListener('submit', function(event){
    event.preventDefault()

    const erroProduto = document.getElementById('erro-produto')

    const nomeProduto = document.getElementById('descricao-produto').value
    if (nomeProduto === ""){
        erroProduto.textContent = "Por favor digite um produto."
        return
    }
    else{
        erroProduto.textContent = ""
    }

    const idProduto = editando ? produtos[indexEditando]. idProduto : Date.now()

    const precoInput = document.getElementById('preco')
    const qtdProdutoInput = document.getElementById('quantidade')
    const fornecedor = document.getElementById('fornecedor').value

    const qtdProduto = parseInt(qtdProdutoInput.value)
    const precoProduto = parseFloat(precoInput.value).toFixed(2)

    const produto = {
        idProduto,
        nomeProduto,
        precoProduto,
        qtdProduto,
        fornecedor,
    }

    if (editando && indexEditando !== null){
        produtos[indexEditando] = produto
        editando = false
        indexEditando = null
        document.getElementById('btn-cadastrar').textContent = "Cadastrar"
    }
    else{
        produtos.push(produto)
    }

    localStorage.setItem('produtos', JSON.stringify(produtos))
    event.target.reset()
    renderizarProdutos()
})

function renderizarProdutos(){
    const linhaProduto = document.getElementById('linha-produtos')

    linhaProduto.innerHTML = ""

    produtos.forEach(produto => {
        const tr = document.createElement('tr')

        const tdId = document.createElement('td')
        tdId.textContent = produto.idProduto

        const tdNome = document.createElement('td')
        tdNome.textContent = produto.nomeProduto

        const tdPreco = document.createElement('td')
        tdPreco.textContent =  produto.precoProduto
        
        const tdQtd = document.createElement('td')
        tdQtd.textContent = produto.qtdProduto

        const tdFornecedor = document.createElement('td')
        tdFornecedor.textContent = produto.fornecedor

        const tdBtnExcluir = document.createElement('td')

        const btnExcluir = document.createElement('button')
        btnExcluir.textContent = "Excluir"

        const btnEditar = document.createElement('button')
        btnEditar.textContent = "Editar"

        const tdBtnEditar = document.createElement('td')


        btnExcluir.onclick = () =>{
            excluirProduto(produto.idProduto)
        }

        btnEditar.onclick = () =>{
            editarProduto(produto.idProduto, produto.nomeProduto, produto.precoProduto, produto.qtdProduto, produto.fornecedor)
        }

        tr.appendChild(tdId)
        tr.appendChild(tdNome)
        tr.appendChild(tdPreco)
        tr.appendChild(tdQtd)
        tr.appendChild(tdFornecedor)
        tdBtnExcluir.appendChild(btnEditar)
        tdBtnExcluir.appendChild(btnExcluir)
        tr.appendChild(tdBtnExcluir)
        
        linhaProduto.appendChild(tr)
    })
}

const btnBuscar = document.getElementById('filtrar')

btnBuscar.addEventListener('click', function(event){
    event.preventDefault()

    const filtro = document.getElementById('filtro').value
    
    const linhaProduto = document.getElementById('linha-produtos')

    let produtosFiltrados = []

    linhaProduto.innerHTML = ""

    produtosFiltrados = produtos.filter(produto => 
        produto.nomeProduto.toLowerCase() == filtro.toLowerCase()
    )

    if (produtosFiltrados.length === 0){
        linhaProduto.innerHTML = `<tr><td colspan="5">Nenhum produto encontrado</td></tr>`
    }
    else{
        produtosFiltrados.forEach((produto, index) => {
            const tr = document.createElement('tr')

        const tdNome = document.createElement('td')
        tdNome.textContent = produto.nomeProduto

        const tdPreco = document.createElement('td')
        tdPreco.textContent =  produto.precoProduto
        
        const tdQtd = document.createElement('td')
        tdQtd.textContent = produto.qtdProduto

        const tdFornecedor = document.createElement('td')
        tdFornecedor.textContent = produto.fornecedor

        const tdBtnExcluir = document.createElement('td')

        const btnExcluir = document.createElement('button')
        btnExcluir.textContent = "Excluir"

        const btnEditar = document.createElement('button')
        btnEditar.textContent = "Editar"

        const tdBtnEditar = document.createElement('td')


        btnExcluir.onclick = () =>{
            excluirProduto(produto.idProduto)
        }

        btnEditar.onclick = () =>{
            editarProduto(produto.idProduto, produto.nomeProduto, produto.precoProduto, produto.qtdProduto, produto.fornecedor)
        }

        tr.appendChild(tdNome)
        tr.appendChild(tdPreco)
        tr.appendChild(tdQtd)
        tr.appendChild(tdFornecedor)
        tdBtnExcluir.appendChild(btnEditar)
        tdBtnExcluir.appendChild(btnExcluir)
        tr.appendChild(tdBtnExcluir)
        
        linhaProduto.appendChild(tr)
        })
    }

    
})
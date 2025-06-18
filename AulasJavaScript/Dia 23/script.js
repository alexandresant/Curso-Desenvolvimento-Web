const cadastroProduto = document.getElementById('form-cadastro-produto')
let produtos = []

const produtosSalvos = localStorage.getItem('produtos')

if (produtosSalvos){
    produtos = JSON.parse(produtosSalvos)
    mostrarProdutos()
}


cadastroProduto.addEventListener('submit', function(event){
    event.preventDefault()

    const nomeProduto = document.getElementById('nome-produto').value
    const precoProdutoInput = document.getElementById('preco')
    const qtdProdutoInput = document.getElementById('quantidade')
    const fornecedor = document.getElementById('fornecedor').value

    const precoProduto = parseFloat(precoProdutoInput.value)
    const qtdProduto = parseInt(qtdProdutoInput.value)

    let produto = {
        nomeProduto,
        precoProduto,
        qtdProduto,
        fornecedor,
    }

    produtos.push(produto)
    console.log(produtos)
    localStorage.setItem('produtos', JSON.stringify(produtos))
    mostrarProdutos()
    event.target.reset()
})

const mostrarProdutosCadastrados = document.getElementById('cadastrar')

function excluirProduto(index){
    produtos.splice(index, 1) //remove o item na posição correta
    localStorage.setItem('produtos', JSON.stringify(produtos))//atualiza o rmazenamento
    mostrarProdutos()//Renderiza a tabela
}

function mostrarProdutos(){
    const linhaProdutos = document.getElementById('linha-produtos')
    linhaProdutos.innerHTML = ""
    
    produtos.forEach((element, index) => {
      linhaProdutos.innerHTML += `
        <tr>
            <td>${element.nomeProduto}</td>
            <td>${element.qtdProduto}</td>
            <td>${element.precoProduto}</td>
            <td>${element.fornecedor}</td>
            <td><button onclick="excluirProduto(${index})">Excluir</button></td>  
        </tr>` 
    })
    
}

const btnFiltrar = document.getElementById('filtrar')

btnFiltrar.addEventListener('click', function(event){
    event.preventDefault()

    const filtro = document.getElementById('filtro').value
    const linhaProdutos = document.getElementById('linha-produtos')

    linhaProdutos.innerHTML = ""

    let produtosFiltrado = []

    produtosFiltrado = produtos.filter(produto => 
        produto.nomeProduto.toLowerCase() === filtro.toLowerCase()
    )

        if (produtosFiltrado.length === 0){
             linhaProdutos.innerHTML = `<tr><td colspan="5">Nenhum produto encontrado</td></tr>`
        }
        else{
            produtosFiltrado.forEach((element, indexOriginal) => {
                linhaProdutos.innerHTML += `
                    <tr>
                        <td>${element.nomeProduto}</td>
                        <td>${element.qtdProduto}</td>
                        <td>${element.precoProduto}</td>
                        <td>${element.fornecedor}</td>
                        <td><button onclick="excluirProduto(${indexOriginal})">Excluir</button></td>  
                    </tr>` 
            })
        }

})






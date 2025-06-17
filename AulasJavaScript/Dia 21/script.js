let produtos = []
let formMostrarProdutos = document.getElementById('formulario')
let formProdutos = document.getElementById('produtos')

formProdutos.addEventListener('submit', function(event){
    event.preventDefault()

    const nomeProduto = document.getElementById('produto').value
    const fornecedor = document.getElementById('fornecedor').value
    const quantidadeInput = document.getElementById('quantidade')
    const precoInput = document.getElementById('preco')

    quantidade = parseInt(quantidadeInput.value)
    preco = parseFloat(precoInput.value)

    const produto = {
        nomeProduto,
        fornecedor,
        quantidade,
        preco,
    }

    produtos.push(produto)
    event.target.reset()

})

formMostrarProdutos.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(produtos)
    
    const filtrar = document.getElementById('filtrar').value
    const mostrarProdutos = document.getElementById('mostrarProdutos')
    let produtoFiltrado = []
    mostrarProdutos.innerHTML = ""

    produtoFiltrado = produtos.filter(produto => produto.fornecedor === filtrar)

    produtoFiltrado.map(produto =>{
        mostrarProdutos.innerHTML += (`<li>Produto: ${produto.nomeProduto} Fornecedor: ${produto.fornecedor} Quantidadde: ${produto.quantidade} Preço: ${produto.preco}</li> <br>`)
    })

    //produtos.forEach(element => {   
        //mostrarProdutos.innerHTML += (`<li>Produto: ${element.nomeProduto} Fornecedor: ${element.fornecedor} Quantidadde: ${element.quantidade} Preço: ${element.preco}</li> <br>`)
    //});
})



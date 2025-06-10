let produto = ""
let preco = ""

let produtos = []

for (x=0; x<3; x++){
    produto = prompt("Digite o nome do produto")
    preco = parseFloat(prompt("Digite o preço do produto"))

    item = {
        produto: produto,
        preco: preco
    }
    produtos.push(item)
}

produtos.forEach(elemento =>{
    alert(`Produto: ${elemento.produto}, Preço: ${elemento.preco.toFixed(2)}`)
})
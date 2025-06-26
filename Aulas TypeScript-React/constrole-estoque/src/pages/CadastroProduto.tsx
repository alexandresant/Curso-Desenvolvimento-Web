import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { 
    Table, 
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export function CadastroProduto(){

    interface Produto {
        id: number
        nome: string
        quantidade: number
        preco: number
        fornecedor: string
    }

    const [editando, setEditando] = useState(false)
    const [indexEditando, setIndexEditando] = useState<number |null>(null)
    
    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')
    const [fornecedor, setFornecedor] = useState('')
    const [mostrar, setMostrar] = useState(false)
    const [mostrarErro, setMostrarErro] = useState(false)

    let [produtos, setProdutos] = useState<Produto[]>(() =>{
        const produtosSalvos = localStorage.getItem('produtos')
        return produtosSalvos ? JSON.parse(produtosSalvos) : []
    })

    function editarProdutos(id: number, nome: string, quantidade: number, preco: number, fornecedor: string){
        const qtdString = quantidade.toString()
        const precoString = preco.toString()
        setNome(nome)
        setQuantidade(qtdString)
        setPreco(precoString)
        setFornecedor(fornecedor)

        setEditando(true)
        setIndexEditando(produtos.findIndex(p => p.id === id))
    }

    

    function verificarCampos(nome:string, quantidade: number, preco: number, fornecedor: string){
        const erros = {
            nome: nome.length <= 0 ? "Nome é obrigatório" : "",
            quantidade: quantidade <= 0 ? "Quantidade deve ser um valor inteiro, maior que 0" : "",
            preco: preco <= 0 ? "Preço deve ser um valor maior que 0" : "",
            fornecedor: fornecedor.length <= 0 ? "Forncedor é obrigatório" : "" 
        }
        return erros
    }
    
    function adicionarProdutos(nome: string, quantidade: number, preco: number, fornecedor: string){

        let produto: Produto 

        if(editando && indexEditando !== null){
            const idOriginal = produtos[indexEditando].id

            produto = {
                id: idOriginal,
                nome,
                quantidade,
                preco,
                fornecedor,
            }

            setProdutos(prev => {
                const novosProdutos = [...prev]
                novosProdutos[indexEditando] = produto
                return novosProdutos
            })

            setEditando(false)
            setIndexEditando(null)
        }
        else{
            produto = {
                id: Date.now(),
                nome,
                quantidade,
                preco,
                fornecedor,
            }
            setProdutos(prev => [...prev, produto])
        }
        
        setNome('')
        setPreco('')
        setQuantidade('')
        setFornecedor('')
        setMostrarErro(false)
    }

    useEffect(() => {
        const produtosSalvos = localStorage.getItem('produtos')
        if (produtosSalvos) {
            setProdutos(JSON.parse(produtosSalvos))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('produtos', JSON.stringify(produtos))   
    }, [produtos])

    function hadleSubmit(event: React.FormEvent){
        event.preventDefault()
        setMostrar(true)
        setMostrarErro(true)
        const precoNumber = Number(preco)
        const quantidadeNumber = Number(quantidade)

        const erro = verificarCampos(nome, quantidadeNumber, precoNumber, fornecedor)

        if (!erro.nome && !erro.quantidade && !erro.preco && !erro.fornecedor){
            adicionarProdutos(nome, quantidadeNumber,precoNumber, fornecedor)
        }
        
    }
    
    const precoNumber = Number(preco)
    const quantidadeNumber = Number(quantidade)
    const erro = verificarCampos(nome, quantidadeNumber, precoNumber, fornecedor)

    return(
        <div className="p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">Cadastro de Produtos</h2>

            <form onSubmit={hadleSubmit} className="max-w-lg mx-auto">
                <input 
                    type="text" 
                    placeholder="Produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                { mostrarErro && erro.nome &&
                <div className="h-4">
                    <p className="text-red-500 text-sm">{erro.nome}</p>
                </div>
                } 
                <input 
                    type="text" 
                    placeholder="Quantidade"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                { mostrarErro && erro.quantidade &&
                <div className="h-4">
                    <p className="text-red-500 text-sm">{erro.quantidade}</p>
                </div>
                } 

                <input 
                    type="text" 
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    className="border rounded p-2 w-full"
                />
                { mostrarErro && erro.preco &&
                <div className="h-4">
                    <p className="text-red-500 text-sm">{erro.preco}</p>
                </div>
                } 

                <input 
                    type="text"
                    placeholder="Fornecedor"
                    value={fornecedor}
                    onChange={(e) => setFornecedor(e.target.value)}
                    className="border rounded w-full p-2 "
                />
                { mostrarErro && erro.fornecedor &&
                <div className="h-4">
                    <p className="text-red-500 text-sm">{erro.fornecedor}</p>
                </div>    
                } 
                
                <Button
                    type="submit"
                    className="p-2 m-2"
                >
                    Cadastrar
                </Button>
            </form>
                {produtos.length > 0 && (  
                    <Table className="border w-5xl">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="border">Id</TableHead>
                                <TableHead className="border">Produtos</TableHead>
                                <TableHead className="border">Preço</TableHead>
                                <TableHead className="border">Quantidade</TableHead>
                                <TableHead className="border">Fornecedor</TableHead>
                                <TableHead className="border">Movimentações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="border">
                            {produtos.map((produto) =>(
                                <TableRow key={produto.id}>
                                    <TableCell className="border">{produto.id}</TableCell>
                                    <TableCell className="border">{produto.nome}</TableCell>
                                    <TableCell className="border">R${produto.preco}</TableCell>
                                    <TableCell className="border">{produto.quantidade} Und</TableCell>
                                    <TableCell className="border">{produto.fornecedor}</TableCell>
                                    <TableCell>
                                        <Button
                                            key={produto.id}
                                            onClick={()=>editarProdutos(produto.id,produto.nome, produto.quantidade, produto.preco, produto.fornecedor)}
                                        >
                                            Editar
                                        </Button>
                                    
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
        
        </div>
    )
}
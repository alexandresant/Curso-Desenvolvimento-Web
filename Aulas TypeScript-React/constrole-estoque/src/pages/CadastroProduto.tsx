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
    type Produto = {
        nome: string
        quantidade: number
        preco: number
        fornecedor: string
    }

    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')
    const [fornecedor, setFornecedor] = useState('')
    const [mostrar, setMostrar] = useState(false)

    const [produtos, setProdutos] = useState<Produto[]>([])

    const [mostrarErro, setMostrarErro] = useState(false)

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
        const produto: Produto = {
            nome,
            quantidade,
            preco,
            fornecedor,
        }
        setProdutos([...produtos, produto])
       
    }

     useEffect(()=>{
            console.log(produtos)
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
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Cadastro de Produtos</h2>

            <form onSubmit={hadleSubmit}>
                <input 
                    type="text" 
                    placeholder="Produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="border p-2 rounded min-w-m"
                />
                { mostrarErro && erro.nome &&
                    <p className="text-red-500 text-sm">{erro.nome}</p>
                } 
                <input 
                    type="number" 
                    placeholder="Quantidade"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                { mostrarErro && erro.quantidade &&
                    <p className="text-red-500 text-sm">{erro.quantidade}</p>
                } 

                <input 
                    type="number" 
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    className="border rounded p-2 w-full"
                />
                { mostrarErro && erro.preco &&
                    <p className="text-red-500 text-sm">{erro.preco}</p>
                } 

                <input 
                    type="text"
                    placeholder="Fornecedor"
                    value={fornecedor}
                    onChange={(e) => setFornecedor(e.target.value)}
                    className="border rounded w-full p-2 "
                />
                { mostrarErro && erro.fornecedor &&
                    <p className="text-red-500 text-sm">{erro.fornecedor}</p>
                } 
                
                <Button
                    type="submit"
                    onClick={() => {
                        setMostrar(true)
            
                    }}
                >
                    Cadastrar
                </Button>

                {mostrar && (  
                    <Table className="border">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="border">Produtos</TableHead>
                                <TableHead className="border">Preço</TableHead>
                                <TableHead className="border">Quantidade</TableHead>
                                <TableHead className="border">Fornecedor</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="border">
                            {produtos.map((produto) =>(
                                <TableRow key={produto.nome}>
                                    <TableCell className="border">{produto.nome}</TableCell>
                                    <TableCell className="border">{produto.preco}</TableCell>
                                    <TableCell className="border">{produto.quantidade}</TableCell>
                                    <TableCell className="border">{produto.fornecedor}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </form>
        
        </div>
    )
}
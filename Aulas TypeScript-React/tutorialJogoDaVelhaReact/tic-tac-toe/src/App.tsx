import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Square } from './Square'


export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [proximoX, setProximoX] = useState(true)
  
  const vencedor = calcularVencedor(squares)
  let status
  
  if (vencedor){
    status = "Vencedor: " + vencedor
  }
  else{
    status = "Próximo jogador: " + ( proximoX ? "X" : "0")
  }

  function reiniciarPartida(){
    const nextSquares = Array(9).fill(null)
    setSquares(nextSquares)
  }

  function calcularVencedor(squares: string[]){
    const linhas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < linhas.length; i++){
      const [a, b, c] = linhas[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    return null
  }
  function handleClick( i : number){
    if(squares[i] || calcularVencedor(squares)){
      return
    }
    const nextSquares = squares.slice()
    if (proximoX){
      nextSquares[i] = "x"
    }
    else{
      nextSquares[i] = "0"
    }
    
    setSquares(nextSquares)
    setProximoX(!proximoX)
    console.log(squares)
  }
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="status">{status}</div>
      <div className="card">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() =>handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() =>handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() =>handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() =>handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() =>handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() =>handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() =>handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() =>handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() =>handleClick(8)}/>
        </div>
      </div>
      <div>
        <button 
          className="reiniciar"
          onClick={() => reiniciarPartida()}
          >
          Reiniciar o Jogo
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


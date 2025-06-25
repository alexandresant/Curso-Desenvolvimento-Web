import './App.css'
import { useState } from 'react'

interface Props {
    value: string[] | null
    onSquareClick: () => void
}

export function Square({ value, onSquareClick}: Props){  
    return(
        <>
            <button onClick={onSquareClick}>
                { value }</button>
        </>
    )
}
let valor1 = prompt("Digite o valor 1: ")
let valor2 = prompt("Digite o valor 2: ")
let operador = prompt("Agora digite o operador: ")

let valor1Float = parseFloat(valor1)
let valor2Float = parseFloat(valor2)

function calculadora(valor1Float, valor2Float, operador){
    if (operador != "*" && operador != "/" && operador != "+" && operador != "-"){  
        alert("O operador digitado não é válido")
    }
    switch (operador){
        case "*":
            return valor1Float * valor2Float;
            
        case "/":
            return valor1Float / valor2Float
            
        case "+":
            return valor1Float + valor2Float;
            
        case "-":
            return valor1Float - valor2Float
    }
}

let total = calculadora(valor1Float, valor2Float, operador)
console.log("Total = " + total);
alert("Total = " + total)

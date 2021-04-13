/*
   valor01, valor02, resultado: real
   operacao: caracter

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   //escreva("A prosta desse programa e calcular dois valores baseado na operção de sua escolha.")
   escreva("Digite o primeiro valor: ")
   leia(valor01)
   escreva("Digite a operação: Ex: +, -, *, /")
   leia(operacao)
   escreva("Digite o segundo valor: ")
   leia(valor02)

   escolha operacao
      caso "+"
           resultado := valor01 + valor02
      caso "-"
           resultado := valor01 - valor02
      caso "*"
           resultado := valor01 * valor02
      caso "/"
           resultado := valor01 / valor02
      fimescolha
      
      escreva("Resultado do calculo é: ", resultado)
*/
function acaoBotao() {
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: Ex: + , - , * , /")
    valor02 = prompt("Digite o segundo valor: ")
    switch (operacao) {
        case "+":
            resultado = parseInt( valor01 ) + parseInt( valor02 )
            break;
        case "-":
            resultado = parseInt( valor01 ) - parseInt( valor02 )
            break;
        case "*":
            resultado = parseInt( valor01 ) * parseInt( valor02 )
            break;
        case "*":
            resultado = parseInt( valor01 ) * parseInt( valor02 )
            break;
            
    }
    document.getElementById("paragrafo").innerText = resultado
       
}
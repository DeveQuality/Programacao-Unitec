function Somar(){

    const Num1=document.getElementById('num1').value
    const Num2=document.getElementById('num2').value

    const lbl_res = document.getElementById('resultado')

    let NUM1=parseInt(Num1)
    let NUM2=parseInt(Num2)

    let somar = NUM1 + NUM2

    lbl_res.innerHTML=`a soma sera de :` + somar

}

function Subtrair(){

    const Num1=document.getElementById('num1').value
    const Num2=document.getElementById('num2').value

    let lbl_res = document.getElementById('resultado')

    let subtrair = Num1 - Num2

    lbl_res.innerHTML=` a subtracao dara :` + subtrair

}
  

function Divisao(){

    const Num1=document.getElementById('num1').value
    const Num2=document.getElementById('num2').value

    let lbl_res = document.getElementById('resultado')

    let dividir = Num1 / Num2

    lbl_res.innerHTML=` a subtracao dara :` + dividir

}

function Multiplicacao(){

    const Num1=document.getElementById('num1').value
    const Num2=document.getElementById('num2').value

    let lbl_res = document.getElementById('resultado')

    let multiplicar = Num1 * Num2

    lbl_res.innerHTML=` a subtracao dara :` + multiplicar

}
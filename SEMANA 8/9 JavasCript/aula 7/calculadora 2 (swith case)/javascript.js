function Calcular(operador){

    const Num1=document.getElementById('num1').value
    const Num2=document.getElementById('num2').value

    const lbl_res = document.getElementById('resultado')
    
    switch(operador){
        case '+':

            let NUM1=parseInt(Num1)         /* coverter a constante em number */
            let NUM2=parseInt(Num2)         /* coverter a constante em number */

            let adicionar=NUM1+NUM2
            lbl_res.innerHTML=` somando sera ` + adicionar;
            break;

        case '-':
            let subtrair=Num1-Num2
            lbl_res.innerHTML=` subtraindo fica ` + subtrair;
            break;

        case '/':
            let divisor=Num1/Num2
            lbl_res.innerHTML=` dividindo temos ` + divisor;
            break;

        case '*':
            let multiplicar=Num1*Num2
            lbl_res.innerHTML=` multiplicando temos ` + multiplicar;
            break;

        default:
            alert('ERRO!)')


    }
}

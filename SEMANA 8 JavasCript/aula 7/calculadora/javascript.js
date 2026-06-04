function calcular(operador){

    const Num1=document.getElementById('num1').value
    const Num2=document.getElementById('num2').value

    let lbl_res = document.getElementById('resultado')

    if(operador==='+'){
        let res=Num1+Num2
        lbl_res.innerHTML=`O resultado sera:` + res

    }else if(operador==='-'){
        let res=Num1-Num2
        lbl_res.innerHTML=`O resultado sera:` + res

    }else if(operador==='/'){
        let res=Num1/Num2
        lbl_res.innerHTML=`O resultado sera:` + res

    }else if(operador==='*'){
        let res=Num1*Num2
        lbl_res.innerHTML=`O resultado sera:` + res
    }


}
function calcular(operador){

    let num1=document.getElementById('txt_num1').value
    let num2=document.getElementById('txt_num2').value

    let lbl_res = document.getElementById('resultado')

    if(operador==='+'){
        let res=num1+num2
        lbl_res.innerHTML=`O resultado sera:` + res
    }else if(operador==='-'){
        let res=num1-num2
        lbl_res.innerHTML=`O resultado sera:` + res
    }else if(operador==='/'){
        let res=num1/num2
        lbl_res.innerHTML=`O resultado sera:` + res
    }else if(operador==='*'){
        let res=num1*num2
        lbl_res.innerHTML=`O resultado sera:` + res
    }


}
function calcular(operador){

    const Num1=document.getElementById('num1').value
    const Num2=document.getElementById('num2').value

    let lbl_res = document.getElementById('resultado')

    if(operador==='+'){

        let NUM1=parseInt(Num1)
        let NUM2=parseInt(Num2)

        let res=NUM1+NUM2
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
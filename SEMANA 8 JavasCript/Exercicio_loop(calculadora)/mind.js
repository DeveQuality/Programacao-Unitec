function somar(){
    const CAMPO_1 =document.getElementById('number_1').value
    const RES = document.getElementById('res')

    let convertido_1 = parseInt(CAMPO_1)

    for(b=1;b<=10;b++){

        let SOMAR = convertido_1 + b

        
        console.log(CAMPO_1 + '+' + b `=` + SOMAR)
    }
}


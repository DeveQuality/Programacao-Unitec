function somar(){
    const CAMPO_1 =document.getElementById('number_1').value
    const RES = document.getElementById('res')

    let convertido_1 = parseInt(CAMPO_1)


    for( const cont = 1 ; cont<=12 ; cont++) {

        const somar = convertido_1 + cont
 
        console.log( somar)
    }
}


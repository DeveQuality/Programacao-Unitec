function calcular(){
    const Peso = document.getElementById('peso').value
    const Altura = document.getElementById('altura').value

    const IMC  =   Peso/(Altura*Altura)

    alert(IMC)

}

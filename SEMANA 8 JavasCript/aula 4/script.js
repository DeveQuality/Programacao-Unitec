function calcular(){
    const Peso = document.getElementById('peso').value          /* usamos o value para dizer que essa constante sera um valor */
    const Altura = document.getElementById('altura').value      /* usamos o value para dizer que essa constante sera um valor */

    const IMC  =   Peso/(Altura*Altura)

    alert(IMC)

}

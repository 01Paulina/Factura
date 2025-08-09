function consumoMensual (){
    return 410
}

function tarifaKilovatio (){
    return 620;
}
/*función del cargo fijo*/
const cargoFijo = function() {
    return 3500; 
}
 
const porcentajeIva = function(){ 
    return 19;
}
 const calcularSubtotal = () => {
    return consumoMensual() * tarifaKilovatio();
 }
const calcularIva = () => { 
    return (calcularSubtotal () * porcentajeIva()) / 100;
 }
const calculoTotal = () => {
    return calcularSubtotal() + porcentajeIva() + cargoFijo();
 }


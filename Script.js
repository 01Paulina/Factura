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
 function imprimirFactura(){
    console.log("factura de energia");
    console.log("consumo mensual: " + consumoMensual() + "KWH");
    console.log("tarifa por KWH: $" + tarifaKilovatio());
    console.log("subtotal (consumo X tarifa) : $" + calcularSubtotal());
    console.log("IVA (" + porcentajeIva() + "%): $" + calcularIva());
    console.log("cargo fijo por servicio: $" + cargoFijo());
    console.log(" TOTAL A PAGAR: $" + calculoTotal());
 }

 imprimirFactura();



console.log("----------Cálculadora de troco----------");

const pago = 20;
const preco = 11.95;

if(pago > preco){
    console.log(`\nO troco entregue foi de R$${pago-preco}`);
}else if(pago === preco){
    console.log("\nNão há troco, pois o valor pago é igual ao preço da compra");
}else{
    console.log("\nValor pago é insuficiente para realização da compra");
}

console.log("\n----------FIM----------");
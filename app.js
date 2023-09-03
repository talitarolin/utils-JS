let meuDinheiro = 11;
const coxinha = 5;
const pastel = 7;

meuDinheiro = meuDinheiro - coxinha;

console.log("Valor do meu dinheiro:", meuDinheiro);

const tenhoDinheiroSuficiente = meuDinheiro >= pastel;

console.log("Tenho dinheiro suficiente?", tenhoDinheiroSuficiente);

if (tenhoDinheiroSuficiente) {
console.log("Posso comprar ambos!:)");
}
else {
console.log("Não posso comprar ambos! :(");
}
const meuDinheiroNoBolso = 50;
const meuLimiteNoCartao = 100;

const valorMercado = 80;

const tenhoValorSuficiente = meuDinheiroNoBolso >= valorMercado;
const tenhoLimiteSuficiente = meuLimiteNoCartao >= valorMercado;

const possoPagar = tenhoValorSuficiente || tenhoLimiteSuficiente;

console.log(possoPagar);
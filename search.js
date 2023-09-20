const opcao = 'Aapple iPhone 14';
const busca = "IPH";

const opcaoMinusculo = opcao.toLowerCase();
const buscaMinusculo = busca.toLowerCase();

const condition = opcaoMinusculo.includes(buscaMinusculo);


if (condition) {
  console.log('Achou! :D');
}

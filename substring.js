const palavra = 'talita';
const subPalavra = 'ta';

console.log(
  palavra.includes(subPalavra, 2),
  palavra.indexOf(subPalavra, 2),
  palavra.lastIndexOf(subPalavra),
  palavra.startsWith(subPalavra),
  palavra.endsWith(subPalavra),
);
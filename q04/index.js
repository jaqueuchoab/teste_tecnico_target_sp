// buscando modulo para utilizar promisses
const fs = require('fs').promises;

// caminho para o arquivo JSON
const filePath = './data/dados.json';
// array que guada os percentuais
const percentuais = [];

// função para leitura do arquivo
async function main() {
  try {
    // abrindo arquivo para leitura
    const data = await fs.readFile(filePath, 'utf8');

    const jsonData = JSON.parse(data);

    // soma total de faturamentos nos estados
    let somaFaturamentos = 0;
    jsonData.forEach((item) => {
      if (item.valor !== 0) {
        somaFaturamentos += item.valor;
      }
    });

    // calculando percentuais, encontrado na multiplicação do valor da vez por 100, dividido pelo total de faturamento
    jsonData.forEach((item) => {
      const percentual = (item.valor * 100) / somaFaturamentos;
      percentuais.push(percentual);
    });

    // exibindo percentuais
    jsonData.forEach((item, index) => {
      console.log(
        `${item.estado}: ${item.valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })} | percentual: ${percentuais[index].toFixed(2)}%`,
      );
    });
  } catch (err) {
    console.error('Erro:', err);
  }
}

// chamando função principal
main();

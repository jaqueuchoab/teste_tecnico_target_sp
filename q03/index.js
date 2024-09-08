// buscando modulo para utilizar promisses
const fs = require('fs').promises; 

// caminho para o arquivo JSON
const filePath = './data/dados.json';
const menorFaturamento = { dia: 0, valor: 0 };
const maiorFaturamento = { dia: 0, valor: 0 };

async function main() {
  try {
    // abrindo arquivo para leitura
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    // definindo inicialmente valores para facilitar nas comparações
    menorFaturamento.dia = jsonData[0].dia;
    menorFaturamento.valor = jsonData[0].valor;

    maiorFaturamento.dia = jsonData[0].dia;
    maiorFaturamento.valor = jsonData[0].valor;

    // definindo menor faturamento
    jsonData.forEach((item) => {
      // descartando sempre os dias em que o faturamento foi 0
      if (item.valor !== 0 && menorFaturamento.valor > item.valor) {
        menorFaturamento.dia = item.dia;
        menorFaturamento.valor = item.valor;
      }
    });

    // definindo maior faturamento
    jsonData.forEach((item) => {
      // descartando sempre os dias em que o faturamento foi 0
      if (item.valor !== 0 && maiorFaturamento.valor < item.valor) {
        maiorFaturamento.dia = item.dia;
        maiorFaturamento.valor = item.valor;
      }
    });

    let diasFaturados = 0;
    let somaFaturamentos = 0;
    jsonData.forEach((item) => {
      if (item.valor !== 0) {
        somaFaturamentos += item.valor;
        diasFaturados++;
      }
    });

    let media = somaFaturamentos/diasFaturados;
    let acimaMedia = 0;
    jsonData.forEach((item) => {
      if(item.valor > media) {
        acimaMedia++;
      }
    }) 

    console.log(`Dia com menor faturamento: ${menorFaturamento.dia} | Valor: ${menorFaturamento.valor}`);
    console.log(`Dia com menor faturamento: ${maiorFaturamento.dia} | Valor: ${maiorFaturamento.valor}`);
    console.log(`Dias acima da média: ${acimaMedia}`);

  } catch (err) {
    console.error('Erro:', err);
  }
}

// chamando a função principal
main();

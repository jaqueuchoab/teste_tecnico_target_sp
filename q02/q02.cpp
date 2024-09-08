/**
 * 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores
 * anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
 * informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
 * pertence ou não a sequência.
*/
#include <iostream>

using namespace std;

// verifica se o numero passado como parâmetro pertence ou não à sequência
bool pertenceFibonacci(int num) {
    // se o num for menor que 0 ele não pertence à sequência, pois não há números negativos em fibonacci
    if (num < 0) return false; 
    
    // números iniciais da sequência e casos base
    int a = 0, b = 1;
    // se o num for igual a um destes dois ele pertence à sequência
    if (num == a || num == b) return true;
    
    // loop para gerar números da sequência até que o número gerado seja maior ou igual ao número informado
    while (b < num) {
        int temp = b; // var auxiliar para guardar o número anterior ao que será calculado
        b += a; // calculando o próximo número na sequência, soma do atual com seu anterior
        a = temp; // guardando o anterior na var a para ser utilizado na próxima iteração
    }
    
    // retornará true caso o num seja igual a b, número gerado pelo while
    return b == num;
}

int main() {
    int numero;
    
    cout << "Informe um número: ";
    // entrada do número
    cin >> numero;
    
    if (pertenceFibonacci(numero)) {
        cout << numero << " pertence à sequência de Fibonacci." << endl;
    } else {
        cout << numero << " não pertence à sequência de Fibonacci." << endl;
    }
    
    return 0;
}
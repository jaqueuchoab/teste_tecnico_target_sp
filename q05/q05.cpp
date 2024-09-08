#include <iostream>
#include <string>

using namespace std;

string inverterString(const string& str) {
    // var que vai armazenar a string invertido
    string stringInverso;
    // guardando o tamanho da string
    int n = str.size();
    
    // decrementando o tamanho da string de forma que o acesso inicie da direita p esquerda, ou seja, do final para o inicio
    for (int i = n - 1; i >= 0; --i) {
        // concatenando de forma invertida os caracteres na var auxiliar
        stringInverso += str[i];
    }

    return stringInverso;
}

int main() {
    string original = "Target";
    string invertido = inverterString(original);

    cout << "Original: " << original << endl;
    cout << "Invertido: " << invertido << endl;

    return 0;
}

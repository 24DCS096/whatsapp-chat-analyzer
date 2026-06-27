#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream file("chat.txt");

    if (!file) {
        cout << "File not found!" << endl;
        return 0;
    }

    string line;
    int messages = 0, words = 0;

    while (getline(file, line)) {
        messages++;

        int count = 0;
        for (int i = 0; i < line.length(); i++) {
            if (line[i] == ' ')
                count++;
        }
        words += count + 1;
    }

    cout << "Total Messages: " << messages << endl;
    cout << "Total Words: " << words << endl;

    file.close();
    return 0;
}

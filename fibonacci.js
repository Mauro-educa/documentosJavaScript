

let fibonacci = num => {

    if (num == 0) {
        return 1;
    }
    if (num <= 1) {
        return num;
    }
    console.log(fibonacci(num - 1) + fibonacci(num - 2));
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));

let factorial = num => {

    if (num == 0) {
        return 1;
    }
    if (num <= 1) {
        return num;
    }

    console.log(factorial(num - 1) * num);
    return factorial(num - 1) * num;

}

console.log(factorial(10));

let palindromo = (frase, indice) => {

    if (indice < 0) {
        return 0;
    }
    if (indice >= 20) {
        return frase.length;
    }

    if (palindromo(frase, frase.length - indice) == palindromo(frase, indice + 1)) {

        return palindromo(frase, indice + 1);
    }
    else {
        return false;
    }


}


let palindromoNico = text => {
    if (text.length <= 1) return true
    if (text[0] == text[text.length - 1]) {
        return palindromo(text.slice(1, -1))
        return false;
    }
}


console.log(palindromo("ojorojo", 0));

console.log(palindromo("ojorojoa", 0));


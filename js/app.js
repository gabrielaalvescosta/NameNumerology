// global variables
const buttonCalculate = document.getElementById("button");
const result = document.getElementById("result");
const vogalsResult = document.getElementById("vogals");
const consResult = document.getElementById("cons");


// objeto conversao de letras para numeros
const lettersToNumbers = {
    a: 1, á: 1, ã: 1, â: 1, j: 1, s: 1,
    b: 2, k: 2, t: 2,
    c: 3, l: 3, u: 3, ú: 3,
    d: 4, m: 4, v: 4,
    e: 5, é: 5, ê: 5, n: 5, ñ: 5, w: 5,
    f: 6, o: 6, ó: 6, ô: 6, x: 6,
    g: 7, p: 7, y: 7,
    h: 8, q: 8, z: 8,
    i: 9, í: 9, r: 9
};

// ao clicar no botão, chama a funcao que transforma o nome em array 
buttonCalculate.onclick = (e) => {

    e.preventDefault();
    separateName();

}

// separa o nome em um array de letras 
const separateName = () => {

    let completeName = document.getElementById("name").value.toLowerCase();
    let nameSplit = completeName.split('');

    nameToNumber(nameSplit);
    separateVogals(nameSplit);

}

// transforma o nome em sequencia de numeros
const nameToNumber = (letters) => {
 
    let allNumbersResultArray = letters.map( n => {

        if (n in lettersToNumbers) {

            return lettersToNumbers[n];

        }

    }).sort((a, b) => a - b).join(''); 
    // join('') remove os espaços vazios

    let num = allNumbersResultArray.split('').map(Number);
    console.log(num, "array de numeros")
    sumNumber(num);
    
}


// calcula o numero da alma (soma todos os números do array)
const sumNumber = (array) => {

    let almaNumberCont = 0;

    for (let i = 0; i < array.length; i++) {
        
        almaNumberCont += array[i];

    }
    
    console.log(almaNumberCont, "primeira soma")
    miniNumber(almaNumberCont);

}

// transforma number em array e soma os os números até que tenha apenas 1 número inteiro
const miniNumber = (num) => {

    let numbersToString = num.toString();
    let numbersSumArray = numbersToString.split('').map(Number);
    let numberReduce = numbersSumArray.reduce((total, numero) => total + numero, 0);

    let numberTotal = numberReduce.toString();
    console.log(numberTotal.length, "comprimento do numero antes do if");

        if (numberTotal.length >= 2) {

            console.log(numberTotal, "caiu no if");
            numberTotal = miniNumber(numberTotal);
    
        } else if (numberTotal.length == 1) {

            console.log(numberTotal, "caiu no else");
            result.innerHTML = numberTotal;

        } else {
            return "not a number"
        }
}



const separateVogals = (arrayLetters) => {

    let arrayVogals = [];
   
    for (let k = 0; k < arrayLetters.length; k++) {

        if (arrayLetters[k] == "a") {
           arrayVogals.push(arrayLetters[k]);
        } else if (arrayLetters[k] == "e") {
            arrayVogals.push(arrayLetters[k]);
        } else if (arrayLetters[k] == "i") {
            arrayVogals.push(arrayLetters[k]);
        } else if (arrayLetters[k] == "o") {
            arrayVogals.push(arrayLetters[k]);
        } else if (arrayLetters[k] == "u") {
            arrayVogals.push(arrayLetters[k]);
        }
    }

    console.log(arrayVogals, "AQUI array final de vogais");
    vogalsResult.innerHTML = arrayVogals;
   
}


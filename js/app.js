// global variables
const buttonCalculate = document.getElementById("button");
const result = document.getElementById("result");

// objeto conversao de letras para numeros
const lettersToNumbers = {
    a: 1, j: 1, s: 1,
    b: 2, k: 2, t: 2,
    c: 3, l: 3, u: 3,
    d: 4, m: 4, v: 4,
    e: 5, n: 5, w: 5,
    f: 6, o: 6, x: 6,
    g: 7, p: 7, y: 7,
    h: 8, q: 8, z: 8,
    i: 9, r: 9
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
}

// transforma o nome em numero, remove espacos com join, chama as funcoes de soma
const nameToNumber = (nameSplit) => {
 
    let numbersResultArray = nameSplit.map( n => {

        if (n in lettersToNumbers) {
            return lettersToNumbers[n];
        }

    }).sort((a, b) => a - b).join(''); 
    // join('') remove os espaços vazios


    result.innerHTML = numbersResultArray;
    let num = numbersResultArray.split('').map(Number);
    console.log(num, "aaarray")
    almaNumber(num);
}



// calcula o numero da alma (soma todos os números do array)
const almaNumber = (array) => {

    let almaNumberCont = 0;

    for (let i = 0; i < array.length; i++) {
        
        almaNumberCont += array[i];
    }
    
    console.log(almaNumberCont, "valor finalssss")
    miniNumber(almaNumberCont);
}

// transforma number em string e transforma em um array de numeros

const stringToNumber = (num) => {
    
    let numbersToString = num.toString();
    let transformToArrayNumbers = numbersToString.split('').map(Number);
    return transformToArrayNumbers;
}

// transforma number em array e soma os os números até que tenha um inteiro
const miniNumber = (num) => {

    let numbersToString = num.toString();
    let numbersSumArray = numbersToString.split('').map(Number);
    let numberReduce = numbersSumArray.reduce((total, numero) => total + numero, 0);

    let numberTotal = numberReduce;

        if (numberTotal.length >= 2) {

            console.log(numberTotal, "caiu no if");
            miniNumber(numberTotal);
    
        } else {
            console.log(numberTotal, "caiu no else");
            return numberTotal;
        }
    
     }





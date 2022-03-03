// global variables
const buttonCalculate = document.getElementById("calculate");
const buttonClean = document.getElementById("clean");
const modal = document.getElementById("modal");
const result = document.getElementById("result");
const response = document.getElementById("response");
const inputName = document.getElementById("name");
const errorDiv = document.getElementById("error");

// first number all letters, second number all vogals, third number all consoants
let arrayNumerology = [];

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

    if (inputName != "" && arrayNumerology.length === 3) {

        showAllNumbers(arrayNumerology);
        getInfo(arrayNumerology);
        

    } else {
        errorDiv.innerText = "Please, write your name";
        modal.style.display = "none";
    }


    modal.style.display = "block";
    modal.style.opacity = "1";

}

buttonClean.onclick = (e) => {

    for (child of result.children){
        child.remove();
    }

    arrayNumerology = [];

    modal.style.display = "none";
    modal.style.opacity = "0";
    result.innerText = "";
    inputName.value = "";
    
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

    sumNumber(num);
    
}


// calcula o numero da alma (soma todos os números do array)
const sumNumber = (array) => {

    let almaNumberCont = 0;

    for (let i = 0; i < array.length; i++) {
        
        almaNumberCont += array[i];

    }

    miniNumber(almaNumberCont);

}

// transforma number em array e soma os os números até que tenha apenas 1 número inteiro
async function miniNumber(num) {

    let numbersToString = num.toString();
    let numbersSumArray = numbersToString.split('').map(Number);
    let numberReduce = numbersSumArray.reduce((total, numero) => total + numero, 0);

    let numberTotal = numberReduce.toString();

        if (numberTotal.length >= 2) {

            numberTotal = miniNumber(numberTotal);
    
        } else if (numberTotal.length == 1) {

            arrayNumerology.push(numberTotal);

        } else {
            return "not a number"
        }

}



const separateVogals = (arrayLetters) => {

    let arrayVogals = [];
    let arrayConsoants = [];
   
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
        } else {
            arrayConsoants.push(arrayLetters[k]);
            arrayConsoants.sort((a, b) => a - b);
        }
    }
    
    nameToNumber(arrayVogals);
    nameToNumber(arrayConsoants);
   
}


const showAllNumbers = (arrayNumerology) => {

    let createList;

    for (let g = 0; g < arrayNumerology.length; g++) {

        createList = document.createElement("div");
        createList.classList.add('numerologyNumbers');
        createList.appendChild(document.createTextNode(arrayNumerology[g]));
        result.appendChild(createList);
        
    }


}

const getInfo = (array) => {

    // para cada item do array, comparar com o objeto numerologyData
    let arrayResponse = [];

    let responseNumbers = array.map( num => {

        if (num in numerologyData) {

            arrayResponse.push(numerologyData[num]);
                    
        }
    });
    
    printResult(arrayResponse);
    
}


const printResult = (arrayNumerology) => {

    const [destiny, soul, personality] = arrayNumerology;
    console.log(destiny.id, "aquiiiiiiiiiiiii")

    if (arrayNumerology.length == 3){
    // destiny number result
    let destinyTitle = document.getElementById("destinyNumber");
    destinyTitle.innerText = destiny.id;

    let destinyText = document.getElementById("destinyText");
    destinyText.innerText = destiny.meaning;

    // soul number result
    let soulTitle = document.getElementById("soulNumber")
    soulTitle.innerText = soul.id;
    let soulText = document.getElementById("soulText")
    soulText.innerText = soul.meaning;

    // personality number result
    let personalityTitle = document.getElementById("personalityNumber");
    personalityTitle.innerText = personality.id;
    let personalityText = document.getElementById("personalityText");
    personalityText.innerText = personality.meaning;
    } 
}

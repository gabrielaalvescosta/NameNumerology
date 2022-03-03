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

// convert numbers to letters
const letraNumeros = {
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

// start separate name function and open modal
buttonCalculate.onclick = (e) => {

    e.preventDefault();
    separateName();

    if (inputName.value !== "" && arrayNumerology.length === 3) {

        showAllNumbers(arrayNumerology);
        getInfo(arrayNumerology);
        modal.style.display = "block";
        modal.style.opacity = "1";
        

    } else {
        
        zeraDados();
        errorDiv.innerHTML = "Please, write your name";
    }

}


// clean input and modal
buttonClean.onclick = (e) => {

    for (child of result.children){
        child.remove();
    }

    zeraDados();
    
}

const zeraDados = () => {
    arrayNumerology = [];
    modal.style.opacity = "0";
    modal.style.display = "none";
    result.innerHTML = "";
    inputName.value = "";
}


// array of letters
const separateName = () => {

    let completeName = document.getElementById("name").value.toLowerCase();
    let nameSplit = completeName.split('');

    nameToNumber(nameSplit);
    separateVogals(nameSplit);

}

// transform letter to number
const nameToNumber = (letters) => {
 
    let allNumbersResultArray = letters.map( n => {

        if (n in letraNumeros) {

            return letraNumeros[n];

        }

    }).sort((a, b) => a - b).join(''); 
    // join('') remove os espaços vazios

    let num = allNumbersResultArray.split('').map(Number);

    sumNumber(num);
    
}


// sum all array numbers
const sumNumber = (array) => {

    let almaNumberCont = 0;

    for (let i = 0; i < array.length; i++) {
        
        almaNumberCont += array[i];

    }

    miniNumber(almaNumberCont);

}

// add all the numbers until the result is one number
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


// separate vogals of consoants
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


// show the numbers in modal
const showAllNumbers = (arrayNumerology) => {

    let createList;

    for (let g = 0; g < arrayNumerology.length; g++) {

        createList = document.createElement("div");
        createList.classList.add('numerologyNumbers');
        createList.appendChild(document.createTextNode(arrayNumerology[g]));
        result.appendChild(createList);
        
    }


}


// get numerologyPtData info 
const getInfo = (array) => {

    let arrayResponse = [];

    let responseNumbers = array.map( num => {

        if (num in numerologyPtData) {

            arrayResponse.push(numerologyPtData[num]);
                    
        }
    });
    
    printResult(arrayResponse);
    
}

// show results in modal
const printResult = (arrayNumerology) => {

    const [destiny, soul, personality] = arrayNumerology;

    if (arrayNumerology.length == 3){

        // destiny number result
        let destinyTitle = document.getElementById("destinyNumber");
        destinyTitle.innerHTML = destiny.id;

        let destinyText = document.getElementById("destinyText");
        destinyText.innerHTML = destiny.url;

        // soul number result
        let soulTitle = document.getElementById("soulNumber")
        soulTitle.innerHTML = soul.id;
        let soulText = document.getElementById("soulText")
        soulText.innerHTML = soul.url;

        // personality number result
        let personalityTitle = document.getElementById("personalityNumber");
        personalityTitle.innerHTML = personality.id;
        let personalityText = document.getElementById("personalityText");
        personalityText.innerHTML = personality.url;

    } 
}

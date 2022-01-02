// Write a JavaScript function to check whether an `input` is an array or not:
//per capire se un input, variabile di cui ne vogliamo conoscere la natura, è un array si usa la funzione toString.call(input)==="[object Array]",
//e usando un if statement
let arr = [1, 'salmon', 3, 4, 5, 6, 7, 8, 9]
let notArr = 'hello'
const checkArray = function (input) {
    toString.call(input) === "[object Array]" ? console.log(true) : console.log(false)
}
checkArray(arr)
checkArray(notArr)


// Write a JavaScript function to clone an array:
//per copiare un array si può usare la funzione .map(), che permette di copiare esattamente un array
const cloneArray = function (input) {
    let clonedArr = input.map((x) => x)
    console.log(clonedArr)

}

cloneArray(arr)


//Write a JavaScript function to get the first element of an array.
//Passing a parameter 'n' will return the first 'n' elements of the array.
//se vogliamo creare una funzione che ci riporti solo il numero di elementi che noi vogliamo, cioè n,
//dobbiamo usare la funzione slice, mettendo come valori (0, n) ciò eliminerà tutti gli elementi dopo la n-esima posizione,
//restituendo un array con all'interno gli elementi fino alla n-esima posizione
const returnArr = function (arr, n) {
    n === null ? console.log(arr) :
        console.log(arr.slice(0, n))

}
returnArr(arr, 3)



//Write a JavaScript function to get the last element of an array. 
//Passing a parameter 'n' will return the last 'n' elements of the array.
//in questo esercizio bisogna usare splice come sopra, però invece che dare 2 parametri a slice() basta mettere
//il valore negativo al parametro n, il quale andrà a prendere gli ultimi n elementi di un array.
const returnArr1 = function (arr, n) {
    n === null ? console.log(arr) :
        console.log(arr.slice(-n))

}
returnArr1(arr, 8)


//Write a simple JavaScript program to join all elements of the following array into a string.
//per questo esercizio basta usare la funzione toString, la quale accetta un array come parametro e lo
//trasforma in stringa

myColor = ["Red", "Green", "White", "Black"]
const joinArray = function (array) {
    console.log(array.toString())

}

joinArray(myColor)
joinArray(arr)


//6. Write a JavaScript program which accept a number as input and insert dashes (-)
//between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
//prima dobbiamo dividere la stringa(1), poi cerchiamo se ci sono numeri (2), e infine creiamo un if statements
//dove cerchiamo solo numeri pari e nel mezzo ci mettiamo un - con splice (3), e ritorniamo la stringa riunita (4)
function insertHyphen(str) {
    const strNum = str.toString()//dato che non tutti i numeri possono essere in una stringa, prima la trsformiamo in tale
    var strArr = strNum.split('');//(1)
    var numArr = strArr.map(Number); //(2)
    for (var i = 0; i < numArr.length; i++) { //(3)
        if (numArr[i - 1] % 2 === 0 && numArr[i] % 2 === 0) {
            numArr.splice(i, 0, '-');
        }
    }
    return numArr.join('');//(4)
}
console.log(insertHyphen(112233445566))



//Write a JavaScript program to sort the items of an array.
//basta usare il metodo sort()

let arr1 = [3, 18, 7, 26, -5, -4, 33, 2, 71]


console.log(arr1.sort())


//8. Write a JavaScript program to find the most frequent item of an array.
//non ho capito perchè
const arr8 = [3, 'a', 'a', '2', 2, 3, '2', 3, '2', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr8.length; i++) {
    for (let j = i; j < arr8.length; j++) {
        if (arr8[i] == arr8[j])
            m++;
        if (mf < m) {
            mf = m;
            item = arr8[i];
        }
    }
    m = 0;
}
console.log(`${item} ( ${mf} times ) `);


//9.Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
//ho creato un'array vuoto e poi una funzione che prima dividi ogni lettera della stringa e con un for loop ho fatto
//in modo che trasformasse ogni carattere nel suo opposto, per poi riunire l'array in una stringa
//n.b. in caso di caratteri speciali, la funzione li considera sia minuscoli che maiuscoli, riportandoli 2 volte

let stringCase = 'hELLO MY NAME IS mORRIS'
let result = []

const reverseCase = function (str) {
    let strSplit = str.split('')
    for (let i = 0; i < strSplit.length; i++) {
        const element = strSplit[i];


        if (element === element.toUpperCase()) {
            result.push(element.toLowerCase())
        } if (element === element.toLowerCase()) {
            result.push(element.toUpperCase())

        }


    }
    return result.join('')
}

console.log(reverseCase(stringCase))


//10. Write a JavaScript program which prints the elements of the following array.
//per risolverlo ho usato un semplice for loop, dove riporto semplicemente l'indice dell'array
//e i valori presenti in quell'indice (arr[i])

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

const printsArr = function (arr) {
    for (i = 0; i < arr.length; i++)
        console.log("The array in the index " + i + " have: " + arr[i]);
}
printsArr(a)


//11. Write a JavaScript program to find the sum of squares of a numeric vector.
//in pratica devo creare un programma per trovare la somma dei quadrati di un
// //array di numeri
// l'ho risolto copianod e incollando dal sito, in pratica grazie a i-- parte dalla fine e
//con il comando sum += inserisce al'interno di sum tutte le somme


function sum_sq(array) {
    var sum = 0,
        i = array.length;
    while (i--) {
        sum += Math.pow(array[i], 2);
    } return sum;
}

console.log(sum_sq(arr1))


//12. Write a JavaScript program to compute the sum and product of an array of integers.
//ho usato lo stesso metodo dell'esercizio precendente

const sumAndCompute = function (array) {
    let compute = 1
    let sum = 0,
        i = array.length;
    while (i--) {
        sum += array[i]
        compute = compute * array[i]
    } return console.log(`The sum of the array is ${sum} and the product of every number is ${compute}`)
}

sumAndCompute(arr1)
sumAndCompute([2, 4])


//13. Write a JavaScript program to add items in an blank array and display the items.
//ho usato semplicemente un .push per 

let array13 = []
const addElement = function (element) {

    array13.push(element)
    console.log(`array13=[${array13}]`)
}

addElement(1)
addElement(2)
addElement('salmon')

//14.Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
//ho creato una variabile che contiene la funzione Set, che crea una lista che accoglie gli elementi
//presenti nell'array iniziale, dove ogni valore è presente solo una volta 
//
let salmone = 'salmone'
let arr14 = [1, 1, 3, 4, 5, 6, 1, 2, 3, 3, 'salmone', salmone]

let uniqueChars = [...new Set(arr14)];

console.log(uniqueChars);



// 16. Write a JavaScript program to find the leap years (anni bisestili) in a given range of years.
// A year is a leap year if the following conditions are satisfied:
// 1-The year is a multiple of 400.
// 2-The year is a multiple of 4 and not a multiple of 100.
const leapYears = function (year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(`${year} is leap`)
    } else {
        console.log(`${year} isn't leap`)
    }
}
leapYears(1999)
leapYears(2000)
leapYears(2001)
leapYears(2002)


//17. Write a JavaScript program to shuffle an array.
let arr17 = [1, 'salmon', 3, 'troope']
const shuffledArray = arr17.sort((a, b) => 0.5 - Math.random());
console.log(shuffledArray)




// 18. Write a JavaScript program to perform a binary search.
// https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470
//work only in sorted array
const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (target === array[middleIndex]) {
            return console.log("Target was found at index " + middleIndex);
        }
        if (target > array[middleIndex]) {
            console.log("Searching the right side of Array")
            startIndex = middleIndex + 1;
        }
        if (target < array[middleIndex]) {
            console.log("Searching the left side of array")
            endIndex = middleIndex - 1;
        }
        else {
            console.log("Not Found this loop iteration. Looping another iteration.")
        }
    }

    console.log("Target value not found in array");
}
let exampleArray = [1, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]

binarySearch(exampleArray, 100)
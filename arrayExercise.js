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


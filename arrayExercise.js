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
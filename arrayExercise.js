// Write a JavaScript function to check whether an `input` is an array or not:
//per capire se un input, variabile di cui ne vogliamo conoscere la natura, è un array si usa la funzione toString.call(input)==="[object Array]",
//e usando un if statement
let arr = [1, 2]
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
// Write a JavaScript function to check whether an `input` is an array or not

let arr = [1, 2]
let notArr = 'hello'

const checkArray = function (input) {
    toString.call(input) === "[object Array]" ? console.log(true) : console.log(false)
}

checkArray(arr)
checkArray(notArr)


//per capire se un input, variabile di cui ne vogliamo conoscere la natura, è un array si usa la funzione toString.call(input)==="[object Array]",
//e usando un if statement


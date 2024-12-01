let createCounter = function (n) {

    return function (){
        return n++;
    }
}

let counter = createCounter(5)
console.log(counter())
console.log(counter())
console.log(counter())
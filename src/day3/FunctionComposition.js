/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {

    return function(x) {
        let result = x;
        for(let i = functions.length-1; i>=0; i--){
            result = functions[i](result);
        }
        return result;
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
console.log(fn(10)) // 9
console.log(fn(100)) // 9

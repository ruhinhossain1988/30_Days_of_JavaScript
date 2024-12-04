/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
    let calls = false;
    return function(...args){
        if(!calls){
            calls = true;
            return fn(...args);
        }

    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)) // 6
onceFn(2,3,6); // returns undefined without calling fn


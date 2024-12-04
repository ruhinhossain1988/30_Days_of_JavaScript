/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize1(fn) {
    const cache = {};
    let count = 0;
    return function(...args) {
        let  key = JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }
        let value = fn(...args);
        cache[key] = value;
        return value;
    }
}

function memoize2(fn) {
    const cache = new Map();

    return function(...args) {
        let  key = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }
        let value = fn(...args);
        cache.set(key, value);
        return value;
    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
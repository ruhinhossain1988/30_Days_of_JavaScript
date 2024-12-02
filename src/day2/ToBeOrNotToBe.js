const expect = function (value) {

    return {
        toBe: (anotherValue)=> {
            if (value === anotherValue) {
                return true;
            }else {
                console.log("Not Equal");
            }
        },
        notToBe: (anotherValue)=> {
            if (value !== anotherValue) {
                return true;
            }else
                console.log("Equal");
        }
    }
}

let tobe = expect(5).toBe(5)
console.log(tobe)
expect(5).notToBe(2)

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
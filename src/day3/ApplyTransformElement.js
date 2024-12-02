function transformArray(arr, fn) {
    const transformedArray = [];
    for (let i = 0; i < arr.length; i++) {
        transformedArray.push(fn(arr[i], i));
    }
    return transformedArray;
}

// Example usage:
const inputArray = [1, 2, 3];
const mappingFunction = (value, index) => value + index;

const result = transformArray(inputArray, mappingFunction);
console.log(result); // Output: [1, 3, 5, 7]

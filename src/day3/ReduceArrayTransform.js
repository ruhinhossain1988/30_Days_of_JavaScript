const reduce = function(nums, fn, init) {
    let result = init;
    for(let i=0; i<nums.length; i++){
        result = fn(result, nums[i]);
    }
    return result;
};

let nums = [1,2,3,4];
let init = 0;
const sumFun = function sum(accum, curr) { return accum + curr; }

console.log(reduce(nums, sumFun, init));
//Task 1
function processArray (nums){
    let result = []
    for (i in nums){
        if (nums[i] % 2 === 0){
            result.push(nums[i] * 2)
        }
        else{
            result.push(nums[i] * 3)
        }
    }
    return result
}

// Task 1 usage example
nums = [3,5,6,9,0]
console.log(processArray(nums))


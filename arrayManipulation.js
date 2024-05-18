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

//Task 2

function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
    const num = numbers[index];
    return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
  });
}

// Task 2 usage example
function processArray(arr) {
  return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

const strings = ['Nana', 'Kwame', 'Asamoah', 'Agyemang', 'Junior'];
const numbers = processArray([1, 2, 3, 4, 5]);
const formattedStrings = formatArrayStrings(strings, numbers);

console.log(formattedStrings);
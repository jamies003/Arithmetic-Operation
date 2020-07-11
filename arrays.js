let array = [2,3,6,6,5]

function getSecondLargest(nums) {
  // Complete the function

let largestNum = nums[0];
let secondLargestNum;


for (let i = 0; i < nums.length; i++){

  let currentNum = nums[i];

  if (currentNum > largestNum) {
      secondLargestNum = largestNum;
      largestNum = currentNum;
  } else if (currentNum < largestNum && currentNum > secondLargestNum) {
      secondLargestNum = currentNum;

    }
  }
  return secondLargestNum;
}



function main() {
  const n = +(readLine());
  const nums = readLine().split(' ').map(Number);
  
  console.log(getSecondLargest(nums));
}
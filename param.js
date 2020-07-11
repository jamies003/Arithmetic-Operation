// let array = [2,3,6,6,5]

// function getSecondLargest (nums) {

//   let largestNum = nums[0];
//   let secondlargestNum;

//   for (let i = 0; i < nums.length; i++) {
    
//     let currentNums = nums[i];

//     if (currentNums > largestNum) {
//       largestNum = currentNums;
//     } else if ( currentNums < largestNum && currentNums > secondlargestNum) {
//       secondlargestNum = currentNums
    

//     }

//   }
//   return secondlargestNum;
//   // Complete the function
// }


function getSecondLargest(nums) {
  // Complete the function

let largestNum = nums[0];
let secondLargestNum;


for (var i = 0; i < nums.length; i++){
  let currentNum = nums[i];
  if (currentNum > largestNum) {
      secondLargestNum = largesNum;
      largestNum = currentNum;
  } else if (currentNum < largestNum && currentNum > secondLargestNum) {
      secondLargestNum = currentNum;

      }
  }
  console.log(largestNum);
  console.log(currentNum);
  console.log(secondLargestNum);
  return secondLargestNum;
}

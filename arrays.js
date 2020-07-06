function getSecondLargest(nums) {
  // Complete the function

let largest_val = nums[0];
let second_largest_val;


for (var i = 0; i < nums.length; i++){
  let current_num = nums[i];
  if (current_num > largest_val) {
      second_largest_val = largest_val;
      largest_val = current_num;
  } else if (current_num < largest_val && current_num > second_largest_val) {
      second_largest_val = current_num;

    }
  }
  return second_largest_val;
}



function main() {
  const n = +(readLine());
  const nums = readLine().split(' ').map(Number);
  
  console.log(getSecondLargest(nums));
}

var searchInsert = function(nums, target) {
    let ans = nums.length;
    if(nums.includes(target)) {
      return nums.indexOf(target);
    } 
    for (var i = 0; i<nums.length; i++){
        if (nums[i] > target){
        ans = i;
        break;
        }
  }
   return ans;
};

console.log(searchInsert([1,3,5,6], 5))

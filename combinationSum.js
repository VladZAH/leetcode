
var combinationSum4 = function(nums, target) {
    let M = new Map();
    let ways = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= target){
            M[nums[i]] = Math.floor(target / nums[i]);
        }
    }
    
    return M
};

combinationSum4([1,2,3,4,5,6], 4)

var threeSum = function(nums) {
    let ans = [];
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break;
        if(i === 0 || (nums[i] !== nums[i-1])){
            let low = i+1;
            let high = nums.length - 1;
        
            while(low < high){
                let sum = nums[i] + nums[low] + nums[high];
                if(sum < 0 || (i < low + 1 && (nums[low] === nums[low + 1]))){
                    low++;
                }
                if(sum > 0 || (high < nums.length - 1 && (nums[high] === nums[high -1]))){
                    high--;
                }
                if(sum === 0){
                    ans.push([nums[i], nums[low], nums[high]]);
                    high--;
                    low++;
                };
            }
        }   
    }
    return ans;
};

console.log(threeSum([-1,0,1,2,-1,-4]))

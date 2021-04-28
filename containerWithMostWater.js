
/// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

/// Notice that you may not slant the container.

var maxArea = function(height) {
    var mArea = 0;
    for(var i = 0; i < height.length; i++){
        for(var j = i+1; j < height.length; j++){
            var nArea = (Math.min(height[i], height[j])) * (j-i)
            mArea = Math.max(mArea, nArea)
        }  
    }
  return mArea;  
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]));

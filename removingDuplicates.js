var removeDuplicates = function(nums) {
    var newArray = []
    
    for(var i=0; i<nums.length; i++) {
        if(!newArray.includes(nums[i])) {
           newArray.push(nums[i])
        }
    }
    
    return newArray
};

var result = removeDuplicates([1,34,123,1,232,123,34])
console.log(result)
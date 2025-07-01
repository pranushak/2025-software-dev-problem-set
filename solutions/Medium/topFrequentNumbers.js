function frequentNumbers(nums, k) {
    const result = {};
    const resultArr = [];
    for(let num of nums) {
      result[num] = (result[num] || 0) + 1;
   }
    
   const sorted = Object.entries(result)
    .sort((a,b) =>b[1] - a[1])
    .slice(0,k)
    .map(([n]) => parseInt(n))
    return sorted;
}

let nums = [1,1,1,2,2,3]
console.log(frequentNumbers(nums,2));
function consecutive(nums) {
   const numSet = new Set(nums);
   let longest = 0;
   for(let num of numSet) {
    if(!numSet.has(num - 1)){
        let length = 1;
        while(numSet.has(num + length)) {
            length++;
        }
        longest = Math.max(longest,length);
    }
   }
   return longest;
}

console.log(consecutive([100,10, 10, 1, 1,1, 12, 2, 40, 3, 9]));
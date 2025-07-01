function groupAnagram(strs) {
    let result = {};

    for(let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if(!result[sortedStr]) {
            result[sortedStr] =[];

        }else {
            console.log(result[sortedStr].push(str));
            
        }
    }
    return Object.values(result);
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))
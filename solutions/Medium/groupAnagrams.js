function groupAnagram(strs) {
    let result = {};

    for(let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if(!result[sortedStr]) {
            result[sortedStr] =[];

        }else {
            result[sortedStr].push(str);
        }
    }
    return Object.values(result);
}
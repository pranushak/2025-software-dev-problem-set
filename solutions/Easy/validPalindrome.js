function palindrome(s) {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const revStr = str.split('').reverse().join();
    return str === revStr;
}
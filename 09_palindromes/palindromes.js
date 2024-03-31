const palindromes = function (str) {
    const charRemove = /[\W_]/g;
    const newStr = str.toLowerCase().replace(charRemove, '');
    const reverseStr = newStr.split('').reverse().join('');
    if (reverseStr === newStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

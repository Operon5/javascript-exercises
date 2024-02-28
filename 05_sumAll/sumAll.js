const sumAll = function(num1, num2) {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    if(min < 0) return 'ERROR';
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
        }
    return total;
}

// Do not edit below this line
module.exports = sumAll;

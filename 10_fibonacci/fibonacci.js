const fibonacci = function(num) {
    let intNum = Number(num);
    if (intNum < 0) return 'OOPS';
    if (intNum === 0) return 0;

    let a = 0;
    let b = 1;

    for (let i =1; i < intNum; i++) {
        let newNum = b;

        b = a + b;
        a = newNum;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

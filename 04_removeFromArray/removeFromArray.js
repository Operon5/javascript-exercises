const removeFromArray = function(array, ...position) {
    return array.filter(val => !position.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;

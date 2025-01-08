const repeatString = function(str, num) {
    let word = str;
    
    if (num === 0) {
        return '';
    } else if (num <= 0) {
        return 'ERROR';
    }
    for (let i = 1; i < num; i++) {
        word += str;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;

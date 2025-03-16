const sumAll = function(num_start, num_end) {
    if ((Number.isInteger(num_start) != true) || (Number.isInteger(num_end) != true)) {
        return "ERROR";
    } else if ((num_start < 0) || (num_end < 0)) {
        return "ERROR";
    } else {
        let large_num;
        let small_num;
        if (num_start > num_end) {
            large_num = num_start;
            small_num = num_end;
        } else {
            large_num = num_end;
            small_num = num_start;
        };
        let sum = 0;
        for (let i = small_num; i < large_num+1; i++) {
            sum += i;
        };
        return sum;
    };
};

// Do not edit below this line
module.exports = sumAll;

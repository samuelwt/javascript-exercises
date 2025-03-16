const repeatString = function(string, num_times) {
    // num_times must be a positive, integer
    // maybe check if string is of type string
    if (num_times < 0) {
        console.log("Please key in a non-negative integer.");
        return "ERROR";
    } else {
        num_times = Math.floor(num_times);
        let outputString = string;
        if (num_times == 0) {
            return "";
        } else {
            for (let i=0; i < num_times-1; i++) {
                outputString += string;
            }
            return outputString;
        };
    };
};

// Do not edit below this line
module.exports = repeatString;

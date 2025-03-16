const removeFromArray = function(array, ...arrayElem) {
    // the rest parameter takes in an uninitialized number of arguments as an array
    let index;
    for (let elem of arrayElem) {
        index = 0;
        while (index !== -1) {
            index = array.indexOf(elem);
            if (index == -1) continue;
            array.splice(index,1);
            index = array.indexOf(elem); // check masih ada ga?
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

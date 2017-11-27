var expensiveOperation = function(times, start) {
    // function args to array
    var key = Array.prototype.slice.apply(arguments);
    var result = 0;

    if (!expensiveOperation.cache[key]) {
        for (var i = 0; i < times; i++) {
            result += String(i);
        }

        expensiveOperation.cache[key] = result;
    }

    return expensiveOperation.cache[key];
};

expensiveOperation.cache = {};
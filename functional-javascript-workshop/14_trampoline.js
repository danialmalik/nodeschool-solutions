function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return function () { repeat(operation, --num); };
}

function trampoline(fn) {
    return function () {
        let result = fn.apply(this, arguments);
        while (result instanceof Function) {
            result = result();
        }
        return result;
    }
}

module.exports = function (operation, num) {
    return trampoline(repeat)(operation, num);
}

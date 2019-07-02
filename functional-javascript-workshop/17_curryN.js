function curryN(fn, n = fn.length) {
    return function(arg){
        if (n<= 1) return fn(arg);
        return curryN(fn.bind(this, arg), n-1);
    }
}

module.exports = curryN

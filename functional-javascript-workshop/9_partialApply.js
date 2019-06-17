var slice = Array.prototype.slice

function logger(namespace) {
    return function logger(...args){
        let formatted = [`${namespace}`].concat(slice.call(args));
        console.log(...formatted);
    }
}

module.exports = logger

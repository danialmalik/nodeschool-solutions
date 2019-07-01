function Spy(target, method) {
    let obj = {count:0};
    let originalMethod = target[method];
    target[method] = function(){
        obj.count++;
        return originalMethod.apply(this, arguments);
    }
    return obj;
}

module.exports = Spy;

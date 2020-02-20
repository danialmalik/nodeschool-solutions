'use strict';
function all(promise1, promise2) {
    var counter = 0;
    var vals = [];
    var promise = new Promise((resolve, reject) => {
        function increment(val, index) {
            counter++;
            vals[index] = val;
            if (counter == 2) {
                resolve(vals);
            }
        }
        promise1.then(val=>increment(val,0))
        promise2.then(val=>increment(val,1))


    })
    return promise;
}


all(getPromise1(), getPromise2())
    .then(console.log)

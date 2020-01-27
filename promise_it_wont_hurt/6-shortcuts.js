// Freehand assignment

var fulfillingPromise = Promise.resolve('SUCCESS');
var failingPromise = Promise.reject('FAILURE');

function handlePromise(promise) {
    promise.then(console.log).catch(console.log);
}

// old way
handlePromise(fulfillingPromise)
handlePromise(failingPromise)

// shortcut
fulfillingPromise.then(console.log)
failingPromise.catch(console.log)

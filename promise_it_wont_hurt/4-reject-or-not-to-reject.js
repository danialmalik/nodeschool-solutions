let p = new Promise((resolve, reject) => {
    resolve('I FIRED');
    reject(Error('I DID NOT FIRE'));
})

function onRejected(msg){
    console.log(msg);
}
p.then(console.log, onRejected);

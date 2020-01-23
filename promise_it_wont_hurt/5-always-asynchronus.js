const p = new Promise((resolve,reject)=>{
    resolve('PROMISE VALUE');
})


p.then(console.log);
console.log('MAIN PROGRAM')

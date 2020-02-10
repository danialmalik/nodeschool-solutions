function attachTitle(name){
    return `DR. ${name}`;
}

var p = new Promise((resolve, reject)=>{
    resolve('MANHATTAN');
});

p.then(attachTitle).then(console.log)

function parsePromised(){
    return new Promise((resolve, reject)=>{
        try{
            const jsonData = JSON.parse(process.argv[2]);
            resolve(jsonData);
        } catch (ex) {
            reject(ex.message)
        }
    })
}

parsePromised()
.then(null, console.log)
